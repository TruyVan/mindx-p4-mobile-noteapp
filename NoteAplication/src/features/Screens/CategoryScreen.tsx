import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const data = [
    { id: 1, title: 'School',
    innerData: [
      { id: 1, name: 'Vào havard',description : 'kiếm 100 tỉ' },
      { id: 2, name: 'Qua môn',description : 'abc' },
      { id: 3, name: 'Ngủ',description : 'abc' },
    ], },
    { id: 2, title: 'Study',
     innerData: [
      { id: 1, name: 'Tiếng Anh',description : 'Khó vl' },
      { id: 2, name: 'Toán',description : 'Khó vl' },
      { id: 3, name: 'Lý',description : 'Khó vl' },
      { id: 4, name: 'Hoá',description : 'Khó vl' },
    ],},
    {
      id: 3,
      title: 'Work',
      innerData: [
        { id: 1, name: 'Ngủ sáng',description : 'abc' },
        { id: 2, name: 'Ngủ trưa',description : 'abc' },
        { id: 3, name: 'Ngủ tối',description : 'abc' },
      ],
    },
  ];

const Category = () => {
  const [selectedDataId, setSelectedDataId] = useState(null);

  const renderInnerData = ({ item }) => {
    return (
    <View style={{flexDirection : 'row'}}>
        <TouchableOpacity
        style={styles.object1}
      >
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
            setSelectedDataId(item.id);
        }}
        style={selectedDataId === item.id ? styles.selectedObject : styles.object}
      >
        <Text style={selectedDataId === item.id ? styles.selectedText : styles.normalText}>{item.title}</Text>
      
      </TouchableOpacity>
    );
  };

  return (
 
    <View>
   <TouchableOpacity>
      <FlatList
       contentContainerStyle = {styles.tittle}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        
      />
    </TouchableOpacity>
    
    <ScrollView>
    <TouchableOpacity>{selectedDataId && (
        <FlatList 
        contentContainerStyle = {styles.container}
        data={data.find((item) => item.id === selectedDataId).innerData}
          renderItem={renderInnerData}
          keyExtractor={(item) => item.id.toString()}
        />
       
      )}</TouchableOpacity>
   </ScrollView>
   </View>
  );
};

export default React.memo(Category);

const styles = StyleSheet.create({
    tittle : {
        flexDirection  : 'row',
        alignItems : 'flex-start',
        marginVertical : 10,
    },
    container : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'flex-start',
        marginVertical : 15,
        justifyContent : 'space-evenly',
        marginHorizontal : 15,
        
    },
    project : {
        width : 40,
        height : 40,
        alignSelf : 'center',
        marginRight : 5
       
    },
    item : {
        width : 150,
        height : 50,
        borderWidth : 1,
        borderRadius : 15,
        padding : 10,
        alignItems : 'flex-start',
        marginHorizontal : 5,
        justifyContent : 'flex-start',
        flexDirection : 'row',
        backgroundColor : '#e54a2b'
    },
    normalText : {
        fontSize : 18,
        fontWeight : 'bold',
        color : '#919099'
    },
    selectedText : {
        fontSize : 18,
        fontWeight : 'bold',
        color : '#000000'
    },
    object: {
        flexDirection : 'row',
        width : 150,
        height : 50,
        borderWidth : 1,
        borderRadius : 15,
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        marginHorizontal : 5,
        paddingHorizontal : 5
      },
      selectedObject: {
        flexDirection : 'row',
        width : 150,
        height : 50,
        borderWidth : 1,
        borderRadius : 15,
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: '#919099',
        marginHorizontal : 5,
        paddingHorizontal : 5,
        
      },
      itemPrice : {
        fontWeight :'bold',
        marginTop :5
    },
    itemDescription : {
        textAlign : 'center'
    },
    itemName : {
        fontWeight :'bold',
        marginVertical : 3,
        fontSize : 15
    },
     container1 : {
         flexDirection  : 'row',
         alignItems: 'center',
        
     },
     project1 : {
         width : 100,
         height : 100,
         alignSelf : 'center',
         marginRight : 5
        
     },
    
     object1: {
         flexDirection : 'column',
         width : 100,
         height :100,
         borderWidth : 1,
         borderRadius : 15,
         padding: 10,
         borderColor: '#ccc',
         backgroundColor: '#fff',
         marginHorizontal : 5,
         paddingHorizontal : 5,
         justifyContent : 'center',
         alignItems : 'center',
         marginBottom : 15,
         
       },
})