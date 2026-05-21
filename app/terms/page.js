import MarketingShell from "../components/MarketingShell";
import styles from "../page.module.css";

export const metadata = {
  title: "Terms & Conditions | hub.iotkit.in",
  description: "Terms and conditions for using hub.iotkit.in and its free subdomain workflow.",
};

export default function TermsPage() {
  return (
    <MarketingShell>
      <section className={styles.pageHeader}>
        <span className={styles.pageLabel}>Legal</span>
        <h1 className={styles.pageTitle}>Terms & Conditions</h1>
        <p className={styles.pageIntro}>
          The platform is intended for IoT-related projects, safe public demos, and open source maker work.
        </p>
      </section>

      <section className={styles.contentGrid}>
        <article className={styles.policyCard}>
          <h3>Acceptable use</h3>
          <p>
            No phishing, spam, illegal hosting, malicious content, or unrelated abuse. Projects should stay aligned
            with the IoT maker mission.
          </p>
        </article>
        <article className={styles.policyCard}>
          <h3>Review process</h3>
          <p>
            All subdomains are subject to review. We may request changes or deny requests that do not meet the
            platform standards.
          </p>
        </article>
        <article className={styles.policyCard}>
          <h3>Responsibility</h3>
          <p>
            You are responsible for the content and behavior of your project after launch and for keeping it secure.
          </p>
        </article>
      </section>
    </MarketingShell>
  );
}
