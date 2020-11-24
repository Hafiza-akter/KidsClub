import React, { Component } from 'react';
import { ImageBackground, View, Text, StatusBar } from 'react-native';
class App extends Component {

  render() {
    return (
      <View style={{flex:1,alignItems:'center',backgroundColor:'red'}}>

      <StatusBar hidden={true} />
        <ImageBackground style={{flex:1,width:'100%',height:'100%'}} source={require("../KidsClub/images/bckGif4.gif")}>
        <Text>----pppp----</Text>
       
        
         </ImageBackground>
      </View>
    );
  }
}

export default App;