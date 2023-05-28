import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import {navigate} from '../../navigation/NavigationService';


const HomeScreen = ({route, props}: any) => {
  const goToStart = () => {
    navigate(TAB_NAVIGATION_ROOT.BOTTOMTAB_ROUTE.BOTTOMTAB, {
    });
  };
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
