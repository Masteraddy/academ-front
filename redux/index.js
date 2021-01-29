// redux/index.js
import { createStore, persist } from 'easy-peasy';
import models from './models';

export const makeStore = (initialState) =>
  createStore(
    // persist(models)
    models,
    { name: 'Academiks' },
  );

export default makeStore()