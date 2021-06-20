import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import sidebarStyle from './styles';

interface sidebarTypes {
	open: boolean;
	handleClose: VoidFunction;
}
const Sidebar = ({ open, handleClose }: sidebarTypes) => {
	const classes = sidebarStyle();
	const theme = useTheme();
	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={handleClose}>
					{theme.direction === 'ltr' ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</div>
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};
export default Sidebar;
