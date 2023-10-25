import { MailDTO } from '../../../../dtos/MailDTO';
import { useSession } from '../../../../hooks/useSession';

interface UseController {
  mails: MailDTO[];
}

export function useController(): UseController {
  const { mails } = useSession();

  return {
    mails,
  };
}
