import React from 'react';
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
import { useTheme } from '@mui/material/styles';

interface HeaderProps {
  toggleTheme: () => void;
  customColor: string;
  lightThemeColor: string;
}

export default function Header({
  toggleTheme,
  customColor,
  lightThemeColor,
}: HeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuItems = [
    { label: 'About', onClick: () => console.log('clicked about') },
    { label: 'Gallery', onClick: () => console.log('clicked gallery') },
    { label: 'Projects', onClick: () => console.log('clicked projects') },
    { label: 'Toggle Theme', onClick: toggleTheme },
  ];

  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" data-testid="Header">
      <Toolbar>
        <Box sx={{ width: '100%', px: '2%' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} sm={6}>
              <Typography variant="h6" component="div">
                godfreypj
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} container justifyContent="flex-end">
              <nav
                role="menubar"
                className="access-menubar"
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <Hidden mdDown>
                  {/* Buttons for desktop and tablet mode */}
                  {menuItems.map((item) => (
                    <MenuItem
                      role="menuitem"
                      key={item.label}
                      onClick={item.onClick}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Hidden>
              </nav>
              <Hidden mdUp>
                {/* Hamburger menu for mobile mode */}
                <IconButton
                  edge="start"
                  aria-label="menu"
                  onClick={handleClick}
                >
                  <MenuIcon
                    sx={{ color: isLightTheme ? lightThemeColor : customColor }}
                  />
                </IconButton>
                <Menu
                  sx={{
                    color: isLightTheme ? lightThemeColor : customColor,
                  }}
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
