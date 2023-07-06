export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'contacts/filter':
      return action.payload;
    default:
      return state;
  }
};
