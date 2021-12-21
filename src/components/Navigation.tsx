import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Mail, EscalatorWarning } from '@mui/icons-material';

const Navigation = () => {
  return (
    <div className="Navigation">
      <NavLink exact to="/" className="menuItem"><Home sx={{ fontSize: 30 }}/></NavLink>
      <NavLink exact to="/about" className="menuItem"><EscalatorWarning sx={{ fontSize: 30 }}/></NavLink>
      <NavLink exact to="/contact" className="menuItem"><Mail sx={{ fontSize: 30 }}/></NavLink>
    </div>
  );
};
export default Navigation;
