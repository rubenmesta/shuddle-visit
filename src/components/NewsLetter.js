import * as React from 'react';
import { Box, TextField, Typography, Snackbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import Typography from '../components/Typography';
// import TextField from '../components/TextField';
// import Snackbar from '../components/Snackbar';
// import Button from '../components/Button';
import { Button } from 'odyssey-design-system';
import Questions from './Questions';
import { colors } from '../utils/colors';

function NewsLetter() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      component="section"
      sx={{ mt: 30, display: 'flex', flexDirection: 'column' }}
    >
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: colors.secondary[100],
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                fontFamily={'Anton'}
              >
                Connect with Us
              </Typography>
              <Typography variant="h5">
                Join the Space Travel Community.
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                sx={{ width: '100%', mt: 3, mb: 2, background: 'white' }}
              />

              <Button variant={'black'} label={'Subscribe'} size={'medium'}>
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/img/dots.png)',
            }}
          />
          <Box
            component="img"
            src="/img/unsplash.jpg"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
      <Questions />
    </Container>
  );
}

export default NewsLetter;
