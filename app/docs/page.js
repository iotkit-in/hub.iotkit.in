import MarketingShell from "../components/MarketingShell";
import styles from "../page.module.css";
import { howItWorks, starterTemplates } from "../site-content";

export const metadata = {
  title: "Docs | app.iotkit.in",
  description: "Documentation layout for the app.iotkit.in subdomain workflow and starter templates.",
};

export default function DocsPage() {
  return (
    <MarketingShell>
      <section className={styles.pageHeader}>
        <span className={styles.pageLabel}>Docs</span>
        <h1 className={styles.pageTitle}>Everything a builder needs to submit and launch a subdomain.</h1>
        <p className={styles.pageIntro}>
          The documentation page is structured for future guides, API references, policy details, and template
          walkthroughs.
        </p>
      </section>

      <section className={styles.stackSection}>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>How the workflow looks</div>
          <pre>{howItWorks.map((step, index) => `${index + 1}. ${step.title} - ${step.text}`).join("\n")}</pre>
        </div>

        <div className={styles.highlightPanel}>
          <span className={styles.pageLabel}>Starter templates</span>
          <h2>Use templates to ship a dashboard faster.</h2>
          <div className={styles.templateList}>
            {starterTemplates.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div className={styles.contentCard} id="api">
          <h2>API Ready</h2>
          <p>
            The docs page can later host device auth, webhook relay, realtime storage, and sensor analytics API
            references without changing the layout.
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
