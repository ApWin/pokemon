import {Image, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {Layout, Header, FlashList, Text} from 'components';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import TrashIcon from 'assets/icons/Trash';
import {clearResult} from 'store/slices/main';

const Result = () => {
  const dispatch = useDispatch();
  const {results} = useSelector(state => state.main);

  const renderItem = ({item}) => {
    return (
      <View style={styles.result}>
        <View style={styles.horizontal}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: item.player.img,
              }}
            />
            <Text style={styles.name}>{item.player.name}</Text>
          </View>
          <Text style={styles.name}>{item.player.result}</Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.horizontal}>
          <Text style={styles.name}>{item.robot.result}</Text>
          <View style={styles.row}>
            <Text style={styles.name}>{item.robot.name}</Text>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: item.robot.img,
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  const rightComponent = useMemo(
    () => (
      <TouchableOpacity onPress={() => dispatch(clearResult())}>
        <TrashIcon />
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <Layout>
      <Header
        showRight={true}
        rightComponent={rightComponent}
        title="Results"
      />
      <View style={styles.header}>
        <Text style={styles.title}>You</Text>
        <Text style={styles.title}>Opponent</Text>
      </View>
      <FlashList
        data={results}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        emptyText="There are no game results yet"
        contentContainerStyle={styles.list}
      />
    </Layout>
  );
};

export default Result;
