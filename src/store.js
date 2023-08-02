// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    namesList: []
  },
  mutations: {
    addName(state, name) {
      state.namesList.push(name)
    },
  },
});

export default store;
