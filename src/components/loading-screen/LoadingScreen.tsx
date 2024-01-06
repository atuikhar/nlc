import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
// config
import Loading from '../loading';
import ProgressBar from '../progress-bar';
import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '50%',
  transform: 'translate(50%,-50%)',
  zIndex: 9998,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#001C2E',
}));

// ----------------------------------------------------------------------

export default function LoadingScreen() {
  const { themeLayout } = useSettingsContext();

  return (
    <>
      <ProgressBar />

      <StyledRoot
        sx={{
          width: `calc(100% - ${800}px)`,
          height: `calc(100% - ${500}px)`,
          ...(themeLayout === 'horizontal' && {
            width: 1,
            height: `calc(100% - ${300}px)`,
          }),
        }}
      >
        <m.div
          animate={{
            scale: [1, 0.9, 0.9, 1, 1],
            opacity: [1, 0.48, 0.48, 1, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Loading disabledLink sx={{ width: 200, height: 200 }} />
        </m.div>
      </StyledRoot>
    </>
  );
}
