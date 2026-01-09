import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={clsx('main main--primary', styles.mainBanner)}>
      <div className="container">
        <Heading as="h1" className="main__title">
          <Translate id="homepage.title" description="The homepage title">
            Home Credit Dev Documentation
          </Translate>
        </Heading>
        <p className="main__subtitle">
          <Translate id="homepage.tagline" description="The homepage tagline">
            Click on Docs to get started
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api-psd2/home-credit-psd-2-api">
            <Translate id="homepage.button" description="The button to proceed to docs">
              Proceed
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'homepage.metaTitle',
        message: 'Welcome to Home Credit Dev Documentation',
        description: 'The homepage meta title'
      })}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
