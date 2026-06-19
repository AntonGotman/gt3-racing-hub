import { createStore } from 'vuex'

export default createStore({
  state: {
    favorites: []
  },

  getters: {
    favoriteCount: (state) => state.favorites.length
  },

  mutations: {
    ADD_FAVORITE(state, car) {
      const exists = state.favorites.find(c => c.id === car.id)
      if (!exists) {
        state.favorites.push(car)
      }
    },

    REMOVE_FAVORITE(state, carId) {
      state.favorites = state.favorites.filter(c => c.id !== carId)
    }
  },

  actions: {
    addToFavorites({ commit }, car) {
      commit('ADD_FAVORITE', car)
    },

    removeFromFavorites({ commit }, carId) {
      commit('REMOVE_FAVORITE', carId)
    }
  }
})