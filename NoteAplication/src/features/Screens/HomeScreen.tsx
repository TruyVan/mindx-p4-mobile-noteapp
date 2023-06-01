import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react'
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import {navigate} from '../../navigation/NavigationService';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import StyledInput from '../../components/common/StyledInput';
import Images from '../../assests';
import CategoryScreen from './CategoryScreen';


const HomeScreen = ({route, props}: any) => {

  return (
    <View style={{width:'100%'}}>
      <View style={styles.searchbar}>
      <TouchableOpacity style={styles.avatar}>
        <Image style={{width : 30, height :30,marginRight : 15}}
        source = {Images.icons.logo.menu} />
        </TouchableOpacity>
       <TextInput placeholder='Search Here' style={styles.searchInput} />
        <TouchableOpacity style={styles.avatar}>
        <Image style={{width : 45, height :45,borderRadius : 50,marginRight : 15}}
        source = {Images.avatar.avatar} />
        </TouchableOpacity>
      </View>
      <View>
      <FlatList showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.toString() } horizontal data={[1]} renderItem={() => {
        return  <CategoryScreen />
      }}/>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  avatar : {
    width : 50,
    height : 50,
   justifyContent : 'center',

    
  },
  searchbar :{
    flexDirection: 'row',
    alignItems: 'center',
    width : '92%',
    height : 50,
    marginHorizontal : 15,
    marginVertical : 15,
    borderWidth : 1,
    borderRadius : 50,
    justifyContent : 'space-around',
    paddingHorizontal : 15
  },
  searchInput : {
    width : '80%',
    paddingHorizontal : 10
  }
});
