const initialState = {
  lostDogList = [],
  foundDogList = []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case A: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}