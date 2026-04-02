import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FEATURES = [
  {
    title: 'Blue Iris System',
    description: 'AI detection, recording, alerts, and surveillance architecture.',
    href: '/blue-iris/',
    img: '/img/og/blueiris-og.jpg',
  },
  {
    title: 'UniFi Network',
    description: 'Wi-Fi, switching, and infrastructure design for scalable deployments.',
    href: '/unifi/',
    img: '/img/og/unifi-og.jpg',
  },
  {
    title: 'Cloudflare Tunnel',
    description: 'Secure remote access with zero trust and edge protection.',
    href: '/networking/cloudflare-tunnel/',
    img: '/img/og/cloudflare-og.jpg',
  },
  {
    title: 'Acumatica Cloud ERP',
    description: 'ERP workflows, financial structure, and operational visibility.',
    href: '/acumatica/',
    img: '/img/og/acumatica-og.jpg',
  },
  {
    title: 'Velixo Reporting',
    description: 'Excel-based reporting, extraction, and financial insight.',
    href: '/velixo/',
    img: '/img/og/velixo-og.jpg',
  },
];

function FeatureCard({ title, description, href, img }) {
  return (
    <Link to={href} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={img} alt={title} className={styles.cardImage} />
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDesc}>{description}</div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.grid}>
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.href} {...feature} />
        ))}
      </div>
    </section>
  );
}
