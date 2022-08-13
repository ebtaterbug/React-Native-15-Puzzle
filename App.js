import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

export default function App() {
  const [one, setOne] = useState({value: 1, tile: 1})
  const [two, setTwo] = useState({value: 2, tile: 2})
  const [three, setThree] = useState({value: 3, tile: 3})
  const [four, setFour] = useState({value: 4, tile: 4})
  const [five, setFive] = useState({value: 5, tile: 5})
  const [six, setSix] = useState({value: 6, tile: 6})
  const [seven, setSeven] = useState({value: 7, tile: 7})
  const [eight, setEight] = useState({value: 8, tile: 8})
  const [nine, setNine] = useState({value: 9, tile: 9})
  const [ten, setTen] = useState({value: 10, tile: 10})
  const [eleven, setEleven] = useState({value: 11, tile: 11})
  const [twelve, setTwelve] = useState({value: 12, tile: 12})
  const [thirteen, setThirteen] = useState({value: 13, tile: 13})
  const [fourteen, setFourteen] = useState({value: 14, tile: 14})
  const [fifteen, setFifteen] = useState({value: 15, tile: 15})
  const [sixteen, setSixteen] = useState({value: null, tile: 16})

  const [timer, setTimer] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [shuffled, setShuffled] = useState(false)

  function moveTile(tile) { 
    
    if (tile === 1 && two.value == null) {
      setOne({value: null, tile: 1})
      setTwo({value: one.value, tile: 2})
    } else if (tile === 1 && five.value == null) {
      setOne({value: null, tile: 1})
      setFive({value: one.value, tile:5})
    } else if (tile === 2 && one.value == null) {
      setTwo({value: null, tile: 2})
      setOne({value: two.value, tile: 1})
    } else if (tile === 2 && six.value == null) {
      setTwo({value: null, tile: 2})
      setSix({value: two.value, tile: 6})
    } else if (tile === 2 && three.value == null) {
      setTwo({value: null, tile: 2})
      setThree({value: two.value, tile: 3})
    } else if (tile === 3 && two.value == null) {
      setThree({value: null, tile: 3})
      setTwo({value: three.value, tile: 2})
    } else if (tile === 3 && seven.value == null) {
      setThree({value: null, tile: 3})
      setSeven({value: three.value, tile: 7})
    } else if (tile === 3 && four.value == null) {
      setThree({value: null, tile: 3})
      setFour({value: three.value, tile: 4})
    } else if (tile === 4 && three.value == null) {
      setFour({value: null, tile: 4})
      setThree({value: four.value, tile: 3})
    } else if (tile === 4 && eight.value == null) {
      setFour({value: null, tile: 4})
      setEight({value: four.value, tile: 8})
    } else if (tile === 5 && one.value == null) {
      setFive({value: null, tile: 5})
      setOne({value: five.value, tile: 1})
    } else if (tile === 5 && six.value == null) {
      setFive({value: null, tile: 5})
      setSix({value: five.value, tile: 6})
    } else if (tile === 5 && nine.value == null) {
      setFive({value: null, tile: 5})
      setNine({value: five.value, tile: 9})
    } else if (tile === 6 && two.value == null) {
      setSix({value: null, tile: 6})
      setTwo({value: six.value, tile: 2})
    } else if (tile === 6 && five.value == null) {
      setSix({value: null, tile: 6})
      setFive({value: six.value, tile: 5})
    } else if (tile === 6 && seven.value == null) {
      setSix({value: null, tile: 6})
      setSeven({value: six.value, tile: 7})
    } else if (tile === 6 && ten.value == null) {
      setSix({value: null, tile: 6})
      setTen({value: six.value, tile: 10})
    } else if (tile === 7 && three.value == null) {
      setSeven({value: null, tile: 7})
      setThree({value: seven.value, tile: 3})
    } else if (tile === 7 && six.value == null) {
      setSeven({value: null, tile: 7})
      setSix({value: seven.value, tile: 6})
    } else if (tile === 7 && eight.value == null) {
      setSeven({value: null, tile: 7})
      setEight({value: seven.value, tile: 8})
    } else if (tile === 7 && eleven.value == null) {
      setSeven({value: null, tile: 7})
      setEleven({value: seven.value, tile: 11})
    } else if (tile === 8 && four.value == null) {
      setEight({value: null, tile: 8})
      setFour({value: eight.value, tile: 4})
    } else if (tile === 8 && seven.value == null) {
      setEight({value: null, tile: 8})
      setSeven({value: eight.value, tile: 7})
    } else if (tile === 8 && twelve.value == null) {
      setEight({value: null, tile: 8})
      setTwelve({value: eight.value, tile: 12})
    } else if (tile === 9 && five.value == null) {
      setNine({value: null, tile: 9})
      setFive({value: nine.value, tile: 5})
    } else if (tile === 9 && ten.value == null) {
      setNine({value: null, tile: 9})
      setTen({value: nine.value, tile: 10})
    } else if (tile === 9 && thirteen.value == null) {
      setNine({value: null, tile: 9})
      setThirteen({value: nine.value, tile: 13})
    } else if (tile === 10 && six.value == null) {
      setTen({value: null, tile: 10})
      setSix({value: ten.value, tile: 6})
    } else if (tile === 10 && nine.value == null) {
      setTen({value: null, tile: 10})
      setNine({value: ten.value, tile: 9})
    } else if (tile === 10 && eleven.value == null) {
      setTen({value: null, tile: 10})
      setEleven({value: ten.value, tile: 11})
    } else if (tile === 10 && fourteen.value == null) {
      setTen({value: null, tile: 10})
      setFourteen({value: ten.value, tile: 14})
    } else if (tile === 11 && seven.value == null) {
      setEleven({value: null, tile: 11})
      setSeven({value: eleven.value, tile: 7})
    } else if (tile === 11 && ten.value == null) {
      setEleven({value: null, tile: 11})
      setTen({value: eleven.value, tile: 10})
    } else if (tile === 11 && twelve.value == null) {
      setEleven({value: null, tile: 11})
      setTwelve({value: eleven.value, tile: 12})
    } else if (tile === 11 && fifteen.value == null) {
      setEleven({value: null, tile: 11})
      setFifteen({value: eleven.value, tile: 15})
    } else if (tile === 12 && eight.value == null) {
      setTwelve({value: null, tile: 12})
      setEight({value: twelve.value, tile: 8})
    } else if (tile === 12 && eleven.value == null) {
      setTwelve({value: null, tile: 12})
      setEleven({value: twelve.value, tile: 11})
    } else if (tile === 12 && sixteen.value == null) {
      setTwelve({value: null, tile: 12})
      setSixteen({value: twelve.value, tile: 16})
    } else if (tile === 13 && nine.value == null) {
      setThirteen({value: null, tile: 13})
      setNine({value: thirteen.value, tile: 9})
    } else if (tile === 13 && fourteen.value == null) {
      setThirteen({value: null, tile: 13})
      setFourteen({value: thirteen.value, tile: 14})
    } else if (tile === 14 && ten.value == null) {
      setFourteen({value: null, tile: 14})
      setTen({value: fourteen.value, tile: 10})
    } else if (tile === 14 && thirteen.value == null) {
      setFourteen({value: null, tile: 14})
      setThirteen({value: fourteen.value, tile: 13})
    } else if (tile === 14 && fifteen.value == null) {
      setFourteen({value: null, tile: 14})
      setFifteen({value: fourteen.value, tile: 15})
    } else if (tile === 15 && eleven.value == null) {
      setFifteen({value: null, tile: 15})
      setEleven({value: fifteen.value, tile: 11})
    } else if (tile === 15 && fourteen.value == null) {
      setFifteen({value: null, tile: 15})
      setFourteen({value: fifteen.value, tile: 14})
    } else if (tile === 15 && sixteen.value == null) {
      setFifteen({value: null, tile: 15})
      setSixteen({value: fifteen.value, tile: 16})
    } else if (tile === 16 && twelve.value == null) {
      setSixteen({value: null, tile: 16})
      setTwelve({value: sixteen.value, tile: 12})
    } else if (tile === 16 && fifteen.value == null) {
      setSixteen({value: null , tile: 16})
      setFifteen({value: sixteen.value , tile: 15})
    }
  }

    const shuffle = () => {
        let tiles = [ 1,  2,  3,  4, 
                      5,  6,  7,  8, 
                      9,  10, 11, 12, 
                      13, 14, 15, null ] 
       
        for(let i=0; i<500; i++) {
          let randomTile = tiles[Math.floor(Math.random()*17)]
          let index = tiles.indexOf(randomTile)

          if (randomTile) {
            if (tiles[index-4] == null && index-4 >= 0) { // Tile Above
              tiles[index-4] = randomTile
              tiles[index] = null
            } else if (tiles[index+4] == null && index+4 < 16) { // Tile Below
              tiles[index+4] = randomTile
              tiles[index] = null
            } else if (tiles[index+1] == null && index+1 < 16) { // Tile Right
              tiles[index+1] = randomTile
              tiles[index] = null
            } else if (tiles[index-1] == null && index-1 >= 0) { // Tile Left
              tiles[index-1] = randomTile
              tiles[index] = null
            }
          }
        }

        setOne({value: tiles[0], tile: 1})
        setTwo({value: tiles[1], tile: 2})
        setThree({value: tiles[2], tile: 3})
        setFour({value: tiles[3], tile: 4})
        setFive({value: tiles[4], tile: 5})
        setSix({value: tiles[5], tile: 6})
        setSeven({value: tiles[6], tile: 7})
        setEight({value: tiles[7], tile: 8})
        setNine({value: tiles[8], tile: 9})
        setTen({value: tiles[9], tile: 10})
        setEleven({value: tiles[10], tile: 11})
        setTwelve({value: tiles[11], tile: 12})
        setThirteen({value: tiles[12], tile: 13})
        setFourteen({value: tiles[13], tile: 14})
        setFifteen({value: tiles[14], tile: 15})
        setSixteen({value: tiles[15], tile: 16})        
    }


  
  function startTimer() {
      setTimeout(() => { 
        setTimer((timer + 1)) 
      }, 1000)
  }

  useEffect( () => {
    if (shuffled == false) {
      shuffle()
      setShuffled(true)
    }
    if (timerOn == true) {
      startTimer()
    }

    if(one.value === 1 && two.value === 2 && three.value === 3 && four.value === 4 
      && five.value === 5 && six.value === 6 && seven.value === 7 && eight.value === 8 
      && nine.value === 9 && ten.value === 10 && eleven.value === 11 && twelve.value === 12 
      && thirteen.value === 13 && fourteen.value === 14 && fifteen.value === 15 && sixteen.value === null && timer != 0 && timerOn == true) 
        { 
         setTimerOn(false)
         shuffle()
         Alert.alert(
                    "Well Done!", 
                    `You completed the puzzle in ${timer} seconds`,
                    [
                      {
                        onPress: () => {setTimer(0)}
                      }
                    ]
                    
                  )
        }
  }) 


  return (
  <View style={styles.page}>    
    <Text style={styles.timer}>{timer}</Text>
    <View style={styles.view}>
      <View style={styles.container}>
        <Pressable style={styles.tile} onPress={() => {moveTile(one.tile); setTimerOn(true)}}><Text style={styles.text}>{one.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(two.tile); setTimerOn(true)}}><Text style={styles.text}>{two.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(three.tile); setTimerOn(true)}}><Text style={styles.text}>{three.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(four.tile); setTimerOn(true)}}><Text style={styles.text}>{four.value}</Text></Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.tile} onPress={() => {moveTile(five.tile); setTimerOn(true)}}><Text style={styles.text}>{five.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(six.tile); setTimerOn(true)}}><Text style={styles.text}>{six.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(seven.tile); setTimerOn(true)}}><Text style={styles.text}>{seven.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(eight.tile); setTimerOn(true)}}><Text style={styles.text}>{eight.value}</Text></Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.tile} onPress={() => {moveTile(nine.tile); setTimerOn(true)}}><Text style={styles.text}>{nine.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(ten.tile); setTimerOn(true)}}><Text style={styles.text}>{ten.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(eleven.tile); setTimerOn(true)}}><Text style={styles.text}>{eleven.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(twelve.tile); setTimerOn(true)}}><Text style={styles.text}>{twelve.value}</Text></Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.tile} onPress={() => {moveTile(thirteen.tile); setTimerOn(true)}}><Text style={styles.text}>{thirteen.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(fourteen.tile); setTimerOn(true)}}><Text style={styles.text}>{fourteen.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(fifteen.tile); setTimerOn(true)}}><Text style={styles.text}>{fifteen.value}</Text></Pressable>
        <Pressable style={styles.tile} onPress={() => {moveTile(sixteen.tile); setTimerOn(true)}}><Text style={styles.text}>{sixteen.value}</Text></Pressable>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 30,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
    margin: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
  view: {
    paddingTop: 200,
  },
  ad: {
    marginTop: 80,
  }
});
