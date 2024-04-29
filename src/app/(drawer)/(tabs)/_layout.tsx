import { colors } from '@/styles/color'
import { Tabs } from 'expo-router'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'


export default function Tablayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: colors.gray[600],
            borderTopWidth: 0,
            minHeight: 64,
        },
        tabBarItemStyle: {
            paddingBottom: 14,
            paddingTop: 14
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.orange[500],
        tabBarInactiveTintColor: colors.gray[500]


    }}>
        <Tabs.Screen name='index'  options={{
            tabBarIcon: ({size, color}) => (
                <MaterialIcons name='home' size={size} color={color}/>
            )
        }}/>
        <Tabs.Screen name='chat'   options={{
            tabBarIcon: ({size, color}) => (
                <MaterialIcons name='chat' size={size} color={color}/>
            )
        }}/>
        <Tabs.Screen name='meeting'   options={{
            tabBarIcon: ({size, color}) => (
                <MaterialIcons name='videocam' size={size} color={color}/>
            )
        }}/>
    </Tabs>
  )
}
