import { createStackNavigator } from 'react-navigation';

import Menu from './components/Menu';
import Filter from './components/Filter';
import Detail from './components/Detail';

const App = createStackNavigator(
  {
    Menu: {
      screen: Menu,
    },
    Filter: {
      screen: Filter,
    },
    
    Detail: {
      screen: Detail,
    },
  },
  {
    initialRouteName: 'Menu',
    mode: 'modal ',
  }
);

export default App;
