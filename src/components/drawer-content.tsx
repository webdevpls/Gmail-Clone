import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import DrawerButton from '@/components/drawer-button'

import { MaterialIcons } from "@expo/vector-icons"
import { colors } from '@/styles/color'
import { CustomOptions } from '@/types/navigation'


export default function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className='flex-1 bg-gray-600 overflow-hidden'>
        <View className='mt-20 w-full border-b pb-6 border-gray-500'>
            <Image  source={require("@/assets/logo.png")} className='w-28 ml-5' resizeMode='contain'/>
        </View>

        <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 42}}
        >

            <View className='mt-2'>
            {drawerProps.state.routes.map((route, index) => {
                const isFocused = drawerProps.state.index === index
                const options = drawerProps.descriptors[route.key].options as CustomOptions

                if(options.title === undefined){
                    return
                }

                const onPress = () => {
                  const event = drawerProps.navigation.emit({
                    type: 'drawerItemPress',
                    canPreventDefault: true,
                    target: route.key
                  })

                  if(!isFocused && !event?.defaultPrevented){
                    drawerProps.navigation.navigate(route.name, route.params)
                  } 
                }

                


                return (
                    <View key={route.key}> 
                    {
                      options.sectionTitle && (
                        <Text className='text-gray-400 text-sm font-heading uppercase ml-4 mt-6'>
                          {options.sectionTitle}
                        </Text>
                      )
                    }
                      <DrawerButton 
                      onPress={onPress}
                      title={options.title}
                      iconName={options.iconName}
                      isDivider={options.isDivider}
                      isFocused={isFocused}
                      notifications={options.notifications}
                      
                      />
                    </View>
                    
                )
            })}
            </View>
        </ScrollView>
    </View>
  )
}
