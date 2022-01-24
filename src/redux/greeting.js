const FETCH_GREETINGS = 'GET_GREETINGS';

export const fetchGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
});

export const getGreeting = () => async (dispatch) => {
  const greeting = await fetch('http://localhost:3000/messages');
  const result = await greeting.json();
  const data = result.Messages;
  data.map((g) => dispatch(fetchGreetings(g.greeting)));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
