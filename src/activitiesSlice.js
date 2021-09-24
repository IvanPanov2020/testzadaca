const initialState = [];

export default function activitesReducer(state = initialState, action) {
  switch (action.type) {
    case "activites/StartActivite": {
      const { activity } = action.payload;
      return { ...activity };
    }
    default:
      return state;
  }
}
