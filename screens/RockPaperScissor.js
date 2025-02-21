import { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { stylesRPS } from "../styles/stylesRockPaper";

const choices = ["rock", "paper", "scissors"];
const emojis = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

const getWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return "tie";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "player";
  }
  return "computer";
};

export default function RockPaperScissor({ navigation }) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });

  // useCallback() hook is used to skip re-rendering of components so as to optimize performance. See screens/notes.md for more info
  // eg. skip unnecessary re-renders of child components, in this case <TouchableOpacity>
  // The useCallback() below will cache the `play` function, returning the same `play` function every time the component re-renders, instead of recreating a new `play` function each time re-render
  const play = useCallback((choice) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computer);

    const gameResult = getWinner(choice, computer);
    setResult(gameResult);

    // use spread operator to make a copy of previous score state object and then add +1 to score if winner is player or computer
    if (gameResult === "player") {
      setScore((prev) => ({
        ...prev,
        player: prev.player + 1,
      }));
    } else if (gameResult === "computer") {
      setScore((prev) => ({
        ...prev,
        computer: prev.computer + 1,
      }));
    }
  }, []);
  // The empty dependency array [] means this function never changes after the first render.

  // Reset handler function
  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={stylesRPS.container}>
        {/* <StatusBar style="dark" /> */}
        <ScrollView style={stylesRPS.containerScroll}>
          <Text style={stylesRPS.title}>Rock Paper Scissors</Text>

          <View style={stylesRPS.scoreContainer}>
            <View style={stylesRPS.scoreBox}>
              <Text style={stylesRPS.scoreLabel}>You</Text>
              <Text style={stylesRPS.scoreValue}>{score.player}</Text>
            </View>
            <View style={stylesRPS.scoreBox}>
              <Text style={stylesRPS.scoreLabel}>Computer</Text>
              <Text style={stylesRPS.scoreValue}>{score.computer}</Text>
            </View>
          </View>
          {/* if "no playerChoice made" is true, it will show the 3 choices using Array.map() method, else if false playerChoice has been made, it will show player's and computer's choice */}
          {!playerChoice ? (
            <View style={stylesRPS.choicesContainer}>
              {choices.map((choice) => (
                <TouchableOpacity
                  key={choice}
                  style={stylesRPS.choiceButton}
                  onPress={() => play(choice)}
                >
                  <Text style={stylesRPS.choiceEmoji}>{emojis[choice]}</Text>
                  <Text style={stylesRPS.choiceText}>{choice}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={stylesRPS.resultContainer}>
              <View style={stylesRPS.choices}>
                <View style={stylesRPS.playerChoice}>
                  <Text style={stylesRPS.choiceEmoji}>
                    {emojis[playerChoice]}
                  </Text>
                  <Text style={stylesRPS.choiceText}>
                    You chose {playerChoice}
                  </Text>
                </View>
                <Text style={stylesRPS.vs}>VS</Text>
                <View style={stylesRPS.computerChoice}>
                  <Text style={stylesRPS.choiceEmoji}>
                    {emojis[computerChoice]}
                  </Text>
                  <Text style={stylesRPS.choiceText}>
                    Computer chose {computerChoice}
                  </Text>
                </View>
              </View>

              <Text style={stylesRPS.result}>
                {result === "tie"
                  ? "It's a tie!"
                  : result === "player"
                  ? "You win!"
                  : "Computer wins!"}
              </Text>

              <TouchableOpacity
                style={stylesRPS.playAgainButton}
                onPress={reset}
              >
                <Text style={stylesRPS.playAgainText}>Play Again</Text>
              </TouchableOpacity>

              <Pressable
                style={stylesRPS.navigateButton}
                onLongPress={() => {
                  navigation.navigate("TicTacToe");
                  // navigation.navigate("Tab Navigator", {screen: "TicTacToe"});
                }}
              >
                <Text style={stylesRPS.navigateText}>
                  Go to TicTacToe (Long press)
                </Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// NESTED TERNARY OPERATOR: {result === "tie" ? "It's a tie!" : result === "player" ? "You win!" : "Computer wins!"}
// it is same as below...
// if (result === "tie") {
//   return "It's a tie!";
// } else if (result === "player") {
//   return "You win!";
// } else {
//   return "Computer wins!";
// }
