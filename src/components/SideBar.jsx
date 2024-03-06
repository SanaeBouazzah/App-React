import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { Avatar, styled, useTheme } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import { useLocation, useNavigate } from "react-router-dom";
import { purple } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
// @ts-ignore
import cabello from './cabello.jpg';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const Array1 = [
  { "text": "Dashboard", "icon": <HomeOutlinedIcon />, "path": "/" },
  { "text": "Manage Team", "icon": <PeopleOutlineOutlinedIcon />, "path": "/team" },
  { "text": "Contacts Information", "icon": <ContactsOutlinedIcon />, "path": "/contacts" },
  { "text": "Invoices Balance", "icon": <ReceiptOutlinedIcon />, "path": "/invoices" },
];
const Array2 = [
  { "text": "Profile Form", "icon": <Person4OutlinedIcon />, "path": "/form" },
  { "text": "Calendar", "icon": <CalendarMonthOutlinedIcon />, "path": "/calendar" },
  { "text": "FAQ Page", "icon": <LiveHelpOutlinedIcon />, "path": "/faq" },
];
const Array3 = [
  { "text": "Bar Chart", "icon": <StackedBarChartOutlinedIcon />, "path": "/bar" },
  { "text": "Pie Chart", "icon": <DonutSmallOutlinedIcon />, "path": "/pie" },
  { "text": "Line Chart", "icon": <ShowChartOutlinedIcon />, "path": "/line" },
  { "text": "Geography Chart", "icon": <MyLocationOutlinedIcon />, "path": "/geography" },
];

export default function SideBar({ open, handleDrawerClose }) {
  let location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Avatar sx={{ mx: 'auto', width: open ? 88 : 44, height: open ? 88 : 44, my: 1, border: '2px solid gray' }}
        alt="Remy Sharp"
        src={cabello} />
      <Typography variant='body1' align='center' sx={{ fontSize: open ? 20 : 0, transition: '.25s' }}>Liana Trovaris</Typography >
      <Typography variant='body2' align='center' sx={{ fontSize: open ? 13 : 0, transition: '.25s', color: theme.palette.secondary.dark }}>Manager</Typography >


      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? null : item.text} placement='left'>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)
                }
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5, bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? purple[400] : purple[100] : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? null : item.text} placement='left'>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)
                }
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5, bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? purple[400] : purple[100] : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? null : item.text} placement='left'>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)
                }
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5, bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? purple[400] : purple[100] : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
