import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import { set } from 'react-native-reanimated';
import yelp from '../apis/yelp';

function ResultShowScreen({navigation,route}) {
    const [details, setDetails] = useState(null)
// console.log('param',route.params)
    // console.log('////',navigation)
const {id} = route.params;
//    console.log('id',id)
console.log(details)

const getResult = async(id)=>{

const response = await yelp.get(`/${id}`)
// console.log('details',response.data)
setDetails(response.data)
}

useEffect(() => {

  getResult(id)  

}, [])

if(!details){
  return null;
}

  return (
    <View>
    <Text>{details.name}</Text>
    <FlatList
    data={details.photos}
    keyExtractor={(photo)=>photo}
    renderItem={({item})=>{
      return<Image style={styles.image} source={{uri:item}}/>
    }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    width:250,
    height:300
  }
})
export default ResultShowScreen