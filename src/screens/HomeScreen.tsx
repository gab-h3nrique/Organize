import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import Tabs from '../components/navigation/Tabs';
import ScreenLayout from '../components/ScreenLayout';
import SvgComponent from '../components/svg/SvgComponent';

const HomeScreen = () => {

  const [screen, setScreen] = useState<string>("")

  return (

    <>
      <ScreenLayout>

        <View>
          <Text>aaaa</Text>
          
        </View>

      </ScreenLayout>

      <Tabs screen={"initial"}/>
    </>

  )
}

export default HomeScreen
