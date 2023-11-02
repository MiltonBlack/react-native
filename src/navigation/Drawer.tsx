import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

type Props = {}

const Drawer = (props: Props) => {
  return (
    <View>
      <Text>Drawer</Text>
    </View>
  )
}

export default Drawer

const styles = StyleSheet.create({})