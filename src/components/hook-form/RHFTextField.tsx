// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps, FormHelperText, styled, Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { COLOR } from '@/theme/palette';
// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  bg: string;
  multi?: boolean;
};

const InfoIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  marginTop: theme.spacing(0.3),
}));

const ErrorSpace = styled(FormHelperText)(({ theme }) => ({
  minHeight: '1.5rem',
  marginTop: theme.spacing(0.5),
  display: 'flex',
}));

export default function RHFTextField({ name, helperText, bg, multi, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            autoComplete="off"
            InputLabelProps={{
              style: { color: '#FFF' },
            }}
            sx={{
              backgroundColor: bg,
              borderRadius: '4px',
              border: '1px solid var(--White, #FFF)',
              boxShadow: 'none',
              ' .MuiOutlinedInput-notchedOutline': {
                border: `none`,
                boxShadow: 'none',
              },
              ' .Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: `none`,
                boxShadow: 'none',
              },
              '& .MuiOutlinedInput-root': {
                color: '#FFF',

                '&.Mui-focused fieldset': {
                  border: `none`,
                  boxShadow: 'none',
                },
                '&:hover fieldset': {
                  border: `none`,
                },
              },
            }}
            {...field}
            fullWidth
            value={field.value}
            error={!!error}
            {...other}
          />

          <ErrorSpace error>
            {error && (
              <>
                <InfoIcon>
                  <Icon icon="material-symbols:error-rounded" color={COLOR.error} width="18" />
                </InfoIcon>
                <Typography variant="subtitle2" color={COLOR.error}>
                  {error?.message}
                </Typography>
              </>
            )}
          </ErrorSpace>
        </>
      )}
    />
  );
}
