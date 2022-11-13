import { useState } from 'react';
import { addContacts, getContacts } from '../../redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import PropTypes from 'prop-types';
//import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

//import { setItems, getContacts } from 'redux/contactsSlice';
//import { nanoid } from 'nanoid';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  //const nameId = nanoid();
  //const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const repeatName = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (!repeatName) {
      Notify.success(`${name} is added in contacts`);
      dispatch(addContacts({ name, number }));
      setNumber('');
      setName('');
      return;
    }
    Notify.warning(`${name} is already in contacts`);
  };

  /*  const handleContact = userData => {
    let inputName = userData.name;
    const isIncludesName = contacts.find(
      contact => contact?.name?.toLowerCase() === inputName.toLowerCase()
    );

    if (isIncludesName) {
      return alert(`${inputName} is already is contacts`);
    }

    const contact = { ...userData, id: nanoid() };
    dispatch(setItems(contact));
  };

  const changeInputName = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
 */
  /*  const changeInputName = event => {
    setName(event.currentTarget.value);
  }; */

  /*  const changeInputNumber = event => {
    setNumber(event.currentTarget.value);
  }; */

  /*   const hendleSubmit = event => {
    event.preventDefault();
    handleContact({ name, number });
    //const data = { name, number };
    //onSubmit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
 */
  return (
    <form onSubmit={handleSubmit} className={css.formWrap}>
      <div className={css.inputWrap}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          //id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className={css.inputWrap}>
        <label className={css.label}>Number</label>
        <input
          className={css.input}
          //id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
