import { Dimensions, StyleSheet } from "react-native";

// This is a temp style sheet you can use for sake of making the skeleton of the screen first. Taken from class.

const windowWidth = Dimensions.get("window").width;

export const stylesDefault = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // remove and play around to see what each flex code does
    padding: 20,
    backgroundColor: "#EDF9EB", // very light green
  },
  innerContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 30,
    alignSelf: 'center',
    width: '100%',
  },
  buttonContainer: {
    alignItems: "stretch",
  },
  launchButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    marginTop: 16,
  },
  launchButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  imageContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  selectedImage: {
    width: windowWidth - 40,
    height: windowWidth - 40,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  photoButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  photoButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },

  // From Module 5.2's CompAndLayoutApp
  label: {
    fontSize: 18,
    marginTop: 14,
  },
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    width: '70%'
  },
  radioContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
