import { useEffect, useState } from 'react';
import { useSession } from '../../hooks/useSession';
import { MailDTO } from '../../dtos/MailDTO';
import {
  requestPermission,
  verifyNotificationCompatibility,
} from '../../libs/notifications';

interface UseController {
  isInSession: boolean;
  mailSelected: MailDTO | null;
  handleSelectMail: (mail: MailDTO) => void;
  resetSelectedMail: () => void;
}

export function useController(): UseController {
  const { session } = useSession();
  const [mailSelected, setMailSelected] = useState<MailDTO | null>(null);

  function handleSelectMail(mail: MailDTO) {
    setMailSelected(mail);
  }
  function resetSelectedMail() {
    setMailSelected(null);
  }

  useEffect(() => {
    verifyNotificationCompatibility();
    requestPermission();
  }, []);

  return {
    isInSession: !!session,
    mailSelected,
    handleSelectMail,
    resetSelectedMail,
  };
}
