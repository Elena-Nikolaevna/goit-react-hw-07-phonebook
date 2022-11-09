//import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteItems } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = contactId => dispatch(deleteItems(contactId));
  return (
    <li key={id} className={css.contactsItem}>
      <p className={css.contactText}>
        {name}: {number}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

/* (
	<>
			{contacts.map(({ id, name, number }) => (
				<li key={id} className={css.contactsItem}>
					<p className={css.contactText}>
						{name}: {number}
					</p>
					<button
						className={css.button}
                        type='button'
					    onClick={() => onDeleteContact(id)}>
						Delete
					</button>
				</li>
			))}
	</>
);
 */
ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  
};


