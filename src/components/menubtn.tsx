import { Pressable } from 'react-native'


import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/color'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
export default function Menubtn() {

  const navigation = useNavigation()
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer)

  return (
   <TouchableOpacity onPress={toggleMenu}>
      <MaterialIcons name='menu' size={22} color={colors.white}/>
   </TouchableOpacity>
  )
}
