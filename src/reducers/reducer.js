const initialState = {
  packingList: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_PACKING_LIST':
      return {
        ...state,
        packingList: action.payload,
      }
    default: return state;
  }
};