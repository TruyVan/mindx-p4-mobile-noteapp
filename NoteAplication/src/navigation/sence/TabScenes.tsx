import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// Screen
import React from 'react';
import Images from '../../assests';
import StyledTabBar from '../component/StyledTabBar';
import navigationConfigs, {tabScreenOptions} from '../config/options';
import {TAB_NAVIGATION_ROOT} from '../config/routes';
import HomeScreen from '../../features/Screens/HomeScreen';
import SettingScreen from '../../features/Screens/SettingScreen';
import AddNoteScreen from '../../features/Screens/AddNoteScreen';


const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const HomeStack = () => (
  <MainStack.Navigator screenOptions={navigationConfigs}>
    <MainStack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT}
      component={HomeScreen}
    />
  </MainStack.Navigator>
);

const SettingStack = () => (
  <MainStack.Navigator screenOptions={navigationConfigs}>
    <MainStack.Screen
      name={TAB_NAVIGATION_ROOT.SETTING_ROUTE.ROOT}
      component={SettingScreen}
    />
  </MainStack.Navigator>
);

const MainTabContainer = () => {
  const ArrayTabs = [
    {
      name: TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN,
      title: 'Menu',
      component: HomeStack,
      icon: Images.icons.logo.home,
    },
    {
      name: TAB_NAVIGATION_ROOT.ADDNOTE_ROUTE.ADDNOTE_SCREEN,
      title: 'Setting',
      component: AddNoteScreen,
      icon: Images.icons.logo.addnote,
    },
    {
      name: TAB_NAVIGATION_ROOT.SETTING_ROUTE.SETTING_SCREEN,
      title: 'Setting',
      component: SettingStack,
      icon: Images.icons.logo.setting,
    },
  ];
  return (
    <MainTab.Navigator
      screenOptions={tabScreenOptions}
      tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}>
      {ArrayTabs.map((item, index) => (
        <MainTab.Screen
          key={`${index}`}
          options={({navigation}) => {
            const {routes, index} = navigation.getState();
            const {state} = routes[index];
            let tabBarVisible = true;
            if (state) {
              const {routes, index} = state;
              const exploreActiveRoute = routes[index];
              if (exploreActiveRoute?.name !== routes[0]?.name)
                tabBarVisible = false;
            }
            return {
              title: item.title,
              icon: item.icon,
              tabBarVisible: tabBarVisible,
            };
          }}
          {...item}
        />
      ))}
    </MainTab.Navigator>
  );
};

export default MainTabContainer;
