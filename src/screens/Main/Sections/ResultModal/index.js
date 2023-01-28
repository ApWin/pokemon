import {View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {Text, Button} from 'components';

const {height} = Dimensions.get('screen');

const imgUrl = status => {
  if (status === 0) {
    return require('assets/images/game_over.png');
  }
  if (status === 1) {
    return require('assets/images/win.png');
  }
  return require('assets/images/retry.png');
};

const renderTitle = status => {
  if (status === 0) {
    return 'You lost😕';
  }
  if (status === 1) {
    return 'Congratulations! You are winner.';
  }
  return 'No winner. Retry game!';
};

const ResultModal = ({getRef, onPress}) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    let ref = {
      open: (status, name) => {
        setStatus(status);
        setName(name);
        setOpen(true);
      },
      close: () => setOpen(false),
    };
    getRef(ref);
  }, []);

  return (
    <Modal
      statusBarTranslucent
      animationIn="bounceIn"
      deviceHeight={height}
      animationOut="bounceOut"
      isVisible={open}>
      <View style={styles.modalView}>
        <View>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={imgUrl(status)}
          />
          <Text size={22} style={styles.title}>
            {renderTitle(status)}
          </Text>
          <Text style={styles.description}>
            Do you want to continue with <Text style={styles.name}>{name}</Text>
            ?
          </Text>
        </View>
        <View style={styles.buttons}>
          {status === 0 && (
            <Button onPress={() => onPress(false)} style={styles.button}>
              <Text style={styles.btnText}>Change</Text>
            </Button>
          )}
          <Button onPress={() => onPress(true)} style={styles.button}>
            <Text style={styles.btnText}>Continue</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ResultModal;
