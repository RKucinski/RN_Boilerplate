// If your app needs it, use combineReducer : https://redux.js.org/api/combinereducers
// Too big reducers, with too many logic tend to be less maintainable


const initialState = { favoritesFilm: [] }

function mainReducer(state = initialState, action) {
  let nextState

  switch (action.type) {

    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value]
        }
      }
      return nextState || state

  default:
    return state
  }
}
export default mainReducer