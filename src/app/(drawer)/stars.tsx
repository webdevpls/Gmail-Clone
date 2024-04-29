import Avatar from '@/components/avatar'
import Email from '@/components/email'
import { Input } from '@/components/input'
import Menubtn from '@/components/menubtn'
import React from 'react'

import { FlatList } from 'react-native-gesture-handler'


import { Text, View } from 'react-native'
import { EMAILS } from '@/utils/emails'
import FloatButton from '@/components/float-button'
import { STARS } from '@/utils/stars'

function Stars() {
  return (
    <View className='flex-1 bg-gray-900 pt-14 px-4 p-y2'>
      <Input>
      <Menubtn/>
      <Input.Field placeholder='Pesquisar no email'/>
      <Avatar source={{ uri: "https://github.com/webdevpls.png"}} size='small'/>
      </Input>

          
      <FlatList
      data={STARS}
      keyExtractor={item => item.id}
      renderItem={({item }) => <Email data={item} />}
      contentContainerClassName='gap-6'
      ListHeaderComponent={() => <Text className='uppercase text-gray-400 text-sm font-subtitle mt-6'>
        Marcados com estrela
      </Text>}
      />

      <FloatButton icon='edit'/>
    </View>
  )
}

export default Stars
