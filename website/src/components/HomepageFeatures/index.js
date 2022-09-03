import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Play',
    Svg: require('@site/static/img/thumbs_up_flat_default.svg').default,
    description: (
      <>
        With the book in hand, simply visit this site to view the shader samples immediately.
      </>
    ),
  },
  {
    title: 'Multi-device Support',
    Svg: require('@site/static/img/laptop_flat.svg').default,
    description: (
      <>
        With WebGL 2.0, all samples can be viewed in various environments such as PCs, smartphones, and tablets.
      </>
    ),
  },
  {
    title: 'Another Feature...',
    Svg: require('@site/static/img/flying_saucer_flat.svg').default,
    description: (
      <>
        Coming Soon.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
