import React, {Component} from 'react';
import { Navigator } from 'react-native';
import MainTabsView from './MainTabsView';
import EditView from './EditView';
import BroswerView from './BroswerView';

const ROUTES = {
  main_tabs_view: MainTabsView,
  broswer_view: BroswerView,
  edit_view: EditView
}

class App extends Component {
  renderScene = (route, navigator) => {
    let Scene = ROUTES[route.name];
    return <Scene {...route} navigator={navigator}/>;
  }
  configureScene = (route, routeStack) => {
    switch (route.name){
      case 'edit_view':
        return Navigator.SceneConfigs.FloatFromBottom;
      default:
        return Navigator.SceneConfigs.PushFromRight;
    }
  }
  render() {
    return <Navigator
      initialRoute={{name: 'main_tabs_view'}}
      renderScene={this.renderScene}
      configureScene={this.configureScene}/>
  }
}

export default App;
