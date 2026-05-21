import MarketingShell from "../components/MarketingShell";
import styles from "../page.module.css";
import { badges, platformStats, whyWeStarted } from "../site-content";

export const metadata = {
  title: "Community | hub.iotkit.in",
  description: "Community stats, mission, and recognition for open source IoT builders.",
};

export default function CommunityPage() {
  return (
    <MarketingShell>
      <section className={styles.pageHeader}>
        <span className={styles.pageLabel}>Community</span>
        <h1 className={styles.pageTitle}>A public layer for builders, students, clubs, and startups.</h1>
        <p className={styles.pageIntro}>
          This is where the platform can spotlight contribution stories, showcase badges, and surface the current
          growth of the ecosystem.
        </p>
      </section>

      <section className={styles.statsBlock}>
        {platformStats.map((stat) => (
          <article className={styles.statsCard} key={stat.label}>
            <span className={styles.statsLabel}>{stat.label}</span>
            <span className={styles.statsValueLarge}>{stat.value}</span>
          </article>
        ))}
      </section>

      <section className={styles.featureStack}>
        {whyWeStarted.map((item) => (
          <article className={styles.featureCard} key={item}>
            <h3>Mission</h3>
            <p>{item}</p>
          </article>
        ))}
      </section>

      <div className={styles.badgeRow}>
        {badges.map((badge) => (
          <span className={styles.badge} key={badge}>
            {badge}
          </span>
        ))}
      </div>
    </MarketingShell>
  );
}
