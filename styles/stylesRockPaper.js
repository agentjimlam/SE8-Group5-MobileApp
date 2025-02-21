import { StyleSheet } from "react-native";

export const stylesRPS = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1a1a2e", // very dark blue background #c5ccde #1a1a2e
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
  },
  containerScroll:{
    flex: 1,
    backgroundColor: "#1a1a2e", // very dark blue background #c5ccde #1a1a2e
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    textAlign: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 40,
  },
  scoreBox: {
    alignItems: "center",
    backgroundColor: "#16213e",
    padding: 20,
    borderRadius: 15,
    minWidth: 120,
  },
  scoreLabel: {
    color: "#e94560",
    fontSize: 18,
    marginBottom: 5,
  },
  scoreValue: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    flexWrap: "wrap",
  },
  choiceButton: {
    backgroundColor: "#16213e",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    margin: 10,
    minWidth: 100,
  },
  choiceEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  choiceText: {
    color: "#fff",
    fontSize: 16,
    textTransform: "capitalize",
  },
  resultContainer: {
    alignItems: "center",
    width: "100%",
  },
  choices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  playerChoice: {
    alignItems: "center",
  },
  computerChoice: {
    alignItems: "center",
  },
  vs: {
    color: "#e94560",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  result: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  playAgainButton: {
    backgroundColor: "#e94560",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 500,
  },
  playAgainText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  navigateButton: {
    backgroundColor: "#e94560",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 30,
  },
  navigateText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
