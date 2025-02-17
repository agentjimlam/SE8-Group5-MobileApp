import { Button, Text } from '@react-navigation/elements';
import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';

import { useEffect, useState } from "react";


// sample url
// https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=Virgo&day=TODAY
const API_START = "https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=";
// {Virgo} = {route.params.zodiac}
const TODAY_END = "&day=TODAY";

export function HoroscopePrediction({ route }) {
  // data
  const [data, setData] = useState("Select your zodiac sign");

  // the zodiac sign
  const zodiac = route.params.zodiac || {zodiac: ""}

  // function to get the data
  async function getApi(){
    try{
      setData("Loading ...");
      const url = API_START + zodiac + TODAY_END;
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData["data"]["horoscope_data"]);
      //setData("test getting data " + zodiac);
    } catch(err){
      console.log("Error when fetching horoscope api.");
    }
  };
  // fetch the reading from the API
  useEffect( 
    () => { getApi(); }, 
    [zodiac]
  );

  // navigation
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title]}>{route.params.zodiac}</Text>
      <Text style={[styles.text]}>{data}</Text>
      
      <View style={[styles.buttonContainer]}>
      <Pressable 
        style={styles.button} 
        onPress={()=>navigation.goBack()}>
        <Text style={styles.buttonLabel}>   
          Back
        </Text>
      </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    gap: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    margin: 15,
    fontSize: 20,
    lineHeight: 35,
  },
  buttonContainer: {
    flex: 1,
    //width: 80,
    //height: 28,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    //height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "blue",
    padding: 10,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 28,
  },
});
