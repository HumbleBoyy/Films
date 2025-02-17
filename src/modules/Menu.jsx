import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { navbarList } from '../hooks/useRoutes';
import { NavLink } from 'react-router-dom';
import getContext from '../hooks/getContext';
import CustomDrawer from './Drawer';
import { Autocomplete, TextField } from '@mui/material';
import { instanceV2 } from '../hooks/instance';
import { API_KEY } from '../hooks/getEnv';


export default function Menu() {
    const {openDrawer, setOpenDrawer} = getContext()
    const [filmData, setFilmData] = React.useState([])

    const handleSearch = (e)=> {
      instanceV2().get(`/search/movie?query=${e.target.value}&include_adult=false&api_key=${API_KEY}`).then(res => {
        setFilmData(res.data.results.map(item => {
          const data = {
            label:item.original_title,
            id:item.id
          }
          return data
        }))
      })
    }

  return (
     <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={()=> setOpenDrawer(!openDrawer)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movies
          </Typography>
          <nav className='flex items-center gap-5 mr-2'>
          {navbarList.map(item => <NavLink key={item.id} to={item.path} className={"pb-1 border-b-2 border-transparent"}>{item.title}</NavLink>)}
         
          <Autocomplete
            className='!border-white border-2 outline-none rounded-md !text-white'
            disablePortal
            onInput={(e)=> handleSearch(e)}
            size='small'
            options={filmData}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} placeholder='Search...' className='!text-white'/>}
          />
           </nav>
        </Toolbar>
      </AppBar>
    </Box>
    <CustomDrawer/>
     </>
  );
}
