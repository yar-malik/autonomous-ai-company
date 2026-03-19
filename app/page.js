import CompanyChart from "@/components/CompanyChart";
import SubmitForm from "@/components/SubmitForm";
import { companies } from "@/data/companies";
import styles from "./page.module.css";

const featuredCompany = companies[0];
const latestSnapshot = [...companies]
  .map((company) => company.snapshotDate)
  .sort((left, right) => right.localeCompare(left))[0];

function formatSnapshotDate(value) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div>
              <div className={styles.eyebrow}>Autonomous company builders</div>
              <h1 className={styles.title}>Track the companies building companies.</h1>
            </div>

            <p className={styles.intro}>
              A clean public directory for platforms building autonomous AI companies.
              Each profile can hold company counts, revenue snapshots, and dated charts so
              the numbers stay legible as the category evolves.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#directory">
                Browse directory
              </a>
              <a className={styles.secondaryAction} href="#submit">
                Submit a company
              </a>
            </div>

            <div className={styles.heroMeta}>
              <div className={styles.metaCard}>
                <span>Listed now</span>
                <strong>{companies.length}</strong>
              </div>
              <div className={styles.metaCard}>
                <span>Latest snapshot</span>
                <strong>{formatSnapshotDate(latestSnapshot)}</strong>
              </div>
              <div className={styles.metaCard}>
                <span>Submission route</span>
                <strong>Private</strong>
              </div>
            </div>
          </div>

          <div className={styles.spotlight}>
            <article className={styles.spotlightCard}>
              <p className={styles.spotlightLabel}>Current featured company</p>
              <h2>{featuredCompany.name}</h2>
              <p>{featuredCompany.tagline}</p>

              <dl className={styles.spotlightMetrics}>
                <div>
                  <dt>Snapshot date</dt>
                  <dd>{formatSnapshotDate(featuredCompany.snapshotDate)}</dd>
                </div>
                <div>
                  <dt>ARR</dt>
                  <dd>{featuredCompany.metrics.arr}</dd>
                </div>
                <div>
                  <dt>Active companies</dt>
                  <dd>{featuredCompany.metrics.activeCompanies}</dd>
                </div>
              </dl>
            </article>
          </div>
        </section>

        <section className={styles.directory} id="directory">
          <div className={styles.sectionHeading}>
            <h2>Directory</h2>
            <p>
              These are the two companies currently in the directory. Their numbers are
              shown as dated public snapshots, not live telemetry, so new data can be
              layered in cleanly as you gather it.
            </p>
          </div>

          <div className={styles.companyGrid}>
            {companies.map((company) => (
              <article className={styles.companyCard} key={company.slug}>
                <div className={styles.companyHeader}>
                  <div>
                    <h3>{company.name}</h3>
                    <p className={styles.handle}>{company.handle}</p>
                  </div>
                  <span className={styles.status}>{company.status}</span>
                </div>

                <p>{company.summary}</p>

                <div className={styles.companyMetrics}>
                  {Object.entries(company.metrics).map(([label, value]) => (
                    <div key={label}>
                      <span>{label.replace(/([A-Z])/g, " $1").trim()}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={company.website} target="_blank" rel="noreferrer">
                    Visit website
                  </a>
                  {company.xUrl ? (
                    <a href={company.xUrl} target="_blank" rel="noreferrer">
                      View X profile
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.companyDetails}>
          {companies.map((company) => (
            <article className={styles.detailCard} key={company.slug}>
              <div className={styles.detailIntro}>
                <div>
                  <p className={styles.detailEyebrow}>Profile</p>
                  <h2>{company.name}</h2>
                </div>

                <div className={styles.snapshot}>
                  <span>Snapshot date</span>
                  <strong>{formatSnapshotDate(company.snapshotDate)}</strong>
                </div>
              </div>

              <p className={styles.detailSummary}>{company.tagline}</p>

              <ul className={styles.highlights}>
                {company.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <CompanyChart chart={company.chart} />

              <p className={styles.sourceNote}>{company.sourceNote}</p>
            </article>
          ))}
        </section>

        <section className={styles.submission} id="submit">
          <div className={styles.sectionHeading}>
            <h2>Submit a company</h2>
            <p>
              Add another autonomous company builder here. The form still sends privately
              through the server route, so your receiving email address stays out of the
              page source.
            </p>
          </div>

          <SubmitForm />
        </section>
      </div>
    </main>
  );
}
