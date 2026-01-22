import type {ReactNode} from 'react';
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
    imgPath: '/img/feature-documentation.svg',
  },
  {
    title: translate({
      id: 'homepage.features.intro.title',
      message: 'Sample requests',
      description: 'The title for the Sample requests feature'
    }),
    path: '/docs/documentation/example-queries',
    imgPath: '/img/feature-api-examples.svg',
  },
  {
    title: translate({
      id: 'homepage.features.restApi.title',
      message: 'Environment Setup',
      description: 'The title for the Environment Setup feature'
    }),
    path: 'docs/documentation/dev-env',
    imgPath: '/img/feature-environment.svg',
  },
];

const ApiReferenceFeatures: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.apiReference.title',
      message: 'API Reference Intro',
      description: 'The title for the API Reference feature'
    }),
    path: 'docs/api/Reference/home-credit-partner-api-order-future',
    imgPath: require('@site/static/img/image_api_hc.png').default,
  },
  {
    title: translate({
      id: 'homepage.features.apiReference.title',
      message: 'Example API Call',
      description: 'The title for the example API call feature'
    }),
    path: 'docs/api/Reference/application-resources',
    imgPath: require('@site/static/img/image_integration.png').default,
  },
];

function Feature({title, imgPath, path }: FeatureItem) {
  const isPng = imgPath.includes('.png') || imgPath.includes('image_api_hc') || imgPath.includes('image_integration');
  return (
    <Link to={path} className={styles.featureItem} style={{textDecoration: 'none'}}>
      <div className={`${styles.featureImageWrapper} ${isPng ? styles.pngImageWrapper : ''}`}>
        <img className={styles.featureImage} src={imgPath} alt={title} role="img" />
        <div className={styles.featureOverlay}>
          <svg
            className={styles.arrowIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.section.introduction">Introduction</Translate>
          </Heading>
          <div className={styles.featuresGrid}>
            {IntroFeatures.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.section.apiReference">API Documentation</Translate>
          </Heading>
          <div className={styles.featuresGrid}>
            {ApiReferenceFeatures.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>    
      </div>
    </section>
  );
}
