import React, { Component } from 'react';
import { ImageBackground, View, Text, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';

class App extends Component {

  

  render() {
    return (
      <View style={{flex:100,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
       <Video
          source={require('../KidsClub/images/rr.mp4')}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
          <View style={{width:'20%'}}>
              <TouchableOpacity style={styles.button1} onPress={()=>{alert("you clicked me")}}>
                <Image style={{width:150,height:150}} source={require("../KidsClub/images/btn6.png")}/>
            </TouchableOpacity>
          </View>
          <View style={{width:'20%'}}>
              <TouchableOpacity style={styles.button1} onPress={()=>{alert("you clicked me")}}>
                <Image style={{width:150,height:150,marginTop:'70%'}} source={require("../KidsClub/images/btn3.png")}/>
            </TouchableOpacity>
          </View>
          <View style={{width:'20%'}}>
              <TouchableOpacity style={styles.button1} onPress={()=>{alert("you clicked me")}}>
                <Image style={{width:150,height:150}} source={require("../KidsClub/images/btn4.png")}/>
            </TouchableOpacity>
          </View>
   
      <StatusBar hidden={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button1:{
    // backgroundColor: '#859a9b',
    // borderRadius: 2,
    // padding: 5,
    // marginTop: 50,
    // shadowColor: '#303838',
    // shadowOffset: { width: 10, height: 5 },
    // shadowRadius: 10,
    // shadowOpacity: 0.35,
    
  }
});

export default App;