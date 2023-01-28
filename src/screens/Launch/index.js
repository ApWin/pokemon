import {Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {Layout} from 'components';
import NavigationService from 'navigators/NavigationService';
import {useDispatch} from 'react-redux';
import {getPokemonsAction} from 'api/requests';

const Launch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsAction());
    setTimeout(() => NavigationService.reset('main', 0), 1000);
  }, []);

  return (
    <Layout style={styles.container}>
      <Image
        source={require('assets/images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </Layout>
  );
};

export default Launch;
