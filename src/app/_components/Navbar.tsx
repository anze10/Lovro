"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar>
          {/* Logo */}
          <Image style={{ width: 250, height: "auto", padding: 10 }}
            src={`/logo.png`}
            alt={"logo"}
            width={250}
            height={100}
          />

          {/* Placeholder for other navigation links - can add more as needed */}


          {/* This Box pushes the button to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Button moved to the right */}
          <Button color="inherit" sx={{ color: "black" }}>Kontakt</Button>
          <Button color="inherit" sx={{ color: "black" }}>O nas</Button>
          <Button color="inherit" sx={{ color: "black" }}>Izdelki</Button>
          <Button color="inherit" sx={{ color: "black" }}>Storitve </Button>
          <Button color="inherit" sx={{ color: "black" }}>Novice</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}