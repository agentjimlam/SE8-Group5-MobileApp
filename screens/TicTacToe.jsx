
// I am writing the code on a single page for simplicity to view the logic

import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Initial by draw out the winning array
// Use 'for ... of' loop to find if any winner?
// I store my ugly drawing in the Assets folder
const isWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export function TicTacToe() {
    // Initialize a state for board variable with an array of 9 elements and set to 'null'
    const [board, setBoard] = useState(Array(9).fill(null));
    // To track whose turn it is ('X' or 'O')
    const [isXNext, setIsXNext] = useState(true);
    // Intial is winner function for later use when call the 'handlePress'
    const winner = isWinner(board);
    // Check if board is full
    const isBoardFull = board.every(cell => cell !== null);

    // Create the event Handler to change the value when onPress
    // If the selected cell have exist or have winner, then prevent overwriting
    // Creates a copy of the current board state to ensure nothing changes until call
    // the 'setBoard(newBoard)
    // Ternary operation - Update the selected cell with 'X' otherwise with 'O'
    // Update the board state with the new board
    // Toggle the turn to the next player
    const handlePress = (index) => {
        if (board[index] || winner) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    // Reset function for a new game
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        // Mapping the 'TouchableOpacity key={index}' to 9 touchable button
        // Add a default message to show who's player turn, there for it may change to 'X' or 'O' turn
        // After I have completed and test the app, I am add one more Text field to show:
        // Who is the Winner? 'X' or 'O' the hide the player turn
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe Game</Text>
            <Text style={styles.subtitle}>Enjoy the game for your coffee break!</Text>
            <Text style={styles.turnMessage}>{winner ? '' : `${isXNext ? 'X' : 'O'}: Player's turn`}</Text>
            <View style={styles.board}>
                {board.map((cell, index) => (
                    <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)}>
                        <Text style={styles.cellText}>{cell}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {winner ? (
                <Text style={styles.winnerText}>Winner: {winner}, play again!</Text>
            ) : (isBoardFull ? (
                <Text style={styles.winnerText}>No player win, please reset the game</Text>
            ) : null)}
            <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

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
        fontWeight: 600,
        margin: 10,
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        color: "rgb(101, 84, 247)",
        fontStyle: "italic",
        margin: 10,
    },
    board: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 250,
    },
    cell: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "rgb(79, 3, 88)",
    },
    cellText: {
        fontSize: 32,
        fontWeight: "bold",
    },
    resetButton: {
        width: 180,
        alignItems: "center",
        marginTop: 30,
        padding: 10,
        backgroundColor: 'rgb(5, 133, 172)',
        borderRadius: 5,
    },
    resetText: {
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
    },
    winnerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'rgb(255, 0, 0)',
        marginTop: 20,
    },
    turnMessage: {
        fontSize: 18,
        fontWeight: 500,
        color: 'rgb(219, 142, 27)',
    },
});