export function verifyNotificationCompatibility() {
  if (!('Notification' in window)) {
    alert('Este navegador não suporta notificações na área de trabalho.');
    return false;
  }
  return true;
}

export const permissionStatus = Notification.permission;

export async function requestPermission(): Promise<NotificationPermission> {
  const result = await Notification.requestPermission();

  if (result === 'denied') {
    alert(
      'Caso decida receber notificações em outro momento será necessário dar a permissão manualmente.'
    );
  }
  return result;
}

export function sendNotification(title: string, options: NotificationOptions) {
  if (Notification.permission === 'granted') {
    const notification = new Notification(title, options);
    notification.onclick = function () {
      window.focus();
      notification.close();
    };
  }
}
