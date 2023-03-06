import { Component } from 'react';
import { ContactsListItem } from './contactListItem/contactListItem';
import PropTypes from 'prop-types';
import styles from './contactsList.module.css';

export class ContactsList extends Component {
  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    handleRemove: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, handleRemove } = this.props;
    return (
      <ul className={styles.section}>
        {contacts.length
          ? contacts.map(({ id, name, number }) => (
              <ContactsListItem
                key={id}
                id={id}
                name={name}
                number={number}
                handleRemove={handleRemove}
              />
            ))
          : 'No contacts'}
      </ul>
    );
  }
}