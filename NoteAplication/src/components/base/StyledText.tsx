import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

// Props đầu vào: nội dung, style, ...
// Các thẻ sẽ dùng ở bên trong gồm những thẻ gì
// Các loại giá trị có thể truyền vào
// Style default
interface Props {
  value: string;
  customStyle?: StyleProp<TextStyle>;
}

const StyledText = (props: Props) => {
  return <Text style={props.customStyle}>{props.value}</Text>;
};

export default StyledText;

const styles = StyleSheet.create({
  textColor : {color : 'String' }});
