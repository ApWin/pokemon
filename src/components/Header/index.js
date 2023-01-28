import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import HeaderIcon from 'icons/ArrowLeft';
import NavigationService from 'navigators/NavigationService';
import Texts from '../Text';
import {SafeAreaView} from 'react-native-safe-area-context';

const NavigationHeader = props => {
  return (
    <SafeAreaView edges={['top']} style={[styles.container, props.style]}>
      <View style={styles.leftCon}>
        {props.showLeft ? (
          props.leftComponent ? (
            props.leftComponent
          ) : (
            <TouchableOpacity
              style={[styles.iconWrapper, props.leftStyle]}
              onPress={props.onLeftPressed}>
              <HeaderIcon />
            </TouchableOpacity>
          )
        ) : null}
        {props.showCenter ? (
          props.centerComponent ? (
            props.centerComponent
          ) : (
            <Texts
              numberOfLines={props.numberOfLines}
              style={[styles.title, props.titleStyle]}>
              {props.title}
            </Texts>
          )
        ) : null}
      </View>
      {props.showRight && props.rightComponent}
    </SafeAreaView>
  );
};
NavigationHeader.propTypes = {
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  title: PropTypes.string,
  showLeft: PropTypes.bool,
  showRight: PropTypes.bool,
  showCenter: PropTypes.bool,
  rightComponent: PropTypes.element,
  centerComponent: PropTypes.element,
  leftComponent: PropTypes.element,
};
NavigationHeader.defaultProps = {
  containerStyle: {},
  style: {},
  titleStyle: {},
  leftStyle: {},
  title: '',
  onLeftPressed: () => {
    NavigationService.goBack();
  },
  rightComponent: null,
  showLeft: true,
  showRight: false,
  showCenter: true,
  leftComponent: null,
  centerComponent: null,
  numberOfLines: 1,
};
export default memo(NavigationHeader);
