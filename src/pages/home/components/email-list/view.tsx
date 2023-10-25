import { MailDTO } from '../../../../dtos/MailDTO';
import { useController } from './controller';
import {
  Container,
  EmailListItem,
  EmailListItemPreview,
  EmailListItemSubject,
  EmailListItemTitle,
} from './styles';

interface Props {
  onClick: (mail: MailDTO) => void;
}

export function EmailList({ onClick }: Props) {
  const { mails } = useController();

  return (
    <Container>
      {mails.map((mail) => {
        return (
          <EmailListItem key={mail.text} onClick={() => onClick(mail)}>
            <EmailListItemSubject>{mail.fromAddr}</EmailListItemSubject>

            <EmailListItemTitle>{mail.headerSubject}</EmailListItemTitle>

            <EmailListItemPreview>
              {mail.text.slice(0, 20)}...
            </EmailListItemPreview>
          </EmailListItem>
        );
      })}
      {mails.length <= 0 && <span>Nenhum email!</span>}
    </Container>
  );
}
