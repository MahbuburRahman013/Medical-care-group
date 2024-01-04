import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UpNavbar from './UpNavbar';
import Login from '../pages/Login/Login';

const drawerWidth = 240;
const navItems = ['Home', 'About us', 'Service', 'Doctor', 'News', 'Contact'];

function Navbar() {

	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};



	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Button sx={{ borderRadius: '25px', backgroundColor: '#BFD2F8', color: 'black' }} variant="contained">Contained</Button>
		</Box>
	);



	return (
		<div className="sticky top-0 bg-white">
			<UpNavbar></UpNavbar>
			<Box sx={{ display: 'flex'}}>
				<CssBaseline />
				<AppBar sx={{ backgroundColor: '#1F2B6C' , marginTop:'60px'}} component="nav">
					<Toolbar className='container mx-auto'>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
							{navItems.map((item) => (
								<Button key={item} sx={{ color: '#fff' , marginX:1}}>
									{item}
								</Button>
							))}
						</Box>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<div className="mr-5">
							<SearchIcon></SearchIcon>
						</div>

						<div className="hidden md:block">
							<Button sx={{ borderRadius: '25px', backgroundColor: '#BFD2F8', color: 'black' }} variant="contained">Contained</Button>
						</div>

						<div className='ml-10'>
							<Login></Login>
						</div>

					</Toolbar>
				</AppBar>
				<nav>
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
						}}
					>
						{drawer}
					</Drawer>
				</nav>
			</Box>
		</div>
	);
}



export default Navbar;
