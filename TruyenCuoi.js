import React from 'react';
import { FlatList, ActivityIndicator,TouchableHighlight, Text, View, Image } from 'react-native';

import ChiTiet from './ChiTiet';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class TruyenCuoi extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  static navigationOptions = {
    title: 'Tuyện cười',
  };
  componentDidMount() {
    return fetch('http://10.0.3.3/TruyenCuoi/select.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <TouchableHighlight  onPress={()=>this.props.navigation.navigate("ChiTiet",{id:item.id})}>
              <View style={{ flexDirection: 'row' ,margin:10,borderBottomWidth:1,borderBottomColor:'black'}}>
                <Image source={{ uri: item.anh }} style={{ width: 100, height: 100 }} />
                <Text style={{marginLeft:10, width:220,height:40}}>{item.tieude}</Text>

              </View>
            </TouchableHighlight>
          }
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
const AppTruyenCuoi =createStackNavigator({
  TruyenCuoi:{
    screen:TruyenCuoi
  },
  ChiTiet:{
    screen:ChiTiet
  }
})

export default createAppContainer(AppTruyenCuoi);
