import { Container, Title } from './styles';
import { Bell, BellSlash } from 'phosphor-react';
import { useController } from './controller';

function NotificationButton() {
  const { toggleNotifications, enabledNotifications } = useController();

  return (
    <Container onClick={toggleNotifications} enabled={enabledNotifications}>
      {enabledNotifications ? <Bell /> : <BellSlash />}
      <Title>
        {enabledNotifications ? 'Notifications ON' : 'Notifications OFF'}
      </Title>
    </Container>
  );
}

export { NotificationButton };
