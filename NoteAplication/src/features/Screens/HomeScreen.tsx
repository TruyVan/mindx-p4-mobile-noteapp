import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import {navigate} from '../../navigation/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledInput from '../../components/common/StyledInput';


const HomeScreen = ({route, props}: any) => {

  return (
    <View>
      <StyledInput label='' placeholderText='Search Here'/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
