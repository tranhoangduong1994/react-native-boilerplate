/**
 * @flow
 */

import type { Layout, Options } from 'react-native-navigation';
import { Navigation } from 'react-native-navigation';

class NavigationUtilsImplementation {
  stackedLeftMenuComponentNames = [];

  static instance: NavigationUtilsImplementation = null;

  static getInstance() {
    if (!NavigationUtilsImplementation.instance) {
      NavigationUtilsImplementation.instance = new NavigationUtilsImplementation();
    }
    return NavigationUtilsImplementation.instance;
  }

  constructor() {
    Navigation.events().registerComponentDidDisappearListener(
      ({ componentName }): String => {
        if (this.isTopStackComponentNamed(componentName)) {
          this.stackedLeftMenuComponentNames.pop();
          if (this.stackedLeftMenuComponentNames.length === 0) {
            Navigation.mergeOptions('centerStack', {
              popGesture: true
            });
          }
        }
      }
    );
  }

  async showLeftMenuScreen(layout: Layout) {
    Navigation.mergeOptions('mainSideMenu', {
      sideMenu: {
        left: {
          visible: false
        }
      }
    });

    const { name } = layout.component;

    if (this.isTopStackComponentNamed(name)) {
      return null;
    }

    this.stackedLeftMenuComponentNames.push(name);
    Navigation.mergeOptions('centerStack', {
      popGesture: false
    });
    return Navigation.push('centerStack', layout);
  }

  push(componentId: string, layout: Layout) {
    return Navigation.push(componentId, layout);
  }

  mergeOptions(componentId: string, options: Options) {
    return Navigation.mergeOptions(componentId, options);
  }

  isTopStackComponentNamed(name: String) {
    return (
      this.stackedLeftMenuComponentNames[this.stackedLeftMenuComponentNames.length - 1] === name
    );
  }
}

export default NavigationUtilsImplementation;
