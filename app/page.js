import CompanyChart from "@/components/CompanyChart";
import SubmitForm from "@/components/SubmitForm";
import { companies } from "@/data/companies";
import styles from "./page.module.css";

function formatSnapshotDate(value) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.canvas}>
        <aside className={styles.sidebar}>
          <div className={`${styles.sidebarCard} ${styles.blueCard}`}>
            <span>Directory</span>
            <strong>Autonomous AI companies</strong>
            <p>Public leaderboard of builders, operators, and AI-native company systems.</p>
          </div>
          <div className={`${styles.sidebarCard} ${styles.mintCard}`}>
            <span>Tracked</span>
            <strong>{companies.length} companies</strong>
            <p>Snapshot-based metrics with room for MRR, company count, and milestone growth.</p>
          </div>
          <div className={`${styles.sidebarCard} ${styles.pinkCard}`}>
            <span>Submit</span>
            <strong>Add your company</strong>
            <p>Use the form below to send a private submission for review.</p>
          </div>
        </aside>

        <div className={styles.main}>
          <section className={styles.board}>
            <div className={styles.boardHeader}>
              <div>
                <p className={styles.eyebrow}>Leaderboard</p>
                <h1>Autonomous company directory</h1>
              </div>

              <div className={styles.filters}>
                <div className={styles.filterPill}>Primary metric</div>
                <div className={styles.filterPill}>All snapshots</div>
              </div>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Founder</th>
                    <th>Primary Metric</th>
                    <th>Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.slug}>
                      <td className={styles.rankCol}>
                        <span className={styles.rank}>{company.rank}</span>
                      </td>

                      <td>
                        <div className={styles.companyCell}>
                          <div
                            className={styles.companyAvatar}
                            style={{ background: company.companyColor }}
                          >
                            {company.companyInitials}
                          </div>

                          <div className={styles.companyMeta}>
                            <div className={styles.companyTitleRow}>
                              <a href={company.website} target="_blank" rel="noreferrer">
                                {company.name}
                              </a>
                              <span className={styles.status}>{company.status}</span>
                            </div>
                            <p>{company.tagline}</p>
                            <span>
                              {company.handle} · Snapshot {formatSnapshotDate(company.snapshotDate)}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className={styles.founderCell}>
                          <div className={styles.founderAvatar}>{company.founderInitials}</div>
                          <span>{company.founder}</span>
                        </div>
                      </td>

                      <td className={styles.metricCol}>
                        <strong>{company.primaryMetricValue}</strong>
                        <span>{company.primaryMetricLabel}</span>
                      </td>

                      <td className={styles.growthCol}>
                        <span
                          className={
                            company.growthDirection === "up"
                              ? styles.growthUp
                              : company.growthDirection === "down"
                                ? styles.growthDown
                                : styles.growthFlat
                          }
                        >
                          {company.growthDirection === "up"
                            ? "↑ "
                            : company.growthDirection === "down"
                              ? "↓ "
                              : ""}
                          {company.growthValue}
                        </span>
                        <small>{company.growthLabel}</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.snapshots}>
            {companies.map((company) => (
              <article className={styles.snapshotCard} key={company.slug}>
                <div className={styles.snapshotHeader}>
                  <div>
                    <p className={styles.snapshotLabel}>Snapshot</p>
                    <h2>{company.name}</h2>
                  </div>
                  <div className={styles.snapshotDate}>{formatSnapshotDate(company.snapshotDate)}</div>
                </div>

                <p className={styles.snapshotSummary}>{company.summary}</p>

                <ul className={styles.highlightList}>
                  {company.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <CompanyChart chart={company.chart} />

                <div className={styles.snapshotFooter}>
                  <span>{company.sourceNote}</span>
                  <div className={styles.snapshotLinks}>
                    <a href={company.website} target="_blank" rel="noreferrer">
                      Website
                    </a>
                    {company.xUrl ? (
                      <a href={company.xUrl} target="_blank" rel="noreferrer">
                        X
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className={styles.submission} id="submit">
            <div className={styles.submissionHeader}>
              <div>
                <p className={styles.eyebrow}>Submit</p>
                <h2>Add a company</h2>
              </div>
              <p>Submit another autonomous company builder. Delivery still happens privately through the server.</p>
            </div>
            <SubmitForm />
          </section>
        </div>
      </div>
    </main>
  );
}
