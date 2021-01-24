### React Native Template

#### Features
- Typescript
- Eslint
- Jest
- Docker
- React Router Native
- Redux
- Storybook

#### Prereq
- Android Studio
- Android SDK
- OpenJDK8

Further instructions can be found here
> https://reactnative.dev/docs/environment-setup

#### Docker Setup
1. docker-compose up -d
#### Local Setup
1. git clone urlhere
2. choco install -y nodejs.install openjdk8
3. yarn
#### Android Specific
3. Update android/local.properties with the path to your Android SDK
4. yarn run:android
#### IOS Specific
3. Configure XCode (TODO)
4. yarn run:ios
#### src/ Project Structure
- actions
Redux actions go here. Actions our async and include the axios request
- components
Styled dumb components
- config
Configuration of different modules and default states
- interfaces
Application types and Interfaces
- locales
Language .json files used for i18n translations
- reducers
Redux reducers go here.
- request
Contains functions that handle network request logic
- router
Application routing
- screens
Navigatable screens
- styles
React-Native StyleSheet variables
- template
Container components

#### Component Structure
- Component
- - Component.tsx
- - Component.test.tsx
- - Component.stories.tsx
