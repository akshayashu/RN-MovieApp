import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, AsyncStorage } from 'react-native';
import MainScreen from './Screens/main_screen/MainScreen';
import { styles } from './Style';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import reducer from './store/reducer';
import { createStore } from 'redux';

const persistConfig = {
  key : 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default class App extends React.Component {
  
  render(){
    
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ScrollView style={styles.container}>
            <MainScreen />
          </ScrollView>
        </PersistGate>
      </Provider>
    );   
  }
}
