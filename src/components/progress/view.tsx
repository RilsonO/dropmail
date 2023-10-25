import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from 'styled-components';

export function Progress(props: CircularProgressProps & { value: number }) {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant='determinate'
        {...props}
        size={25}
        style={{ color: theme['blue-500'] }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='caption' component='div'>{`${Math.round(
          props.value * (15 / 100)
        )}`}</Typography>
      </Box>
    </Box>
  );
}
