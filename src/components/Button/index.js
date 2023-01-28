import React, {memo} from 'react';
import {View, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import styles from './styles';

const Button = props => {
  const _renderInnerText = () => {
    if (props.isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          size="small"
          style={styles.spinner}
          color={props.activityIndicatorColor || 'white'}
        />
      );
    }
    if (
      typeof props.children === 'string' ||
      typeof props.children === 'number'
    ) {
      return (
        <Text style={[styles.textStyle, props.textStyle]}>
          {props.children}
        </Text>
      );
    }
    return props.children;
  };

  if (props.isDisabled === true || props.isLoading === true) {
    return (
      <View
        style={[
          styles.button,
          props.style,
          props.disabledStyle || styles.opacity,
        ]}>
        {_renderInnerText()}
      </View>
    );
  }

  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      {_renderInnerText()}
    </TouchableOpacity>
  );
};

export default memo(Button);
