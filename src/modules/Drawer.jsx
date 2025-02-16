import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import getContext from '../hooks/getContext';
import { navbarList } from '../hooks/useRoutes';
import { Link } from 'react-router-dom';

export default function CustomDrawer() {
    const {openDrawer, setOpenDrawer} = getContext()

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={()=> setOpenDrawer(false)}>
      <List>
        {navbarList.map(item => (
          <ListItem  key={item.id} disablePadding>
            <ListItemButton>
              <Link to={item.path}><ListItemText primary={item.title} /></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
