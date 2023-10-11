import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../../../assets/education.png";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const pages = [
    {
        'path': '/dashboard',
        'value': 'Profile'
    },{
        'path': '/dashboard/selected-course',
        'value': 'Selected Course'
    },
    {
        'path': '/dashboard/result',
        'value': 'Result'
    },
];

function ConditionalNav() {
  const { user, logout } = React.useContext(AuthContext);
  console.log(user);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(err => console.log(err))
  }

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'rgba(103, 232, 249, 0.2)', boxShadow: 'none', padding: "10px 0" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex', alignItems: 'center' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="" className='w-16 mr-2' />
              TechAgency Education
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', marginTop: '15px' },
              }}
              style={{ color: 'black' }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Link to={`${page.path}`}>
                    <Typography textAlign="center" color="black" fontSize="20px" fontFamily="monospace">{page.value}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none', },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/">
              <img src={logo} alt="" className='w-16 mr-2' />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }} style={{ color: 'black' }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color: 'black', fontWeight: '600' }}
              >
                <Link to={`${page.path}`}>
                  {page.value}
                </Link>
              </Button>
            ))}
          </Box>

          {
            user ?
              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <img src={user.photoURL ? user.photoURL : 'No-Photo'} alt="" className='w-12 h-12 rounded-full' />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '70px'}}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <div className='flex flex-col mx-10 font-mono text-xl gap-1'>
                    <Link to="/" onClick={handleLogout}>
                        Logout 
                    </Link>
                  </div>
                </Menu>
              </Box> :
              <Link to="/login">
                <Typography
                  sx={{
                    mr: 2,
                    fontSize: '22px',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  Login
                </Typography>
              </Link>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ConditionalNav;