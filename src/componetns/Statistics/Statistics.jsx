import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={css.statList}>
      <li className={css.statItem}>
        <span className={css.text}>Good:</span>
        <span className={css.description}>{good}</span>
      </li>

      <li className={css.statItem}>
        <span className={css.text}>Neutral:</span>
        <span className={css.description}>{neutral}</span>
      </li>

      <li className={css.statItem}>
        <span className={css.text}>Bad:</span>
        <span className={css.description}>{bad}</span>
      </li>

      <li className={css.statItem}>
        <span className={css.text}>Total:</span>
        <span className={css.description}>{total}</span>
      </li>

      <li className={css.statItem}>
        <span className={css.text}>Positiv feedback:</span>
        <span className={css.description}>{positivePercentage} %</span>
      </li>
    </ul>
  );
}
