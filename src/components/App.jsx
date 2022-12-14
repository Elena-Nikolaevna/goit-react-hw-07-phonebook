import s from './App.module.css';
//import React, { Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import {ContactItem} from './ContactItem/ContactItem';
//import ContactItem from './ContactItem/ContactItem';
//import {useState,useEffect} from "react";
//import { nanoid } from 'nanoid';

export function App () {
  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactItem />         
      </div>
    </>
  );
}


