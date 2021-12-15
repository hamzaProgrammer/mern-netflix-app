import React , {useState } from 'react';
import { makeStyles , Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link , useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    width:"150px",
    height : "30px"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#0b0b0b',
    '&:hover': {
      backgroundColor: '#0b0b0b',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navbarBtn : {
      backgroundColor: "#0b0b0b",
      color: '#fff',
      textTransform: 'capitalize',
      margin: '5px 5px',
      '&:hover': {
          backgroundColor: "#d63031"
      }
  },
  profilePic : {
      width: '40px',
      height: '45px',
      borderRadius: '50%'
  },
  changeNav:{
    backgroundColor: "#0b0b0b"
  },
  navColor :{
    background: 'transparent',
    boxShadow: 'none',
  },
  btnsOrig : {
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover':{
      background: 'red',
    }

  }
}));

export default function PrimarySearchAppBar() {
  const history = useHistory()
  const RegisteredUser = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const logOut = () => {
    localStorage.removeItem('profile');
    history.push('/')
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
            <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem onClick={logOut} >
        <IconButton aria-label="show 11 new notifications" color="inherit">
            <ExitToAppIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
            <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem onClick={logOut} >
        <IconButton aria-label="show 11 new notifications" color="inherit">
            <ExitToAppIcon  />
        <p>Logout</p>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const [ isScrolled , setisScrolled ] = useState(false)

  window.onscroll = () => {
    if(window.pageYOffset === 0){
        setisScrolled(false)
    }else{
      setisScrolled(true)
    }
  }
  return (
    <div className={classes.grow}  >
      <AppBar position="fixed" className={ isScrolled ? classes.changeNav : classes.navColor}>
        <Toolbar className={isScrolled ?  classes.changeNav : classes.navColor }>

          <img className={classes.title}   alt="Logo" src="../../images/logoNew.svg" />
          <div  className={ isScrolled ? classes.search : classes.navColor} >
            <Button className={ isScrolled ? classes.navbarBtn : classes.btnsOrig} component={Link} to="/" >Homepage</Button>
            <Button className={ isScrolled ? classes.navbarBtn : classes.btnsOrig} component={Link} to="/series" >Series</Button>
            <Button className={ isScrolled ? classes.navbarBtn : classes.btnsOrig} component={Link} to="/movies" >Movies</Button>
            <Button className={ isScrolled ? classes.navbarBtn : classes.btnsOrig}>New and Popular</Button>
            <Button className={ isScrolled ? classes.navbarBtn : classes.btnsOrig}>My List</Button>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <IconButton aria-label="show 4 new mails" color="inherit">
                <SearchIcon />
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="inherit">
                <NotificationsActiveIcon />
            </IconButton>

            <img src={RegisteredUser?.myResult?.profilePic || 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-male-avatar-simple-cartoon-design-png-image_5230556.jpg' }className={classes.profilePic} alt="Profile icon"  />

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ExpandMoreIcon />
            </IconButton>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
