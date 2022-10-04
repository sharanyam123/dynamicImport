
import Head from 'next/head';
import * as React from 'react';
import Link from 'next/link';
import SideMenu from '../SideMenu/SideMenu';


export default function Layout({ children }) {

 
  return (
   <>
    <Head>
      <title>Dummy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main style={{display:"flex"}}>
      <SideMenu/>
      {children}
    </main>
   </>
  )
}


