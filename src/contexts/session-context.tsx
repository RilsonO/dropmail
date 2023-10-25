import { useMutation } from '@apollo/client';
import moment from 'moment';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { SessionDTO } from '../dtos/SessionDTO';
import { storageSessionGet } from '../storage/storageSession';
import { storageSessionSave } from '../storage/storageSession';
import { GET_MAILS, INTRODUCE_SESSION, client } from '../libs/apollo';
import { MailDTO } from '../dtos/MailDTO';
import { sendNotification } from '../libs/notifications';

interface SessionContextType {
  isStorageLoading: boolean;
  session: SessionDTO | null;
  mails: MailDTO[];
  enabledNotifications: boolean;
  fetchMails: (id: string) => Promise<void>;
  fetchNewSession: () => Promise<void>;
  handleEnablingNotifications: () => void;
}

export const SessionContext = createContext({} as SessionContextType);

interface SessionContextProviderProps {
  children: ReactNode;
}

export function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  const [introduceSession] = useMutation(INTRODUCE_SESSION);

  const [session, setSession] = useState<SessionDTO | null>(null);
  const [isStorageLoading, setIsStorageLoading] = useState(true);
  const [mails, setMails] = useState<MailDTO[]>([]);
  const [enabledNotifications, setEnabledNotifications] = useState(true);

  function handleEnablingNotifications() {
    setEnabledNotifications((prev) => !prev);
  }

  async function fetchMails(id: string) {
    client
      .query({
        query: GET_MAILS,
        variables: { id: id ?? session?.id },
        fetchPolicy: 'no-cache',
      })
      .then((response) => {
        if (response.errors) {
          if (
            response.errors.some(
              (error) => error.message === 'session_not_found'
            )
          ) {
            alert('A sua sessão expirou.\nUma nova sessão será gerada agora.');
            fetchNewSession();
          } else {
            alert(response.errors[0].message);
          }
        } else {
          setMails((currentMails) => {
            if (response.data.session.mails.length > currentMails.length) {
              return response.data.session.mails;
            } else {
              return currentMails;
            }
          });
        }
      })
      .catch((error) => {
        alert(
          `Houve um erro ao tentar recarregar a sua caixa de entrada.\nErro: ${error.message}`
        );
      });
  }

  async function fetchNewSession() {
    introduceSession()
      .then((response) => {
        const sessionToSave: SessionDTO = {
          id: response.data.introduceSession.id,
          expiresAt: response.data.introduceSession.expiresAt,
          address: response.data.introduceSession.addresses[0].address,
        };

        setSession(sessionToSave);
        storageSessionSave(sessionToSave);
        fetchMails(response.data.introduceSession.id);
      })
      .catch((error) => {
        alert(
          `Houve um erro ao tentar gerar uma nova sessão.\nTente novamente mais tarde.\nErro: ${error.message}`
        );
        fetchNewSession();
      });
  }

  function isDatePassed(date: string) {
    const currentDate = moment();
    const parsedDate = moment(date);

    return parsedDate.isBefore(currentDate);
  }

  useEffect(() => {
    if (mails.length > 0 && enabledNotifications) {
      const title = 'Você tem um novo e-mail!';
      const options = {
        body: mails[0].fromAddr + '\n' + mails[0].headerSubject,
        icon: 'https://i.imgur.com/dmHl0.png',
      };
      sendNotification(title, options);
    }
  }, [mails]);

  useEffect(() => {
    setIsStorageLoading(true);
    storageSessionGet()
      .then((storedSession) => {
        if (storedSession?.id && !isDatePassed(storedSession?.expiresAt)) {
          setSession(storedSession);
          fetchMails(storedSession.id);
        } else {
          fetchNewSession();
        }
      })
      .catch((error) => {
        alert(
          `Houve um erro ao tentar recuperar os dados da sua sessão.\nUma nova sessão será gerada agora.\nErro:${error}`
        );
      })
      .finally(() => setIsStorageLoading(false));
  }, []);

  return (
    <SessionContext.Provider
      value={{
        mails: mails,
        isStorageLoading,
        session,
        enabledNotifications,
        fetchMails,
        fetchNewSession,
        handleEnablingNotifications,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
