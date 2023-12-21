import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
 
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          )
        })}
      </ul>
    </section>
  );
}