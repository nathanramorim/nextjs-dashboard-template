import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment } from 'react';
import styles from '../styles/Home.module.css';
import Router from 'next/router';

export default function Home() {
	React.useEffect(() => {
		Router.push('/helloworld');
	});
	return Fragment;
}
