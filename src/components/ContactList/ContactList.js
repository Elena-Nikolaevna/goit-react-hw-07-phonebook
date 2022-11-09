//import React from 'react';
//import PropTypes from 'prop-types';
//import css from './ContactList.module.css';
import {ContactItem} from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <>
      

      {filteredContacts.map(contact => {
        const { name, number, id } = contact;
        return <ContactItem name={name} number={number} id={id} key={id} />;
      })}
    </>
  );
};

/* (
	
	<> 
		<ul className={css.contactsList}>
			{children}
		</ul>
	</>
); */

/* ContactList.propTypes = {
  children: PropTypes.node.isRequired,
}; */


