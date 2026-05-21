import Link from "next/link";
import MarketingShell from "../components/MarketingShell";
import styles from "../page.module.css";
import { featuredProjects } from "../site-content";
import { projectSubmissionFields } from "../forms";

export const metadata = {
  title: "Projects | hub.iotkit.in",
  description: "Featured IoT projects and a future-ready layout for API or database powered listings.",
};

export default function ProjectsPage() {
  return (
    <MarketingShell>
      <section className={styles.pageHeader}>
        <span className={styles.pageLabel}>Projects</span>
        <h1 className={styles.pageTitle}>A place for live IoT builds, dashboards, and maker demos.</h1>
        <p className={styles.pageIntro}>
          This page is ready to become dynamic later from a database or API. For now it showcases the structure,
          cards, and calls to action that make public project browsing feel polished.
        </p>
      </section>

      <section className={styles.cardGrid}>
        {featuredProjects.map((project) => (
          <article className={styles.projectCard} key={project.slug}>
            <div className={styles.projectImage} aria-hidden="true">
              <span>{project.name.slice(0, 2).toUpperCase()}</span>
            </div>
            <div className={styles.cardBody}>
              <p>{project.stack}</p>
              <h3>{project.name}</h3>
              <span>{project.description}</span>
            </div>
            <div className={styles.cardLinks}>
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </article>
        ))}
      </section>

      <div className={styles.buttonRow}>
        <Link className={styles.primaryButton} href="/contact">
          Submit Your Project
        </Link>
        <Link className={styles.secondaryButton} href="/docs">
          Read the Guidelines
        </Link>
      </div>

      <section className={styles.contactShell}>
        <div className={styles.contactHeader}>
          <span className={styles.pageLabel}>Submit Project</span>
          <h2 className={styles.pageTitle}>Share a GitHub repo and live URL for review.</h2>
          <p className={styles.pageIntro}>
            Use this form when you want to add a new project to the showcase or request a public subdomain for it.
          </p>
        </div>

        <div className={styles.contactCard}>
          <h2>Project submission form</h2>
          <form className={styles.contactForm}>
            {projectSubmissionFields.map((field) =>
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
              Submit Project
            </button>
          </form>
        </div>
      </section>
    </MarketingShell>
  );
}
