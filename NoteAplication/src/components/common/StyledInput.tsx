import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

interface Props extends TextInputProps {
  placeholderText?: string;
  customStyle?: StyleProp<TextStyle>;
  label: string;
  count?: number;
  leftIcon?: ImageSourcePropType;
  
}

const StyledInput = (props: Props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Image
            source={props.leftIcon}
            style={{height: 25, width: 20}}
          />
        </View>
        <TextInput
          style={[styles.textInput, props.customStyle]}
          placeholder={props.placeholderText}
          {...props}
        />
      </View>
    </View>
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize : 15,
    fontWeight : 'bold',
    
  },
  textInput: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: '#71c1fe',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.51,

    elevation: 14,
  },
  textInput2 : {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,
    flex: 1,
    shadowColor: '#71c1fe',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.51,

    elevation: 14,
    borderRadius : 25
  }
  
});
