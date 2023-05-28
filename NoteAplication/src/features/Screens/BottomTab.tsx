import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import MainTabContainer from '../../navigation/sence/TabScenes'
import HomeScreen from './HomeScreen'
import StyledTabBar from '../../navigation/component/StyledTabBar'

const BottomTab = () => {
  return ( 
        <MainTabContainer /> 
  )
}

export default BottomTab

const styles = StyleSheet.create({})