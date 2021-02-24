import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList208861Navigator from '../features/ArticleList208861/navigator';
import ArticleList208860Navigator from '../features/ArticleList208860/navigator';
import ArticleList208859Navigator from '../features/ArticleList208859/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList208861: { screen: ArticleList208861Navigator },
ArticleList208860: { screen: ArticleList208860Navigator },
ArticleList208859: { screen: ArticleList208859Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
