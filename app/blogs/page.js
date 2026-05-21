import Link from "next/link";
import MarketingShell from "../components/MarketingShell";
import styles from "../page.module.css";
import { latestBlogs } from "../site-content";
import { blogSubmissionFields } from "../forms";

export const metadata = {
  title: "Blogs | app.iotkit.in",
  description: "Latest IoT guides, tutorials, and practical maker-focused blog layouts.",
};

export default function BlogsPage() {
  return (
    <MarketingShell>
      <section className={styles.pageHeader}>
        <span className={styles.pageLabel}>Blogs</span>
        <h1 className={styles.pageTitle}>Latest guides for ESP32, MQTT, Raspberry Pi, and dashboards.</h1>
        <p className={styles.pageIntro}>
          This layout can later connect to a CMS or API. For now it gives the blog experience a strong visual
          structure with big cover cards and clean reading paths.
        </p>
      </section>

      <section className={styles.cardGrid}>
        {latestBlogs.map((post) => (
          <article className={styles.blogCard} key={post.slug}>
            <div className={styles.blogImage} aria-hidden="true">
              <span>Blog</span>
            </div>
            <div className={styles.blogBody}>
              <p>Blog Post</p>
              <h3>{post.title}</h3>
              <span>{post.description}</span>
            </div>
            <div className={styles.blogLinks}>
              <a href="#">Read More</a>
              <a href="#">Share</a>
            </div>
          </article>
        ))}
      </section>

      <div className={styles.buttonRow}>
        <Link className={styles.primaryButton} href="/contact">
          Pitch a Blog Idea
        </Link>
        <Link className={styles.secondaryButton} href="/projects">
          View Projects
        </Link>
      </div>

      <section className={styles.contactShell}>
        <div className={styles.contactHeader}>
          <span className={styles.pageLabel}>Submit Blog</span>
          <h2 className={styles.pageTitle}>Send a blog draft, outline, or topic idea.</h2>
          <p className={styles.pageIntro}>
            Use this form for tutorials, how-tos, launch posts, and practical IoT writeups that help builders ship.
          </p>
        </div>

        <div className={styles.contactCard}>
          <h2>Blog submission form</h2>
          <form className={styles.contactForm}>
            {blogSubmissionFields.map((field) =>
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
              Submit Blog
            </button>
          </form>
        </div>
      </section>
    </MarketingShell>
  );
}
