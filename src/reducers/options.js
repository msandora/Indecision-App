// Options reducer
const optionsReducerDefaultState = [];

export default (state = optionsReducerDefaultState, action) => {
    switch(action.type) {
      case 'ADD_OPTION': 
      //return state.concat(action.option);
        return [ // Array spread operator
          ...state, 
          action.option
        ];
      case 'REMOVE_OPTION': 
        // Return new array
        return state.filter(({ id }) => id !== action.id);

      case 'SET_OPTIONS': 
        return action.options;
      default:
        return state;
    }
};
