export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return (state = [action.payload, ...state]);
    case 'update':
      return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload && todo);
    case 'set_todos':
      return [...action.payload];
    case 'clear_completed':
      return state.filter((todo) => !todo.done);
    default:
      return state;
  }
};
