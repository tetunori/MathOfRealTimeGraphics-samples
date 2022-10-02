import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate >Samples for "Math of Real-time Graphics"📚</Translate></h1>
        <p className="hero__subtitle"><Translate >UNOFFICIAL sample viewer for the book "Mathmatics of Real-Time Graphics"📚</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/top">
            <Translate >👀 See Samples!</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="UNOFFICIAL samples for the book 'Math of Real-time Graphics' | 'リアルタイムグラフィックスの数学' written by Tatsuki HAYAMA and published by Gijutsu-Hyohron Co., Ltd.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
