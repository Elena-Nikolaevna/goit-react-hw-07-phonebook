//import React from 'react';
//import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
//import { deleteItems } from 'redux/contactsSlice';
import {
  deleteContacts,
  fetchContacts,
  getVisibleContacts,
} from '../../redux/phonebook/selectors';
import { useEffect } from 'react';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContactCard = id => {
    dispatch(deleteContacts(id));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, phone }) => (
        <li className={css.contactsItem} key={id}>
          <span className={css.contactText}>
            {name} : {phone}
          </span>
          <button
            type="button"
            onClick={() => onDeleteContactCard(id)}
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
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
/* ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
 */