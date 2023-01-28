import {Toast} from 'components';
import {get} from 'lodash';
import {getPokemons} from 'store/slices/main';
import api from '../index';

export const getPokemonsAction = () => async dispatch => {
  try {
    let {data} = await api.get('/pokemon?limit=500');
    dispatch(getPokemons(get(data, 'results', [])));
  } catch (err) {
    let error = err.toJSON();
    Toast.show(get(error, 'message', 'Something went wrong'));
  }
};
