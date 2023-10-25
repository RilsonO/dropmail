import { useEffect, useState } from 'react';
import { useSession } from '../../../../hooks/useSession';

interface UseController {
  address: string | undefined;
  progress: number;
  copied: boolean;
  refreshAndResetTimer: () => void;
  handleCopy: () => void;
}

const PROGRESS_PER_SECOND = 100 / 15;

export function useController(): UseController {
  const { session, fetchMails } = useSession();
  const [copied, setCopied] = useState(false);
  const [tickTime, setTickTime] = useState(0);

  async function handleRefresh() {
    if (session?.id) {
      await fetchMails(session.id);
    }
  }

  async function refreshAndResetTimer() {
    await handleRefresh();
    setTickTime(0);
  }

  function handleCopy() {
    setCopied((prev) => !prev);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTickTime((prevTick) => {
        if (prevTick >= 15) {
          handleRefresh();
          if (copied) {
            handleCopy();
          }
          return 0;
        } else {
          return prevTick + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    address: session?.address,
    progress: tickTime * PROGRESS_PER_SECOND,
    copied,
    refreshAndResetTimer,
    handleCopy,
  };
}
