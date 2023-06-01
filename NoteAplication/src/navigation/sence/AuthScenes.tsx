import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../features/Screens/HomeScreen';
import BottomTab from '../../features/Screens/BottomTab';
import navigationConfigs from '../config/options';
import {RootStackParamList} from './RootScenes';
import { BOTTOMTAB_ROUTE, HOME_ROUTE, SETTING_ROUTE } from '../config/routes';
import SettingScreen from '../../features/Screens/SettingScreen';
import TabScenes from './TabScenes';




const MainStack = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={BOTTOMTAB_ROUTE.BOTTOMTAB}
        component={TabScenes}
      />
    </MainStack.Navigator>
  );
};

export default AuthStack;
