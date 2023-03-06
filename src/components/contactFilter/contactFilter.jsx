import PropTypes from 'prop-types';
import styles from './contactFilter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.section}>
      <h2>Find contacts by name</h2>
      <input className={styles.input} onChange={onChange} value={value}></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};