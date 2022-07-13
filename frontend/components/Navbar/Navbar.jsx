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
          


          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LifeTracker
          </Typography>

          <div className="buttons">
            <Link to="/">Home</Link>
            <Link to ="/Activity">Activity</Link>
            <Link to ="/Exercise">Exercise</Link>
            <Link to ="/Nutrition">Nutrition</Link>
            <Link to ="/Sleep">Sleep</Link>
            <Link to ="/Signup">Signup</Link>
            <Link to ="/Login">Login</Link>

          </div>
        </Toolbar>
      </Appbar>
    </Box>
  );
}





