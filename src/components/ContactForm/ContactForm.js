//import { useState } from 'react';
//import PropTypes from 'prop-types';
//import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, getContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export function ContactForm() {
  //const [name, setName] = useState('');
  //const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const normalizedName = name.toLowerCase();
    const checkDoubling = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(normalizedName);
    if (checkDoubling) {
      alert(`${name} is already in your contacts`);
      return;
    }

    const newId = nanoid();
    const newContact = {
      id: newId,
      name,
      number,
    };
    dispatch(setItems(newContact));
    form.reset();
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
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.inputWrap}>
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <input
          className={css.input}
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

/* ContactForm.propTypes = {
  props: PropTypes.func,
};

export default ContactForm; */
/* class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    hendleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({[name] : value, id: nanoid(),});
    }

    hendleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name:'', number:'' });
    };


    render() {
        return (
            <form onSubmit={this.hendleSubmit} className={css.formWrap}>
                <div className={css.inputWrap}>
                    <label className={css.label}>Name</label>
                    <input
                        className={css.input}
                        value={this.state.name}
                        onChange={this.hendleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />  
                </div>
                <div className={css.inputWrap}>
                    <label className={css.label}>Number</label>
                    <input
                        className={css.input}
                        value={this.state.number}
                        onChange={this.hendleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>   
                <button className={css.button} type='submit'>
                    Add contact
                </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm; */
