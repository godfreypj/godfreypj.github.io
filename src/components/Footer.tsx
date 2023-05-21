import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          godfreypj © {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
