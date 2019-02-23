/**
 * @flow
 */

import type { Layout, Options } from 'react-native-navigation';
import NavigationUtilsImplementation from './NavigationUtilsImplementation';

class NavigationUtils {
  static push(layout: Layout, force: boolean = false) {
    return NavigationUtilsImplementation.getInstance().push(layout, force);
  }

  static mergeOptions(componentId: string, options: Options) {
    return NavigationUtilsImplementation.getInstance().mergeOptions(componentId, options);
  }
}

export default NavigationUtils;
