import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <Box px={{ xs: 2, sm: 2, md: 5 }} py={2} width="100%">
      <Icon width={50} icon="fa6-solid:building-ngo" />
    </Box>
  );
}
