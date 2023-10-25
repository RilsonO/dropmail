import { Header } from './components/header/view';
import { EmailList } from './components/email-list/view';
import { useController } from './controller';
import {
  EmailContent,
  BaseHightLight,
  HomeContainer,
  HomeContent,
  InboxTitle,
  Loading,
  HomeContentMobile,
  InboxTitleMobile,
  BaseHightLightMobile,
  EmailContentMobile,
  EmailContentContainerMobile,
  BackButton,
  MailFrom,
  EmailContentHeaderMobile,
} from './styles';

export function Home() {
  const { isInSession, mailSelected, handleSelectMail, resetSelectedMail } =
    useController();

  if (!isInSession) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        <InboxTitle>
          <span>Inbox</span>
        </InboxTitle>
        <BaseHightLight />

        <EmailList onClick={handleSelectMail} />

        <BaseHightLight>
          {mailSelected && (
            <>
              <strong>{mailSelected.headerSubject}</strong>

              <EmailContent>
                <span>{mailSelected.text}</span>
              </EmailContent>
            </>
          )}
        </BaseHightLight>
      </HomeContent>

      <HomeContentMobile>
        <InboxTitleMobile>
          <span>Inbox</span>
        </InboxTitleMobile>

        {!mailSelected ? (
          <EmailList onClick={handleSelectMail} />
        ) : (
          <EmailContentContainerMobile>
            <EmailContentHeaderMobile>
              <MailFrom>From: {mailSelected.fromAddr}</MailFrom>
              <BackButton onClick={resetSelectedMail}>Voltar</BackButton>
            </EmailContentHeaderMobile>
            <BaseHightLightMobile>
              <span>
                About:
                <strong>{mailSelected.headerSubject}</strong>
              </span>

              <EmailContentMobile>
                <span>{mailSelected.text}</span>
              </EmailContentMobile>
            </BaseHightLightMobile>
          </EmailContentContainerMobile>
        )}
      </HomeContentMobile>
    </HomeContainer>
  );
}
