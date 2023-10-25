import { useSession } from '../../hooks/useSession';
import { permissionStatus, requestPermission } from '../../libs/notifications';

export interface UseController {
  enabledNotifications: boolean;
  toggleNotifications: () => void;
}

export function useController(): UseController {
  const { enabledNotifications, handleEnablingNotifications } = useSession();

  async function toggleNotifications() {
    if (!enabledNotifications && permissionStatus === 'default') {
      await requestPermission();
    }
    if (!enabledNotifications && permissionStatus === 'denied') {
      return alert('Permissões de notificação são necessárias.');
    }
    handleEnablingNotifications();
  }

  return {
    enabledNotifications,
    toggleNotifications,
  };
}
