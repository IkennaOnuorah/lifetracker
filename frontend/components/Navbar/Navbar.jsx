import * as React from 'react';
import Appbar from '@mui/material/Appbar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Appbar position="static">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <Link to ="/Activity">Activity</Link>
              </li>
              <li>
                <Link to ="/Exercise">Exercise</Link>
              </li>
              <li>
                <Link to ="/Nutrition">Nutrition</Link>
              </li>
              <li>
                <Link to ="/Sleep">Sleep</Link>
              </li>
              <li>
                <Link to ="/Signup">Signup</Link>
              </li>
              <li>
                <Link to ="/Signup">Signup</Link>
              </li>
            </ul>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LifeTracker
          </Typography>
          <Button color="inherit">Signup</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Appbar>
    </Box>
  );
}





