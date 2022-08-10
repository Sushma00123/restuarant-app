import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultDetails from './ResultDetails';

function ResultList({title,result}) {
  const navigation = useNavigation();
  // console.log('/////////',navigation)

  if(!result.length){
    return null;
  }
  // console.log('nav',navigation)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text>result - {result.length}</Text> */}
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={result=>result.id}
        renderItem={({item})=>{
            return(
              <TouchableOpacity onPress={()=>navigation.navigate('details',{id:item.id})}>
                <ResultDetails result={item}/>
              </TouchableOpacity>
            )
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:10
  },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:15
        
    }
})

export default ResultList;