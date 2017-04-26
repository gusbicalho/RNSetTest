import React from 'react'
import { View, Text } from 'react-native'
import CoreJsSet from 'core-js/library/fn/set'

export const nativeSet = new Set()
export const coreJsSet = new CoreJsSet()

export function SetTest(props) {
  return (
    <View>
      <Text>Set.size = {'' + nativeSet.size}</Text>
      <Text>CoreJsSet.size = {'' + coreJsSet.size}</Text>
    </View>
  )
}
