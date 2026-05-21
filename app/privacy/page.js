import MarketingShell from "../components/MarketingShell";
import styles from "../page.module.css";

export const metadata = {
  title: "Privacy Policy | hub.iotkit.in",
  description: "Privacy policy for hub.iotkit.in and the open source IoT subdomain platform.",
};

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <section className={styles.pageHeader}>
        <span className={styles.pageLabel}>Legal</span>
        <h1 className={styles.pageTitle}>Privacy Policy</h1>
        <p className={styles.pageIntro}>
          We only collect the information needed to review submissions, keep the service secure, and support the
          open source community.
        </p>
      </section>

      <section className={styles.contentGrid}>
        <article className={styles.policyCard}>
          <h3>Data collection</h3>
          <p>
            We may collect contact details, repository links, and project metadata submitted through the contact
            form or pull request flow.
          </p>
        </article>
        <article className={styles.policyCard}>
          <h3>Usage</h3>
          <p>
            Submitted information is used for review, abuse prevention, support, and communication about your
            project status.
          </p>
        </article>
        <article className={styles.policyCard}>
          <h3>Retention</h3>
          <p>
            Data is kept only as long as needed for platform operations, moderation, or legal compliance.
          </p>
        </article>
      </section>
    </MarketingShell>
  );
}
