import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Images from '../../assests';
import SocialLogin from '../../components/common/SocialLogin';
import StyledInput from '../../components/common/StyledInput';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import {navigate} from '../../navigation/NavigationService';
import ImagePicker from 'react-native-image-crop-picker';

const LoginScreen = () => {
  const [formData, setFormData] = useState(false);

  const goToHome = () => {
    navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN, {
    });
  };

  const goToSignup = () => {
    navigate(TAB_NAVIGATION_ROOT.AUTHENTICATE_ROUTE.REGISTER
    );
  };

  const onCheckRemember = (v: boolean) => {
    setFormData(v);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        style ={styles.logo}
        source = {{uri : 'https://logopond.com/logos/64f98063d317d8b96dfe4c79b073d6cc.png'}} />
        <Text style={styles.welcomeText}>MR.BURGER</Text>
        <Text style={styles.descriptionText}>Đăng nhập tài khoản</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 40}}>
        <StyledInput
          label="Tên đăng nhập"
          placeholderText="Tên đăng nhập"
          customStyle={styles.input}
          leftIcon={Images.icons.loginScreen.user}
        />
        <StyledInput
          label="Mật khẩu"
          placeholderText="Mật khẩu"
          customStyle={styles.input}
          leftIcon={Images.icons.loginScreen.password}
        />
        <TouchableOpacity onPress={goToHome} style={styles.buttonSignIn}>
          <Text style = {{color:'white',fontWeight :"bold"}}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity>
        <SocialLogin />
        </TouchableOpacity>
        
      </View>
      {/* <StyledCheckBox color={'green'} onCheck={onCheckRemember} /> */}
      {/* <StyledRadioButton /> */}
      <View style={styles.bottom}>
        <Text>Bạn chưa có tài khoản ? </Text>
        <TouchableOpacity onPress={goToSignup}>
          <Text style={styles.signUpText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width : 250,
    height : 250,
    marginTop : 30,
  },
  welcomeText: {
    color: '#e54a2b',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily :  'monospace'
  },
  descriptionText: {
    color: '#787878',
    fontSize: 16,
    marginTop : 30,
    marginBottom : 30
  },
  buttonSignIn: {
    color: 'white',
    backgroundColor: '#e54a2b',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  socialLoginContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop : 30
  },
  input: {
    borderRadius: 25,
    paddingLeft: 25,
  },
  bottom: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical : 30
  },
  signUpText: {
    color: '#e54a2b',
    fontWeight: '700',
  },
});
