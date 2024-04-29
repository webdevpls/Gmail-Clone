import { colors } from "@/styles/color";
import { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

type InputProps = {
  children: ReactNode
}

 function Input({children}: InputProps) {
  return (
  <View className="w-full bg-gray-800 h-14 rounded-lg p-4 flex-row items-center gap-4">
    {children}
  </View>
  )
    
  
}

function InputField({...rest}: TextInputProps){
  return ( 
  <TextInput className="flex-1 font-normal text-base text-white" {...rest}
  cursorColor={colors.blue[600]}
  placeholderTextColor={colors.gray[400]}/>
  )
}

Input.Field = InputField

export { Input } 