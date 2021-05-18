export const state = {
  favouriteQuotes: getSavedState('favouriteQuotes'),
}

export const mutations = {
  ADD_FAVOURITE_QUOTE(state, quote) {
    state.favouriteQuotes.push(quote)
    saveState('favouriteQuotes', state.favouriteQuotes)
  },
  DELETE_FAVOURITE_QUOTE(state, quote) {
    state.favouriteQuotes.filter(
      (favouriteQuote) => favouriteQuote.id !== quote.id
    )
    saveState('favouriteQuotes', state.favouriteQuotes)
  },
}

export const actions = {
  addFavouriteQuote({ commit }, quote = {}) {
    commit('ADD_FAVOURITE_QUOTE', quote)
  },
  deleteFavouriteQuote({ commit }, quote = {}) {
    commit('DELETE_FAVOURITE_QUOTE', quote)
  },
}

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}
