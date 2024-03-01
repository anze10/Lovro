"use client"
import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: 'grey.100', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Parketarstvo Ravbar</Typography>
            <Typography variant="body1">I K Roku 139, 8000, Novo Mesto</Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              LES JE NARAVEN, PUSTIMO DA TAK TUDI OSTANE
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} container alignItems="center" justifyContent="center">
            <IconButton href="tel:041726602">
              <PhoneIcon />
            </IconButton>
            <IconButton href="mailto:info@parket-ravbar.com">
              <EmailIcon />
            </IconButton>
            <Link href="#" underline="hover">
              <FacebookIcon />
            </Link>
            <IconButton href="#">
              <MapIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={4} container direction="column" alignItems="flex-end">
            <Link href="#" underline="hover" color="inherit">
              © 2024, parket-ravbar.com
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Piškotki
            </Link>
            <Link href="#" underline="hover" color="inherit">
              izdelava spletnih strani
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
