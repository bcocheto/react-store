import { Link, Typography } from '@mui/material';

export const CopyrightComponent = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' sx={{ mt: 5 }}>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/bcocheto'>
        Breno Cocheto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
