import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../features/Screens/HomeScreen';
import BottomTab from '../../features/Screens/BottomTab';
import navigationConfigs from '../config/options';
import {RootStackParamList} from './RootScenes';
import { HOME_ROUTE } from '../config/routes';




const MainStack = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <MainStack.Navigator screenOptions={navigationConfigs}>
    
      <MainStack.Screen
        name={HOME_ROUTE.HOME_SCREEN}
        component={HomeScreen}
      />
      
    </MainStack.Navigator>
  );
};

export default AuthStack;
