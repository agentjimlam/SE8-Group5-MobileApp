Screens/components to be placed here


# On HomeScreen.js

Possible addition: we can add a bunch of buttons that navigate to each of our screen/components in the Tab.Navigator.

# On Nested Ternary Operator
NESTED TERNARY OPERATOR: 

```javascript
{result === "tie" ? "It's a tie!" : result === "player" ? "You win!" : "Computer wins!"}
```
This above is the same as...

```javascript
if (result === "tie") {
   return "It's a tie!";
 } else if (result === "player") {
   return "You win!";
 } else {
   return "Computer wins!";
}
```

# On useCallback()

`useCallback()` hook: https://react.dev/reference/react/useCallback
- On the initial render, `useCallback` returns the `fn` function you have passed.
- During subsequent renders, it will either return an already stored `fn` function from the last render (if the dependencies haven’t changed), or return the `fn` function you have passed during this render.
- It helps prevent unnecessary re-renders of child components.

`useCallback()` hook is used to skip re-rendering of components so as to optimize performance.
- eg. skip unnecessary re-renders of child components, in this case <TouchableOpacity>
- The `useCallback()` below will cache the `play` function, returning the same `play` function every time the component re-renders, instead of recreating a new `play` function each time re-render

### 1️⃣ What is a Child Component?
A child component is any component that is nested inside another component.

In your case:

<TouchableOpacity> is a child of <View>.
<Text> is a child of <TouchableOpacity>.
Your Code Structure:

```javascript
<View style={stylesRPS.choicesContainer}>
  {choices.map((choice) => (
    <TouchableOpacity  // 👈 Child of <View>
      key={choice}
      style={stylesRPS.choiceButton}
      onPress={() => play(choice)}  // 👈 Function passed as a prop
    >
      <Text style={stylesRPS.choiceEmoji}>{emojis[choice]}</Text>  // 👈 Child of <TouchableOpacity>
      <Text style={stylesRPS.choiceText}>{choice}</Text>  // 👈 Child of <TouchableOpacity>
    </TouchableOpacity>
  ))}
</View>
```

✅ Parent Component: <View>
✅ Child Components: <TouchableOpacity>, <Text>

### 2️⃣ What is a Prop?
A prop (short for "property") is data passed to a child component from its parent.

In RockPaperScissor.js:
- `onPress` is a prop passed to <TouchableOpacity>.
- `play(choice)` is the function being passed to onPress.

```javascript
<TouchableOpacity onPress={() => play(choice)}>
```

- `onPress` is a prop.
- `() => play(choice)` is the function being passed as the value of that prop.

### 3️⃣ Why Use useCallback Here?
`useCallback` is useful when a function is passed as a prop to a child component.

What Happens without `useCallback`?
Every time the component re-renders, React creates a new function for `onPress`:

```javascript
onPress={() => play(choice)}
```

This causes `<TouchableOpacity>` to think its props changed, even though the logic is the same. This can lead to unnecessary re-renders.

With `useCallback`,

```javascript
const play = useCallback((choice) => {
  // Game logic...
}, []);
```

Now, the `play` function remains the same across renders, preventing unnecessary re-renders of `<TouchableOpacity>`.
- The empty dependency array `[]` means this function never changes after the first render.
- The `play` function is cached, and React will not recreate it on every render also.