import {Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import fonts from '../../assets/styles/fonts';

const TextComponent = props => {
  return (
    <Text style={[styles.text, {fontSize: props.size}, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.RubikRegular,
    color: '#000',
  },
});

TextComponent.defaultProps = {
  size: 14,
};

export default memo(TextComponent);
