import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, CssBaseline, Divider, Drawer, Hidden, IconButton, MenuList, MenuItem } from '@material-ui/core/'
import { List, ListItem, ListItemIcon, ListItemText, Typography, Grid, Avatar, InputBase } from '@material-ui/core/'

import { MenuIcon, SearchIcon, HomeIcon, LogoutIcon, ListIcon, ViewModuleIcon, EventIcon, SettingsIcon, BookmarksIcon} from './imports'

// images 
import avatar1 from "./assets/img5.jpg";

// components
import Profile from './navigation/Profile'
import UpdateInfo from './navigation/UpdateInfo'
import ManageCourses from './navigation/ManageCourses'
import Modules from './navigation/Modules'
import CourseList from './navigation/CourseList'
import Schedules from './navigation/Schedules'
import Logout from './navigation/Logout'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      fontFamily: 'Raleway'
    },
    raleway: {
      fontFamily: 'Raleway',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      background: '#340e4a'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    navigation: {
      fontFamily: 'Raleway',
      fontSize: '15px'
    },
    userAvatar: {
      marginTop: -30,
      marginBottom: 10,
      width: 120,
      height: 120,
      backgroundColor: '#340e4a',
      color: '#fff',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(12),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
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
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }))

  // responsive drawer 
  function ResponsiveDrawer(props) {
    const { container } = props
    const classes = useStyles()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = React.useState(false)
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
    }
  
    const drawer = (
      <div>
      <div className={classes.toolbar} />
      <Grid container justify="center" alignItems="center">
        <Avatar className={classes.userAvatar} alt="Bill Justin" src={avatar1}></Avatar>
          <Typography variant="body1" style={{fontWeight: 'bold', fontFamily: 'Raleway', marginBottom: 30,}}> John Arthur Smith
          </Typography>
      </Grid>
      <Divider />
      <List>
        <ListItem button component={Link} to="/Profile">
          <ListItemIcon ><HomeIcon /></ListItemIcon>
          <ListItemText primary="Profile" disableTypography className={classes.navigation}/>
        </ListItem>
        
        <ListItem button component={Link} to="/UpdateInfo">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Update Info" disableTypography className={classes.navigation}/>
        </ListItem>
        <ListItem button component={Link} to="/ManageCourses">
          <ListItemIcon><BookmarksIcon /></ListItemIcon>
          <ListItemText primary="Manage Courses" disableTypography className={classes.navigation}/>
        </ListItem>
        
      </List>
      <Divider />
      <List>  
        <ListItem button component={Link} to="/CourseList">
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary="Course List" disableTypography className={classes.navigation}/>
        </ListItem>
        <ListItem button component={Link} to="/Modules">
          <ListItemIcon><ViewModuleIcon /></ListItemIcon>
          <ListItemText primary="Modules" disableTypography className={classes.navigation}/>
        </ListItem>
        <ListItem button component={Link} to="/Schedules">
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Schedules" disableTypography className={classes.navigation}/>
        </ListItem>
        <ListItem button component={Link} to="/Logout">
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Logout" disableTypography className={classes.navigation}/>
        </ListItem>
      </List>
    </div>
    );
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.raleway}>
              Dashboard
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
              <Route path="/Profile" component={ Profile } />
              <Route path="/UpdateInfo" component={ UpdateInfo } />
              <Route path="/ManageCourses" component={ ManageCourses } />
              <Route path="/CourseList" component={ CourseList } />
              <Route path="/Modules" component={ Modules } />
              <Route path="/Schedules" component={ Schedules } />
              <Route path="/Logout" component={ Logout } />
              
        </main>
        </BrowserRouter>
      </div>
    );
  }
  
  ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  
  export default ResponsiveDrawer;