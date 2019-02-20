/**
 * @flow
 */

import type { Layout, Options } from 'react-native-navigation';
import NavigationUtilsImplementation from './NavigationUtilsImplementation';

class NavigationUtils {
  static showLeftMenuScreen(layout: Layout) {
    return NavigationUtilsImplementation.getInstance().showLeftMenuScreen(layout);
  }

  static push(componentId: string, layout: Layout) {
    return NavigationUtilsImplementation.getInstance().push(componentId, layout);
  }

  static mergeOptions(componentId: string, options: Options) {
    return NavigationUtilsImplementation.getInstance().mergeOptions(componentId, options);
  }
}

export default NavigationUtils;
