import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '../utils/colors';

function Questions() {
  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 9,
      }}
    >
      <Button
        sx={{
          border: `4px solid ${colors.primary[900]}`,
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography
          variant="h4"
          component="span"
          fontFamily={'IBM Plex Serif'}
          color={colors.primary[900]}
        >
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography
        variant="subtitle1"
        sx={{ my: 3 }}
        fontFamily={'Roboto'}
        fontSize={'1.5rem'}
      >
        We are here to help. Get in touch!
      </Typography>
    </Container>
  );
}

export default Questions;
