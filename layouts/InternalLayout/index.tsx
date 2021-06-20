import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import React from 'react';
import Sidebar from '../../components/Sidebar';
import internalStyles from './styles';

interface LayoutProps {
	children: React.ReactNode;
}
const drawerWidth = 240;
const InternalLayout = (layout: LayoutProps) => {
	const classes = internalStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						{process.env.appName}
					</Typography>
				</Toolbar>
			</AppBar>
			<Sidebar open={open} handleClose={handleDrawerClose} />
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				{layout.children}
			</main>
		</div>
	);
};

export default InternalLayout;
