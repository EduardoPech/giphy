import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    search: {
      query: "",
      results: [],
    },
    stars: [],
    history: [],
  },
  getters: {
    getAllStars: (state) => {
      return state.stars;
    },
    getStarById: (state) => (id) => {
      return state.stars.some((star) => star.id === id);
    },
    getSearch: (state) => {
      return state.search;
    },
    getAllHistory: (state) => {
      return state.history;
    },
  },
  mutations: {
    UPDATE_SEARCH(state, payload) {
      state.search = payload;
    },
    UPDATE_STARS(state, payload) {
      state.stars = payload;
    },
    UPDATE_HISTORY(state, payload) {
      state.history = payload;
    },
    INITIALISE_STORE(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
  },
  actions: {
    updateSearch({ commit, dispatch }, payload) {
      commit("UPDATE_SEARCH", payload);
      dispatch("addHistory", payload.query);
    },
    addStar({ commit, state }, payload) {
      const stars = state.stars;
      stars.push(payload);
      commit("UPDATE_STARS", stars);
    },
    removeStar({ commit, state }, payload) {
      const stars = state.stars;
      const newStars = stars.filter((item) => item.id !== payload);
      commit("UPDATE_STARS", newStars);
    },
    addHistory({ commit, state }, payload) {
      const history = state.history;
      history.push({
        id: Math.floor(Math.random() * Date.now()),
        query: payload,
      });
      commit("UPDATE_HISTORY", history);
    },
    removeHistory({ commit, state }, payload) {
      const history = state.history;
      const newHistory = history.filter((history) => history.id !== payload);
      commit("UPDATE_HISTORY", newHistory);
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
