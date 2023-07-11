

import React from 'react';
import tw from 'twrnc';
import { SafeAreaView, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';



function App(): JSX.Element {


  return (
    <SafeAreaView style={tw`bg-white flex`}>
      <View style={tw`bg-slate-800`}>

      <HomeScreen/>

      </View>
    </SafeAreaView>
  );
}



export default App;
