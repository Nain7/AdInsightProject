import React from 'react';
import { Toolbar, Typography, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            APP LOGO
          </Typography>
          <Button component={Link} to="/dashboard" color="inherit">
            Dashboard
          </Button>
          <Button component={Link} to="/createad" color="inherit">
            Create Ad
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavigation;
