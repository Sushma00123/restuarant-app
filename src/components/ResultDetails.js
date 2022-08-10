import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native' ;

function ResultDetails({result}) {
  return (
   <View style={styles.container}>
    <Image source={{uri:result.image_url}} style={styles.image}/>
    <Text style={styles.name}>{result.name}</Text>
    <Text>Ratings - {result.rating} stars, Review - {result.review_count}</Text>
   
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:250,
        height:150,
        borderRadius:4,
        marginBottom:5
    
    },
    name:{
        fontWeight:'bold',
        fontSize:18
    }
})

export default ResultDetails