import PropTypes from 'prop-types';
import styles from './contactsListItem.module.css';

export const ContactsListItem = ({ id, name, number, handleRemove }) => {
  return (
    <li id={id} className={styles.item}>
      {name}: {number}
      <button className={styles.button} onClick={() => handleRemove(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};