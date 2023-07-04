import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Forma, Lable, Input, BtnAddContact } from './Form.styled';

const schema = yup.object().shape({
  username: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  username: '',
  number: '',
};

export const FormContact = ({ onSubmit }) => {

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Forma>
        <Lable>
          Name
          <Input
            type="text"
            name="username"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Adrian"
            autoFocus
            required
          />
        </Lable>
        <Lable>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="380671234567"
            required
          />
        </Lable>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </Forma>
    </Formik>
  );
};

FormContact.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
