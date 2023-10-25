import { ArrowClockwise, Clipboard } from 'phosphor-react';
import {
  HeaderContainer,
  HeaderTopContainer,
  InputContainer,
  HeaderContent,
  AutoRefreshContainer,
  Title,
} from './styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Progress } from '../../../../components/progress/view';
import { useController } from './controller';

export function Header() {
  const { address, copied, progress, handleCopy, refreshAndResetTimer } =
    useController();

  return (
    <HeaderContainer>
      <HeaderTopContainer>
        <Title>Your temporary email address</Title>

        <InputContainer>
          <span>{address}</span>

          <CopyToClipboard text={address} onCopy={handleCopy}>
            <button>
              <Clipboard weight='fill' />
              {copied ? 'Copied' : 'Copy'}
            </button>
          </CopyToClipboard>
        </InputContainer>
      </HeaderTopContainer>

      <HeaderContent>
        <AutoRefreshContainer>
          <span>Auto refresh in </span>

          <Progress value={progress} />
        </AutoRefreshContainer>

        <button onClick={refreshAndResetTimer}>
          <ArrowClockwise />
          Refresh
        </button>
      </HeaderContent>
    </HeaderContainer>
  );
}
