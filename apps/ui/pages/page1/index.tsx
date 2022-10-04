import Layout from 'apps/ui/components/Layout/Layout';
import dynamic from 'next/dynamic';
import * as React from 'react';
import styles from '../../styles/Home.module.css'

const Content = dynamic(() => import("../../components/Content1/Content"),{
  loading: () => <>Loading...</>
});

export default function Page1() {
  return (
    <div className={styles.container}>
       <Content />
    </div>
  )
}

Page1.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }