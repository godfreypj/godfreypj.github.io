import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  toggleTheme: () => void;
  customColor: string;
}

export default function Header({ toggleTheme, customColor }: HeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuItems = [
    { label: 'About', onClick: () => console.log('clicked about') },
    { label: 'Gallery', onClick: () => console.log('clicked gallery') },
    { label: 'Projects', onClick: () => console.log('clicked projects') },
    { label: 'Toggle Theme', onClick: toggleTheme },
  ];
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" data-testid="Header">
      <Toolbar>
        <Box sx={{ width: '100%', px: '10%' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} sm={6}>
              <Typography variant="h6" component="div">
                godfreypj
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} container justifyContent="flex-end">
              <Hidden mdDown>
                {/* Buttons for desktop and tablet mode */}
                {menuItems.map((item) => (
                  <MenuItem key={item.label} onClick={item.onClick}>
                    {item.label}
                  </MenuItem>
                ))}
              </Hidden>
              <Hidden mdUp>
                {/* Hamburger menu for mobile mode */}
                <IconButton
                  edge="start"
                  aria-label="menu"
                  onClick={handleClick}
                >
                  <MenuIcon sx={{ color: customColor }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      onClick={item.onClick}
                      sx={{ color: customColor }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Hidden>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
