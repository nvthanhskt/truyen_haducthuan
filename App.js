import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TruyenCuoi from './TruyenCuoi';
import DangNhap from './DangNhap';
const AppNavigatorTab = createBottomTabNavigator({
  TruyenCuoi: {
    screen: TruyenCuoi,
    navigationOptions:{
      title:'Truyện cười'
    }
  },
  
  DangNhap: {
    screen: DangNhap,
    navigationOptions:{
      title:'Đăng nhập'
    }
  },
},
{
  // tabBarOptions:{

  // }
}
);
export default createAppContainer(AppNavigatorTab);