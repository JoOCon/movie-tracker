export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [action.movie, ...state];
    case 'SET_USER_FAVORITES':
      return action.favorites;
    case 'REMOVE_FAVORITE':
      return state.filter(favoriteMovie => favoriteMovie.movie_id !== action.movie_id);
    case 'RESET_THE_STORE':
      return [];
    default:
      return state;
  }
};