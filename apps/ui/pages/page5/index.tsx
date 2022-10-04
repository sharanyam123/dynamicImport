import Layout from 'apps/ui/components/Layout/Layout';
import dynamic from 'next/dynamic';
import * as React from 'react';
import styles from '../../styles/Home.module.css'

const Content = dynamic(() => import("../../components/Content2/Content"),{
  loading: () => <>Loading...</>
});

export default function Page5() {
  return (
    <div className={styles.container}>
       <Content />
    </div>
  )
}

Page5.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }