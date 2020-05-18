const initialState = {
  packingList: {},
  currentUser: {},
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_PACKING_LIST':
      return {
        ...state,
        packingList: action.payload,
      }
    case 'SET_CURRENT_USER':
      console.log(action.payload);
      return {
        ...state,
        currentUser: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        currentUser: {},
      }
    default: return state;
  }
};