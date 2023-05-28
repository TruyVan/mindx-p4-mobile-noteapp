import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

interface Props {
  color?: string;
  id: string;
  selectedItem?: string;
  onCheck(id: string, isChecked: boolean): void;
}

const ItemRadioButton = (props: Props) => {
  const {color = '#e54a2b'} = props;
  const [checked, setChecked] = useState(false);

  const toggleCheckBox = (v: boolean) => {
    setChecked(v);
    props.onCheck(props.id, checked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => toggleCheckBox(!checked)}
        style={[
          styles.circle,
          {backgroundColor: props.selectedItem === props.id ? color : 'white'},
        ]}
      />
      <Text>{props.id}</Text>
    </View>
  );
};

export default ItemRadioButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: '#e54a2b',
    borderColor: 'black',
    borderWidth: 1.5,
    marginRight: 10,
  },
  circle : {
    width: 20,
    height: 20,
    backgroundColor: '#e54a2b',
    borderColor: 'black',
    borderWidth: 1.5,
    marginRight: 10,
    borderRadius : 15,
    padding : 10
  }
});
