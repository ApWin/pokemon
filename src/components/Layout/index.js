import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Layout = props => (
  <View style={[styles.container, props.style]}>{props.children}</View>
);

export default Layout;
