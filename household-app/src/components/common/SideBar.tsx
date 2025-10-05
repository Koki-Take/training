import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  ListItemText,
} from "@mui/material";
import React, { CSSProperties } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";

interface SideBarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}

interface MenuAitem {
  text: string;
  path: string;
  icon: React.ComponentType;
}

const SideBar = ({
  drawerWidth,
  mobileOpen,
  handleDrawerClose,
  handleDrawerTransitionEnd,
}: SideBarProps) => {
  const MenuItems: MenuAitem[] = [
    { text: "ホーム", path: "/", icon: HomeIcon },
    { text: "レポート", path: "/report", icon: QueryStatsIcon },
  ];

  const defaultStyleLink: CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  };

  const activeStyleLink: CSSProperties = {
    backgroundColor: "rgba(0,0,0,0.08)",
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {MenuItems.map((item, index) => (
          <NavLink
            key={index} // NavLink に key を追加
            to={item.path}
            style={({ isActive }) => {
              console.log("選択されたメニューは", item.text, isActive);
              return {
                ...defaultStyleLink,
                ...(isActive ? activeStyleLink : {}),
              };
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* モバイル用 */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        slotProps={{
          root: {
            keepMounted: true,
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* PC用 */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBar;
