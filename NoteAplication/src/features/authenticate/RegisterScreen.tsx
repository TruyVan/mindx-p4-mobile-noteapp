import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import StyledInput from '../../components/common/StyledInput';
import useOnChangInput from '../hooks/useOnChangInput';
import StyledCheckBox from '../../components/base/StyledCheckBox';
import StyledRadioButton from '../../components/base/StyledRadioButton';
import StyledTouchable from '../../components/base/StyledTouchable';
import StyledText from '../../components/base/StyledText';
import { includes } from 'lodash';
import { TextInput } from 'react-native-gesture-handler';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import { navigate } from '../../navigation/NavigationService';



const RegisterScreen = () => {

  const {user, onChangeText} = useOnChangInput();

  console.log('USER', user);

  const onSubmitInfo = () => {
    let isPassed = false;
   

    if (user.username.length < 6) {
      Alert.alert('USER CHƯA ĐÚNG ĐỊNH DẠNG')
      isPassed = false
    }
    else if(user.password.length < 8){
      Alert.alert('MẬT KHẨU PHẢI LỚN HƠN 8 KÝ TỰ')
      isPassed = false
    }
    else if(user.password != user.checkPassword){
      Alert.alert('VUI LÒNG KIỂM TRA LẠI MẬT KHẨU')
      isPassed = false
    }
    else if(user.policy != true){
      Alert.alert('VUI LÒNG ĐỒNG Ý VỚI ĐIỀU KHOẢN SỬ DỤNG')
      isPassed = false
    }
    else if(user.email.length < 1){
      Alert.alert('VUI LÒNG NHẬP ĐẦY ĐỦ EMAIL')
      isPassed = false
      return
    }
    
    else{
      isPassed = true;
      Alert.alert('Đăng ký thành công')
      navigate(TAB_NAVIGATION_ROOT.AUTHENTICATE_ROUTE.LOGIN)
     
    }
    

  };

  
  const goToPolicy = () => {
    navigate(TAB_NAVIGATION_ROOT.POLICY_ROUTE.POLICY_SCREEN,{}
    );
  };
 
  return (
    <ScrollView style={styles.backgroundREG}>
      <StyledText customStyle={{
        color : "#e54a2b",
        alignSelf : 'center',
        fontSize : 30,
        fontWeight : 'bold',
        marginBottom : 30
      }} value={'Đăng ký tài khoản'} />
      <StyledInput
      placeholder='Họ và tên'
      customStyle = {styles.customBorder}
      value={user.fullname}
      onChangeText = {fn => onChangeText(fn, 'fullname')}
      label = "Họ và tên"/>
      <StyledInput
      placeholder='Tên đăng nhập'
        customStyle = {styles.customBorder}
        value={user.username}
        onChangeText={us => onChangeText(us, 'username')}
        label="Tên đăng nhập"
      />
      <StyledInput
      placeholder='Mật khẩu'
      customStyle = {styles.customBorder}
        secureTextEntry={true}
        value={user.password}
        onChangeText={ps => onChangeText(ps, 'password')}
        label="Mật khẩu"
      />
      <StyledInput
      placeholder='Nhập lại mật khẩu'
      customStyle = {styles.customBorder}
        secureTextEntry={true}
        value={user.checkPassword}
        onChangeText={ps => onChangeText(ps, 'checkPassword')}
        label="Nhập lại mật khẩu"
      />
      <StyledInput
      placeholder='Email'
      customStyle = {styles.customBorder}
        value={user.email}
        onChangeText={email => onChangeText(email, 'email')}
        label="Email"
      />
      <StyledRadioButton />
      <View style={styles.policy}>
        <StyledCheckBox
          isChecked={user.policy}
          id={'policy'}
          onCheck={(id, policy: boolean) => onChangeText(policy, id)}
        />
        <StyledText customStyle={{paddingTop : 10}} value='Đồng ý với ' />
        <StyledTouchable onPress={goToPolicy}>
          <StyledText customStyle={{paddingTop : 10,color : '#0066FF'}} value='điều khoản'/>
          </StyledTouchable>
      </View>
      <StyledTouchable 
        onPress={onSubmitInfo}
        customStyle={{
          backgroundColor :'#e54a2b',
          borderWidth: 1.5,
          borderRadius: 20,
          borderColor: 'black',  
          alignSelf: 'center',
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginTop: 40,
        }}>
        <StyledText customStyle={{color : 'white', fontSize: 15, fontWeight :'bold'}} value="Gửi thông tin" />
      </StyledTouchable>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  customBorder : {
    backgroundColor : 'white',
    borderRadius : 15,
    borderWidth : 2,
    paddingHorizontal : 10,
    fontSize : 18,
  },
  backgroundREG : {
    backgroundColor : 'white',
    paddingHorizontal : 30,
    flex : 1
  },
  policy : {
    justifyContent : 'center',
    flexDirection : 'row',
    marginTop : 30

  }
});



