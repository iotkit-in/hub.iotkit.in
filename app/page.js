import Link from "next/link";
import MarketingShell from "./components/MarketingShell";
import styles from "./page.module.css";
import { badges, featuredProjects, howItWorks, latestBlogs, platformStats, whyWeStarted } from "./site-content";

function ProjectCard({ project }) {
  return (
    <article className={`${styles.projectCard} ${styles.fadeIn}`}>
      <div className={styles.projectImage} aria-hidden="true">
        <span>{project.name.slice(0, 2).toUpperCase()}</span>
      </div>
      <div className={styles.cardBody}>
        <p>Featured Project</p>
        <h3>{project.name}</h3>
        <span>{project.description}</span>
        <div className={styles.projectMeta}>
          <span>{project.stack}</span>
        </div>
      </div>
      <div className={styles.cardLinks}>
        <a href="#">Live Demo</a>
        <a href="/projects">Project Details</a>
      </div>
    </article>
  );
}

function BlogCard({ post }) {
  return (
    <article className={`${styles.blogCard} ${styles.fadeIn}`}>
      <div className={styles.blogImage} aria-hidden="true">
        <span>Blog</span>
      </div>
      <div className={styles.blogBody}>
        <p>Latest Blog</p>
        <h3>{post.title}</h3>
        <span>{post.description}</span>
      </div>
      <div className={styles.blogLinks}>
        <a href="#">Read More</a>
        <a href="/blogs">View All Blogs</a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <MarketingShell>
      <section className={`${styles.hero} ${styles.fadeIn}`}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>Open infrastructure for makers</div>
          <h1>Free Subdomains for IoT Projects</h1>
          <p>
            Deploy dashboards, APIs, hardware panels, and prototypes using hub.iotkit.in.
            A clean public home for student builds, ESP32 apps, Raspberry Pi projects, MQTT dashboards,
            and open source hardware demos.
          </p>

          <div className={styles.buttonRow}>
            <Link className={styles.primaryButton} href="/contact">
              Get Started
            </Link>
            <Link className={styles.secondaryButton} href="/projects">
              View Projects
            </Link>
            <Link className={styles.secondaryButton} href="/docs">
              Documentation
            </Link>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statsCard}>
              <span className={styles.statsLabel}>Free</span>
              <span className={styles.statsValue}>Subdomains</span>
              <span>for approved IoT projects</span>
            </div>
            <div className={styles.statsCard}>
              <span className={styles.statsLabel}>PR Based</span>
              <span className={styles.statsValue}>Workflow</span>
              <span>transparent and easy to review</span>
            </div>
            <div className={styles.statsCard}>
              <span className={styles.statsLabel}>Maker First</span>
              <span className={styles.statsValue}>Community</span>
              <span>students, clubs, startups, builders</span>
            </div>
          </div>
        </div>

        <aside className={`${styles.heroPanel} ${styles.floaty}`}>
          <div className={styles.panelTitle}>Example domain</div>
          <div className={styles.panelCardAccent}>
            <strong>weatherstation.hub.iotkit.in</strong>
            <p>Your dashboard can look and feel public from day one.</p>
          </div>

          <div className={styles.panelCard}>
            <h2>How it works</h2>
            <ul className={styles.bulletList}>
              <li>Fork the repository</li>
              <li>Add a record in cname.js</li>
              <li>Create Pull Request</li>
              <li>Approval Process</li>
              <li>Your subdomain goes live</li>
            </ul>
          </div>

          <div className={styles.panelCardAccent}>
            <span className={styles.panelTitle}>Why it matters</span>
            <p>Open source IoT builders get a real infrastructure layer without losing momentum.</p>
          </div>
        </aside>
      </section>

      <section className={styles.section} id="how-it-works">
        <div className={styles.sectionHeading}>
          <span>How It Works</span>
          <h2>Simple, reviewable, and built for open source contributions.</h2>
          <p>Claim a subdomain with a pull request flow that keeps the platform transparent and community driven.</p>
        </div>

        <div className={styles.stepsGrid}>
          {howItWorks.map((step, index) => (
            <article key={step.title} className={styles.stepCard}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>cname.js</div>
          <pre>{`{
  subdomain: "weatherstation",
  type: "CNAME",
  value: "my-project.vercel.app"
}`}</pre>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.sectionHeading}>
          <span>Featured Projects</span>
          <h2>Dashboard-style cards for the best maker builds.</h2>
          <p>Show the project image, tech stack, live demo, and a crisp summary of what the project does.</p>
        </div>

        <div className={styles.cardGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className={styles.buttonRow}>
          <Link className={styles.primaryButton} href="/projects">
            View All Projects
          </Link>
        </div>
      </section>

      <section className={styles.section} id="blogs">
        <div className={styles.sectionHeading}>
          <span>Latest Blogs</span>
          <h2>Practical guides for IoT dashboards, MQTT, and edge devices.</h2>
          <p>Write for builders who want to ship, not just read theory.</p>
        </div>

        <div className={styles.cardGrid}>
          {latestBlogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className={styles.buttonRow}>
          <Link className={styles.primaryButton} href="/blogs">
            View All Blogs
          </Link>
        </div>
      </section>

      <section className={styles.splitSection} id="why-we-started">
        <div className={styles.sectionHeadingLeft}>
          <span>Why We Started</span>
          <h2>Supporting open-source IoT builders with free infrastructure and public reach.</h2>
          <p>
            hub.iotkit.in exists for students, startups, robotics clubs, makerspaces, and teams
            that need a trustworthy home for public IoT projects without the overhead of managing everything alone.
          </p>
        </div>

        <div className={styles.featureStack}>
          {whyWeStarted.map((item) => (
            <article className={styles.featureCard} key={item}>
              <h3>Community mission</h3>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      {/*
        Community Stats section commented out per request
        <section className={styles.section} id="community-stats">
          <div className={styles.sectionHeading}>
            <span>Community Stats</span>
            <h2>Healthy activity from builders who actually ship.</h2>
          </div>

          <div className={styles.statsBlock}>
            {platformStats.map((stat) => (
              <article className={styles.statsCard} key={stat.label}>
                <span className={styles.statsLabel}>{stat.label}</span>
                <span className={styles.statsValueLarge}>{stat.value}</span>
              </article>
            ))}
          </div>
        </section>
      */}

      <section className={styles.section} id="badges">
        <div className={styles.sectionHeading}>
          <span>Community Badges</span>
          <h2>Recognition for people helping the ecosystem grow.</h2>
        </div>

        <div className={styles.badgeRow}>
          {badges.map((badge) => (
            <span className={styles.badge} key={badge}>
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Community section hidden for now */}
    </MarketingShell>
  );
}
