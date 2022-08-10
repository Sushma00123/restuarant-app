import React from 'react'
import {TextInput,View,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput style={styles.inputStyle} 
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height:50,
        marginTop:15,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        // borderColor:'black',
        // borderWidth:1,
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
  });

export default SearchBar