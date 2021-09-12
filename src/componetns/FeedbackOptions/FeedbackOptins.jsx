import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btnList}>
      {options.map((name, index) => (
        <li className={css.btnItem} key={index}>
          <button
            className={css.button}
            type="button"
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
