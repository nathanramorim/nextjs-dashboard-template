import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { Fragment } from 'react';
import type { Page } from '../types/page';
import theme from '../themes/theme';

type Props = AppProps & {
	Component: Page;
};
const MyApp = ({ Component, pageProps }: Props) => {
	// adjust accordingly if you disabled a layout rendering option
	const getLayout = Component.getLayout ?? ((page) => page);
	const Layout = Component.layout ?? Fragment;
	return (
		<ThemeProvider theme={theme}>
			<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
		</ThemeProvider>
	);

	// or swap the layout rendering priority
	// return getLayout(<Layout><Component {...pageProps} /></Layout>)
};

export default MyApp;
