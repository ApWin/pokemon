import React from 'react';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigators';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './src/navigators/NavigationService';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={NavigationService._navigator}>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
