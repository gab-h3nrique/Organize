import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const ScreenLayout = ({children}:any) => {
  return (

    <View style={tw`bg-slate-800 w-full h-[91%]`}>
        
        {children}

    </View>

  )
}

export default ScreenLayout