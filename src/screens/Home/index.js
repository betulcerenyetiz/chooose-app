import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {chooosePage} from './chooose';
import {galleryPage} from './gallery';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'orange',
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        tabBarInactiveTintColor: 'orange',
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 18,
          marginBottom: 10,
        },
      }}>
      <Tab.Screen name="chooose" component={chooosePage} />
      <Tab.Screen name="gallery" component={galleryPage} />
    </Tab.Navigator>
  );
};

export {Home};
