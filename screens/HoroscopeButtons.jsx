import { Button, Text } from '@react-navigation/elements';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export function HoroscopeButtons() {

  // navigation
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      
      <Text style={[styles.subtitle]}>Inspirations</Text>
      <Text style={[styles.title]}>Daily Horoscope</Text>
      
      <View style={[styles.twoColumns, styles.buttonContainer]}>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Aries' })}
        >
          <Text style={[styles.buttonLabel]}>Aries</Text>
      </Pressable>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Taurus' })}
      >
        <Text style={[styles.buttonLabel]}>Taurus</Text>
      </Pressable>
      </View>

      <View style={[styles.twoColumns, styles.buttonContainer]}>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Gemini' })}
        >
          <Text style={[styles.buttonLabel]}>Gemini</Text>
      </Pressable>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Cancer' })}
      >
        <Text style={[styles.buttonLabel]}>Cancer</Text>
      </Pressable>
      </View>

      <View style={[styles.twoColumns, styles.buttonContainer]}>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Leo' })}
        >
          <Text style={[styles.buttonLabel]}>Leo</Text>
      </Pressable>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Virgo' })}
      >
        <Text style={[styles.buttonLabel]}>Virgo</Text>
      </Pressable>
      </View>
      
      <View style={[styles.twoColumns, styles.buttonContainer]}>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Libra' })}
        >
          <Text style={[styles.buttonLabel]}>Libra</Text>
      </Pressable>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Scorpio' })}
      >
        <Text style={[styles.buttonLabel]}>Scorpio</Text>
      </Pressable>
      </View>

      <View style={[styles.twoColumns, styles.buttonContainer]}>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Sagittarius' })}
        >
          <Text style={[styles.buttonLabel]}>Sagittarius</Text>
      </Pressable>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Capricorn' })}
      >
        <Text style={[styles.buttonLabel]}>Capricorn</Text>
      </Pressable>
      </View>

      <View style={[styles.twoColumns, styles.buttonContainer]}>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Aquarius' })}
        >
          <Text style={[styles.buttonLabel]}>Aquarius</Text>
      </Pressable>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => navigation.navigate('Prediction', { zodiac: 'Pisces' })}
      >
        <Text style={[styles.buttonLabel]}>Pisces</Text>
      </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "italic",
  },
  twoColumns: {
    flexDirection: "row",
    //flex: 1,
    gap: 10,
    alignItems: "center",
    //justifyContent: "flex-start"
  },
  buttonContainer: {
    //flex: 1,
    //width: 80,
    //height: 28,
    //marginHorizontal: 20,
    alignItems: "flex-start",
    //justifyContent: 'flex-start',
    padding: 3,
  },
  button: {
    //flex: 1,
    borderRadius: 10,
    width: '45%',
    //height: '100%',
    //alignItems: 'center',
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