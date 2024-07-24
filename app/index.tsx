import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs'
// import { Routes } from '../src/routes'
import { Home } from '../src/pages/home'
import { Passwords } from '../src/pages/passwords'

const Tab = createBottomTabNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    
  )
}

 function Routes(){
  return(
      <Tab.Navigator>
          <Tab.Screen
              name="home"
              component={Home}
          />

          <Tab.Screen
              name="passwords"
              component={Passwords}
          />
      </Tab.Navigator>
  )
}