// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import {StatusBar, ScrollView, Text} from "react-native";
import React from "react";
import Boat from './components/Boats.js';

const App = () => {
    return (
        <ScrollView>
            <StatusBar hidden={true}/>
            <Text>GetABoat - FOR SALE ! </Text>
            <Boat name= "Sea Ray 500 Sundancer"
                  description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                  icon_name="sailboat"
                  picture={require("./img/sea_ray.jpg")}/>
            <Boat name= "Four Winns Horizon 180"
                  description = "A sporty look and refined details truly set the Horizon 180 above all others."
                  icon_name="wind"
                  picture={require("./img/four_winns.jpg")}/>
            <Boat name= "Flipper 640 ST"
                  description = "A modern take on the classic, traditional hardtop and perfect for a family picnic."
                  icon_name="explosion"
                  picture={require("./img/flipper.jpg")}/>
            <Boat name= "Princess V48"
                  description = "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                  icon_name="anchor"
                  picture={require("./img/princess.jpg")}/>
            <Boat name= "Bayliner 175 Bowrider"
                  description = "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                  icon_name="cannabis"
                  picture={require("./img/bayliner.jpg")}/>
            <Boat name= "Fairline Targa 47"
                  description = "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                  icon_name="chess-queen"
                  picture={require("./img/fairline.jpg")}/>
        </ScrollView>
    );
}

export default App;

