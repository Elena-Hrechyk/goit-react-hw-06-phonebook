import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';

import { BoxFilter, LableFilter, InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterSubmit = evt => {
    const value = evt.target.value.toLowerCase().trim();
    dispatch(filterContacts(value));
  };

  return (
    <>
      <BoxFilter>
        <LableFilter>
          Filter contacts by Name
          <InputFilter
            type="text"
            name="filter"
            onChange={filterSubmit}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </LableFilter>
      </BoxFilter>
    </>
  );
};
