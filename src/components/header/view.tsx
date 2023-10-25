import { HeaderContainer } from './styles';
import logoCodesh from '../../assets/logo-codesh.svg';
import { NotificationButton } from '../notification-button/view';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCodesh} alt='Logo da Codesh' />

      <NotificationButton />
    </HeaderContainer>
  );
}
