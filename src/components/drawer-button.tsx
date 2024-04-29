import { Pressable, PressableProps, Text, View } from 'react-native'

import { MaterialIcons } from "@expo/vector-icons"
import { colors } from '@/styles/color'

import clsx from 'clsx'

export type  IconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = PressableProps & {
    title: string,
    isFocused?: boolean,
    isDivider?: boolean,
    iconName: IconNameProps,
    notifications: number
}
export default function DrawerButton({title = "", notifications, iconName, isFocused, isDivider, ...rest}: DrawerButtonProps) {


  return ( 
    <Pressable
    className={clsx("py-2 w-full", {
      "border-b ml-10 border-gray-500": isDivider,
    })}
    {...rest}
  >
    <View
      className={clsx("flex-row items-center gap-4 h-14 px-6  w-full ", {
        "bg-orange-800 rounded-r-full": isFocused,
        "-ml-12": isDivider,
      })}
    >
      <MaterialIcons
        name={iconName}
        size={20}
        color={isFocused ? colors.orange[300] : colors.gray[400]}
      />
      <Text
        className={clsx("text-white font-subtitle text-base flex-1", {
          "text-orange-300": isFocused,
        })}
      >
        {title}
      </Text>

      <Text
        className={clsx("text-gray-400 text-sm font-body", {
          "text-orange-300": isFocused,
        })}
      >
        {notifications}
      </Text>
    </View>
  </Pressable>
  )
}
