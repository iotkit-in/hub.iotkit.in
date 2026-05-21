import MarketingShell from "../components/MarketingShell";
import styles from "../page.module.css";
import { domainRequestFields } from "../forms";

export const metadata = {
  title: "Contact | app.iotkit.in",
  description: "Contact form for subdomain requests, support, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className={styles.contactShell}>
        <div className={styles.contactHeader}>
          <span className={styles.pageLabel}>Contact</span>
          <h1 className={styles.pageTitle}>Send a project request, partnership idea, or support message.</h1>
          <p className={styles.contactIntro}>
            Use this form for subdomain requests, sponsor inquiries, or questions about the review process.
          </p>
          <div className={styles.featureCard}>
            <h3>What to include</h3>
            <ul className={styles.bulletList}>
              <li>Project name and short description</li>
              <li>GitHub repo or live preview</li>
              <li>Domain target or hosting details</li>
              <li>Any organization or school context</li>
            </ul>
          </div>
        </div>

        <div className={styles.contactCard}>
          <h2>Domain request form</h2>
          <form className={styles.contactForm}>
            {domainRequestFields.map((field) =>
              field.type === "textarea" ? (
                <textarea
                  key={field.name}
                  className={styles.textarea}
                  name={field.name}
                  placeholder={field.placeholder}
                  aria-label={field.label}
                />
              ) : (
                <input
                  key={field.name}
                  className={styles.input}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  aria-label={field.label}
                />
              ),
            )}
            <button className={styles.primaryButton} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </MarketingShell>
  );
}
