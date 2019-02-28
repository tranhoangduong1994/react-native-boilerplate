# react-native-boilerplate

A boilerplate for React Native projects, with these following libraries integrated:

Development libraries: 
- [x] React native navigation v2: https://github.com/wix/react-native-navigation
- [x] React native localize: https://github.com/react-native-community/react-native-localize
- [x] Redux: https://github.com/reduxjs/redux
- [x] Redux saga: https://github.com/redux-saga/redux-saga
- [x] Redux form: https://github.com/erikras/redux-form
- [x] React theme: https://github.com/tranhoangduong1994/react-theme
- [x] React native codepush: https://github.com/Microsoft/react-native-code-push

Testing libraries:
- [x] Mocha: https://github.com/mochajs/mocha
- [x] Detox: https://github.com/wix/Detox

Other supporting libraries: 
- [x] Babel
- [x] Flow 

To start off the mock API server:
1. Install json-server
```
yarn global add json-server
```
2. Run this command from the project root folder (which contains the `db.json` file)
```
json-server --watch db.json
```
