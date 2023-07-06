import { nanoid } from 'nanoid';

export const addContact = contact => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(5),
      username: contact.username,
      number: contact.number,
    },
  };
};

export const deleteContact = contactId => {
  return { type: 'contacts/deleteContact', payload: contactId };
};

export const filterContacts = text => { 
  return {type: 'contacts/filter', payload: text}
}
