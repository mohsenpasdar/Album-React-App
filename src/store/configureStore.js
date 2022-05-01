import { createStore, combineReducers } from 'redux';

const albumsReducerDefaultState = [
  {id: 1, title: 'one', list: ["a", "b", "c", "d"]},
  {id: 2, title: 'two', list: ["e", "f", "g", "h"]},
  {id: 3, title: 'three', list: ["i", "j", "k", "l"]}
];

const store = () => (
  createStore((state={}) => {
    return {
      albums: albumsReducerDefaultState,
    }
  }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export { store as default }
