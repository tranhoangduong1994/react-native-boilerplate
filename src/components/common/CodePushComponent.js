import React from 'react';
import codePush from 'react-native-code-push';

const codePushOptions = {
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
};

class CodePushComponent extends React.PureComponent {
  componentDidMount() {
    codePush.sync();
  }

  render() {
    return null;
  }
}

export default codePush(codePushOptions)(CodePushComponent);
