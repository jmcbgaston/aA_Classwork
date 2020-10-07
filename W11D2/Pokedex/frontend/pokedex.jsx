import React from 'react';
import ReactDOM from 'react-dom';
// import { fetchAllPokemon } from './util/api_util'
import { requestAllPokemon } from './actions/pokemon_actions'
import configureStore from './store/store'
import { selectAllPokemon } from './reducers/selectors'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, rootEl);
  // ReactDOM.render(<Pokedex store={store}/>, rootEl);
});

window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;