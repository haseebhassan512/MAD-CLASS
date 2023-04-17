//1. Array Functions:
// a) push(): Adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ['apple', 'banana', 'orange'];
fruits.push('mango');
console.log(fruits);
 // Output: ['apple', 'banana', 'orange', 'mango']
//  b) pop(): Removes the last element from an array and returns that element.
fruits.pop();
let lastFruit = fruits.pop();
console.log(lastFruit); 
// Output: 'orange'
console.log(fruits);
 // Output: ['apple', 'banana']
//  c) join(): Joins all elements of an array into a string and returns the string.

let fruitsString = fruits.join(', ');
console.log(fruitsString); 
// Output: 'apple, banana, orange'
//2. String Functions:
// a) slice(): Extracts a section of a string and returns a new string.
let str = 'Hello, World!';
let subStr = str.slice(0, 5);
console.log(subStr);
 // Output: 'Hello'
//  b) indexOf(): Returns the index of the first occurrence of a specified value in a string.
let index = str.indexOf('W');
console.log(index); 
// Output: 7
// c) replace(): Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
let newStr = str.replace('World', 'Mars'); 
console.log(newStr);
 // Output: 'Hello, Mars!'

//  3. chess board layout in React Native
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const ChessBoard = () => {
  const [board, setBoard] = useState([
    ['BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR'],
    ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP'],
    ['WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR'],
  ]);

  const renderSquare = (row, col) => {
    const isDarkSquare = (row + col) % 2 !== 0;
    const piece = board[row][col];

    return (
      <TouchableOpacity
        key={`${row}${col}`}
        style={[
          styles.square,
          isDarkSquare && styles.darkSquare,
        ]}
        onPress={() => handlePress(row, col)}
      >
        <View style={styles.piece}>
          <Text style={styles.pieceText}>{piece}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handlePress = (row, col) => {
    // Handle square press
  };

  return (
    <View style












