import { useContext } from 'react';
import { SessionContext } from '../contexts/session-context';

export function useSession() {
  const context = useContext(SessionContext);
  return context;
}
