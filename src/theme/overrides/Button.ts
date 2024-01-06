import { alpha, Theme } from '@mui/material/styles';
import { ButtonProps } from '@mui/material';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

export default function Button(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  const rootStyle = (ownerState: ButtonProps) => {
    const inheritColor = ownerState.color === 'inherit';

    const containedVariant = ownerState.variant === 'contained';

    const outlinedVariant = ownerState.variant === 'outlined';

    const textVariant = ownerState.variant === 'text';

    const softVariant = ownerState.variant === 'soft';

    const smallSize = ownerState.size === 'small';

    const largeSize = ownerState.size === 'large';

    const defaultStyle = {
      ...(inheritColor && {
        // CONTAINED
        ...(containedVariant && {
          color: '#001C2E',
          backgroundColor: '#08C189',
          '&:hover': {
            backgroundColor: '#046F5B',
          },
        }),
        // OUTLINED
        ...(outlinedVariant && {
          '&:hover': {
            backgroundColor: '#046F5B',
          },
        }),
        // TEXT
        ...(textVariant && {
          '&:hover': {
            backgroundColor: '#046F5B',
          },
        }),
        // SOFT
        ...(softVariant && {
          color: '#001C2E',
          backgroundColor: '#08C189',
          '&:hover': {
            backgroundColor: '#046F5B',
          },
        }),
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      backgroundColor: '#08C189',
      color: '#001C2E',
      ...(ownerState.color === color && {
        // CONTAINED
        ...(containedVariant && {
          '&:hover': {
            backgroundColor: '#046F5B',
            boxShadow: theme.customShadows[color],
          },
        }),
        // SOFT
        ...(softVariant && {
          color: '#001C2E',
          backgroundColor: '#08C189',
          '&:hover': {
            backgroundColor: '#046F5B',
          },
        }),
      }),
    }));

    const disabledState = {
      '&.Mui-disabled': {
        // SOFT
        ...(softVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
        }),
      },
    };

    const borderRadius = {
      borderRadius: '26px',
    };

    const size = {
      ...(smallSize && {
        height: 30,
        fontSize: 13,
        ...(softVariant && {
          padding: '4px 14px',
        }),
      }),
      ...(largeSize && {
        height: 48,
        fontSize: 15,
        ...(softVariant && {
          padding: '8px 22px',
        }),
      }),
    };

    return [...colorStyle, defaultStyle, disabledState, size, borderRadius];
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => rootStyle(ownerState),
      },
    },
  };
}
