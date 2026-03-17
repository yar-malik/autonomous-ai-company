import styles from "./company-chart.module.css";

function formatCompactNumber(value) {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }

  return String(value);
}

function LineChart({ chart }) {
  const width = 640;
  const height = 280;
  const padding = 22;
  const values = chart.items.map((item) => item.value);
  const maxValue = Math.max(...values, chart.threshold?.value || 0);
  const safeMaxValue = maxValue || 1;

  const points = chart.items.map((item, index) => {
    const x = padding + (index * (width - padding * 2)) / (chart.items.length - 1 || 1);
    const y = height - padding - (item.value / safeMaxValue) * (height - padding * 2);
    return { ...item, x, y };
  });

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;
  const thresholdY = chart.threshold
    ? height - padding - (chart.threshold.value / safeMaxValue) * (height - padding * 2)
    : null;

  return (
    <div className={styles.chartFrame}>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.lineSvg} role="img">
        <defs>
          <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(15,118,110,0.34)" />
            <stop offset="100%" stopColor="rgba(15,118,110,0.04)" />
          </linearGradient>
        </defs>

        {chart.threshold ? (
          <>
            <line
              x1={padding}
              y1={thresholdY}
              x2={width - padding}
              y2={thresholdY}
              className={styles.thresholdLine}
            />
            <text
              x={width - padding}
              y={thresholdY - 8}
              textAnchor="end"
              className={styles.thresholdLabel}
            >
              {chart.threshold.label}: {formatCompactNumber(chart.threshold.value)}
            </text>
          </>
        ) : null}

        <path d={areaPath} className={styles.areaPath} />
        <path d={linePath} className={styles.linePath} />

        {points.map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r="5" className={styles.point} />
            <text x={point.x} y={point.y - 12} textAnchor="middle" className={styles.pointValue}>
              {point.displayValue}
            </text>
            <text
              x={point.x}
              y={height - 4}
              textAnchor="middle"
              className={styles.axisLabel}
            >
              {point.label}
            </text>
          </g>
        ))}
      </svg>
      <p className={styles.note}>{chart.note}</p>
    </div>
  );
}

function BarChart({ chart }) {
  const maxValue = Math.max(...chart.items.map((item) => item.value)) || 1;

  return (
    <div className={styles.chartFrame}>
      <div className={styles.barChart}>
        {chart.items.map((item) => (
          <div className={styles.barRow} key={item.label}>
            <div className={styles.barMeta}>
              <span>{item.label}</span>
              <strong>{item.displayValue}</strong>
            </div>
            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                style={{ width: `${Math.max((item.value / maxValue) * 100, 6)}%` }}
              />
            </div>
            <span className={styles.barChange}>{item.change}</span>
          </div>
        ))}
      </div>
      <p className={styles.note}>{chart.note}</p>
    </div>
  );
}

export default function CompanyChart({ chart }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p>Chart</p>
          <h3>{chart.title}</h3>
        </div>
        <span>{chart.subtitle}</span>
      </div>

      {chart.type === "line" ? <LineChart chart={chart} /> : <BarChart chart={chart} />}
    </div>
  );
}
