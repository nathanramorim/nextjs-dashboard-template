import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
	interface ThemeOptions {
		themeName?: string;
	}
}

const palette = {
	primary: {
		main: '#F9BC0D',
	},
	secondary: {
		main: '#20172E',
		light: '#30172E',
	},
	text: {
		primary: '#20172E',
		secondary: '#F9BC0D',
	},
	white: '#FFFFFF',
	gray: '#C4C4C4',
};

const themeName = 'default';

export default createMuiTheme({ palette, themeName });
