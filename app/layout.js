import React from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';

const Layout = ({ children, title = 'Discussion Forum' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
