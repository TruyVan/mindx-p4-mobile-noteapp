import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';



const SocialLogin = () => {
  return (
   
    <View
      style={{
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        height: 50,
        width: 300,
        backgroundColor: 'white',
        gap : 10
        

    
      }}>
       <Image
        style={styles.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png',
        }}
      />
      <Text>Đăng nhập với facebook</Text>
    </View>
    
    
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  logo : {
    width : 40,
    height : 40
  }
});
