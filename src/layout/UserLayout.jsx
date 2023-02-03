import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ToggleButton from "./../components/ToggleButton";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import navigation from "./Navigation";

const drawerWidth = 240;
function ResponsiveDrawer({ children, window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const MenuItems = navigation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = useTheme();

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {MenuItems.map((page) => (
          <ListItem disablePadding sx={{ display: "block" }} key={page.title} onClick={() => {}}>
            <Link to={page.path} style={{ textDecoration: "none" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    m: 1,
                    fontSize: 18,
                    color: theme.palette.primary.main,
                  }}
                >
                  <Icon icon={page.icon} />
                </ListItemIcon>
                <ListItemText primary={page.title} sx={{ color: theme.palette.primary.main }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          ml: { sm: `${drawerWidth}px`, zIndex: theme.zIndex.drawer + 1 },
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: "row", width: "100vw" }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Clients Dashboard
          </Typography>

          <Box>
            <ToggleButton />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
