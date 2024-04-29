import DrawerContent from "@/components/drawer-content"
import { CustomOptions } from "@/types/navigation"
import { Drawer } from "expo-router/drawer"
export default function DrawerLayout() {
  return (
    <Drawer 
    defaultStatus="open"
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        width: "75%",
      }
    }}
    drawerContent={(props) => <DrawerContent {...props} />}
    >
        <Drawer.Screen name="(tabs)" 
        options={{ title: "Todas as caixas de entrada", iconName:"all-inbox", isDivider: true, notifications: 5 } as CustomOptions}
        />

        <Drawer.Screen name="inbox" 
        options={{ title: "Entrada", iconName:"inbox", isDivider: true, notifications: 3 } as CustomOptions}
        />    

        <Drawer.Screen name="stars" 
        options={{ title: "Estrelas", iconName:"star-outline", isDivider: false } as CustomOptions}
        />  

        <Drawer.Screen name="postponed" 
        options={{ title: "Adiados", iconName:"schedule", isDivider: false } as CustomOptions}
        />  

        <Drawer.Screen name="important" 
        options={{ title: "Importantes", iconName:"label-important-outline", isDivider: false } as CustomOptions}
        />   

        <Drawer.Screen name="send" 
        options={{ title: "Enviados", iconName:"send", isDivider: false } as CustomOptions}
        />     

        <Drawer.Screen name="programmed" 
        options={{ title: "Programados", iconName:"schedule-send", isDivider: false } as CustomOptions}
        /> 

        <Drawer.Screen name="exit-box" 
        options={{ title: "Caixa de saída", iconName:"outbox", isDivider: false } as CustomOptions}
        />   

        <Drawer.Screen name="sketch" 
        options={{ title: "Rascunho", iconName:"note", isDivider: false } as CustomOptions}
        />     

        <Drawer.Screen name="all-emails" 
        options={{ title: "Todos emails", iconName:"mail", isDivider: false } as CustomOptions}
        />  

        <Drawer.Screen name="span" 
        options={{ title: "Todos os spans", iconName:"info-outline", isDivider: false } as CustomOptions}
        />  

        <Drawer.Screen name="trash" 
        options={{ title: "Lixeira", iconName:"delete-outline", isDivider: false } as CustomOptions}
        />   

         <Drawer.Screen name="reads" 
        options={{ title: "Lidos", iconName:"label-important-outline", isDivider: false, sectionTitle: "Marcadores" } as CustomOptions}
        />    

        <Drawer.Screen name="general" 
        options={{ title: "Geral", iconName:"label-important-outline", isDivider: true, } as CustomOptions}
        />  

         <Drawer.Screen name="new-marker" 
        options={{ title: "Criar novo", iconName:"add", isDivider: true, } as CustomOptions}
        />   

        <Drawer.Screen name="config" 
        options={{ title: "Configurações", iconName:"settings", isDivider: false, } as CustomOptions}
        />  

        <Drawer.Screen name="feedback" 
        options={{ title: "Feedbacks", iconName:"feedback", isDivider: false, } as CustomOptions}
        />  

        <Drawer.Screen name="help" 
        options={{ title: "Ajuda", iconName:"help-outline", isDivider: false, } as CustomOptions}
        />                                                                                   



        </Drawer>

        
  )
}
