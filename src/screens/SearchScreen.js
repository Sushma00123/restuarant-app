import React,{ useState } from 'react';
import {View , Text, StyleSheet,ScrollView} from 'react-native'
import ResultList from '../components/ResultList';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults'

const SearchScreen = ()=>{
    // console.log(props,'props')
    const [term, setTerm] = useState('');
    const [searchApi,result,errorMessage] = useResults();
    console.log(searchApi)

    const filterResultByPrice = (price)=>{
        return result.filter(result=>{
            return result.price===price;
        })
       
    }
   
    return(
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit = {()=>searchApi(term)}
            />
            {
                errorMessage ? 
            <Text>{errorMessage}</Text> : null
            }
         
            <ScrollView>
            <ResultList title='Cost Effective' result={filterResultByPrice('$')} />
            <ResultList title='Bit Pricier' result={filterResultByPrice('$$')} />
            <ResultList title='Big Spender' result={filterResultByPrice('$$$')} />
            </ScrollView>
        </>
    )
}



export default SearchScreen