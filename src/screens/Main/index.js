import {Image, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useMemo, useRef, useCallback, useState} from 'react';
import styles from './styles';
import {Layout, Header, Text, Button, Toast} from 'components';
import {useDispatch, useSelector} from 'react-redux';
import {get} from 'lodash';
import ResultModal from './Sections/ResultModal';
import StatisticsIcon from 'assets/icons/Statistics';
import {saveResult} from 'store/slices/main';

const Main = ({navigation}) => {
  const {pokemons} = useSelector(state => state.main);
  const [player, setPlayer] = useState(null);
  const [robot, setRobot] = useState(null);
  const [playerRate, setPlayerRate] = useState(100);
  const [robotRate, setRobotRate] = useState(100);
  const [rand1, setRand1] = useState(Math.ceil(Math.random() * 6));
  const [rand2, setRand2] = useState(Math.ceil(Math.random() * 6));

  const modalRef = useRef(null);

  const dispatch = useDispatch();

  const player_id = player ? String(player.url).split('/')[6] : 0;
  const robot_id = robot ? String(robot.url).split('/')[6] : 0;

  useEffect(() => {
    generatePlayers(false);
  }, [pokemons]);

  const saveHandler = (ply, rob) => {
    dispatch(
      saveResult({
        player: {
          ...player,
          result: ply,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player_id}.png`,
        },
        robot: {
          ...robot,
          result: rob,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${robot_id}.png`,
        },
      }),
    );
  };

  useEffect(() => {
    if (playerRate === 0 && robotRate > 0) {
      saveHandler(0, 1);
      modalRef.current.open(0, get(player, 'name', 'current Pokemon'));
    } else if (playerRate > 0 && robotRate === 0) {
      saveHandler(1, 0);
      modalRef.current.open(1, get(player, 'name', 'current Pokemon'));
    } else if (playerRate === 0 && robotRate === 0) {
      saveHandler(1, 1);
      modalRef.current.open(3, get(player, 'name', 'current Pokemon'));
    }
  }, [playerRate, robotRate]);

  const generatePlayers = useCallback(
    current => {
      const robot = pokemons[Math.floor(Math.random() * 500)];
      setRobot(robot);
      if (!current) {
        const player = pokemons[Math.floor(Math.random() * 500)];
        setPlayer(player);
      }
    },
    [pokemons],
  );

  const submitHandler = () => {
    setPlayerRate(pr => {
      if (rand1 === 6 && pr > 2 * rand1) {
        Toast.show(`${get(robot, 'name', '')} attack you 2x`);
        return pr - 2 * rand1;
      } else if (pr > rand1 && rand1 !== 6) {
        return pr - rand1;
      }
      return 0;
    });

    setRobotRate(pr => {
      if (rand2 === 6 && pr > 2 * rand2) {
        Toast.show(`You attack ${get(robot, 'name', '')} 2x`);
        return pr - 2 * rand2;
      } else if (pr > rand2 && rand2 !== 6) {
        return pr - rand2;
      }
      return 0;
    });

    setRand1(Math.ceil(Math.random() * 6));
    setRand2(Math.ceil(Math.random() * 6));
  };

  const startHandler = current => {
    setPlayerRate(100);
    setRobotRate(100);
    generatePlayers(current);
    modalRef.current.close();
  };

  const rightComponent = useMemo(
    () => (
      <TouchableOpacity onPress={() => navigation.navigate('result')}>
        <StatisticsIcon />
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <Layout>
      <Header
        showRight={true}
        showLeft={false}
        rightComponent={rightComponent}
        title="Pokemon Battle Simulator"
      />
      <View style={styles.container}>
        <View style={styles.player}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player_id}.png`,
              }}
            />
            <View style={styles.progressCon}>
              <View style={styles.nameCon}>
                <Text style={styles.name}>
                  {get(player, 'name', 'Player')} (You)
                </Text>
                <Text style={styles.rateText}>{playerRate}/100</Text>
              </View>
              <View style={styles.progress}>
                <View
                  style={[
                    styles.progressFill(playerRate),
                    {width: `${playerRate}%`},
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.center}>
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={styles.result}>{rand1}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.result}>{rand2}</Text>
            </View>
          </View>
          <Text size={16}>You hit for {rand2}</Text>
          <Text size={16}>
            You <Text style={styles.name}>{get(robot, 'name', 'Gamer')}</Text>{' '}
            hit for {rand1}
          </Text>
          <Button onPress={submitHandler} style={styles.button}>
            <Text style={styles.buttonText}>Attack!</Text>
          </Button>
        </View>
        <View style={styles.robot}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${robot_id}.png`,
              }}
            />
            <View style={styles.progressCon}>
              <View style={styles.nameCon}>
                <Text style={styles.name}>{get(robot, 'name', 'Gamer')}</Text>
                <Text style={styles.rateText}>{robotRate}/100</Text>
              </View>
              <View style={styles.progress}>
                <View
                  style={[
                    styles.progressFill(robotRate),
                    {width: `${robotRate}%`},
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <ResultModal
        onPress={startHandler}
        getRef={ref => (modalRef.current = ref)}
      />
    </Layout>
  );
};

export default Main;
