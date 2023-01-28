import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';

const ListEmpty = ({text, containerStyle, textStyle}) => (
  <View style={containerStyle}>
    <Image source={require('assets/images/empty.png')} />
    <Text style={textStyle}>{text}</Text>
  </View>
);

ListEmpty.propTypes = {
  text: PropTypes.string,
  containerStyle: PropTypes.object,
};

ListEmpty.defaultProps = {
  text: 'Empty',
  textStyle: {
    fontSize: 16,
    color: '#AAA',
  },
  containerStyle: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ListEmpty;
