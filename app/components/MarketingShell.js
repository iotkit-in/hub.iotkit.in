import Link from "next/link";
import styles from "../page.module.css";
import { footerSections, primaryNav } from "../site-content";

function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function MarketingShell({ children }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>I</span>
          <span>
            app.iotkit.in
            <small>Free subdomains for IoT projects</small>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {primaryNav.map((item) =>
            item.external ? (
              <ExternalLink key={item.label} className={styles.navLink} href={item.href}>
                {item.label}
              </ExternalLink>
            ) : (
              <Link key={item.label} className={styles.navLink} href={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className={styles.headerActions}>
          <Link className={styles.ghostButton} href="https://github.com/iotkit-in/app/cname.json" target="_blank" rel="noopener noreferrer">
            Apply for Subdomain
          </Link>
          <Link className={styles.solidButton} href="/docs">
            Documentation
          </Link>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div>
          <div className={styles.footerBrand}>app.iotkit.in</div>
          <p>Free subdomains for IoT dashboards, APIs, ESP32 apps, Raspberry Pi projects, and open source maker builds.</p>
        </div>

        <div className={styles.footerColumns}>
          <div>
            <h3>Products</h3>
            {footerSections.products.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
                <span>{item.description}</span>
              </a>
            ))}
          </div>
          <div>
            <h3>Resources</h3>
            {footerSections.resources.map((item) =>
              item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <div>
            <h3>Legal</h3>
            {footerSections.legal.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}