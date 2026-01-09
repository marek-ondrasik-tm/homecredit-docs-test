import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  path: string;
  imgPath: string
};

const IntroFeatures: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.intro.title',
      message: 'Documentation Usage',
      description: 'The title for the Documentation feature'
    }),
    path: '/docs/documentation/button-quarter',
    imgPath: require('@site/static/img/image_intro_hc.png').default,
  },
  {
    title: translate({
      id: 'homepage.features.intro.title',
      message: 'API Docs Intro',
      description: 'The title for the Intro feature'
    }),
    path: '/docs/api/Introduction/getting-started',
    imgPath: require('@site/static/img/image_intro_hc.png').default,
  },
  {
    title: translate({
      id: 'homepage.features.restApi.title',
      message: 'REST API Principles',
      description: 'The title for the REST API Principles feature'
    }),
    path: 'docs/api/Introduction/restapi-principles',
    imgPath: require('@site/static/img/image_intro_hc.png').default,
  },
];

const ApiReferenceFeatures: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.apiReference.title',
      message: 'API Reference Intro',
      description: 'The title for the API Reference feature'
    }),
    path: 'docs/api/Reference/hc-oneclick-api-installments',
    imgPath: require('@site/static/img/image_api_hc.png').default,
  },
  {
    title: translate({
      id: 'homepage.features.apiReference.title',
      message: 'PSD2 API Reference',
      description: 'The title for the PSD2 API Reference feature'
    }),
    path: 'docs/api-psd2/home-credit-psd-2-api',
    imgPath: require('@site/static/img/image_api_hc.png').default,
  },
];

function Feature({title, imgPath, path }: FeatureItem) {
  return (
    <Link to={path} className={clsx('col margin-horiz--md', styles['feature-item'])} style={{textDecoration: 'none'}}>
      <div className="text--center">
        <img className='feature-img' src={imgPath} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <Heading as="h2" className="text--center">
            <Translate id="homepage.section.introduction">Introduction</Translate>
          </Heading>
        <div className={clsx("row", styles['justify-center'])}>
            {IntroFeatures.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className={clsx('margin-top--md')}>
        <Heading as="h2" className="text--center">
          <Translate id="homepage.section.apiReference">API Documentation</Translate>
        </Heading>
        <div className={clsx("row", styles['justify-center'])}>
          {ApiReferenceFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        </div>    
      </div>
    </section>
  );
}
