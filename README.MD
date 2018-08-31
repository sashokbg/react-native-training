# How it works

https://students.lereacteur.io/1w-react-native/React-Native/01/00-Intro_React_Native

- Interpreted JS code
- Native code
- Compiles to Objective C / Java
- Dynamically generated views


# ES6

Fat arrow / auto binding

```
const myFunc = (params) => {};
```

Spread operator

```
var obj = {...otherObj};
```

Destructuring ex:

```
import { Component } from 'react';
```

## Development

### Metro Bundler

```
npm start
```

- Allows you to bundle the resources and automatically send them to the application

### react-native run-android

Installs the application on the remote device

### react native init

Downloads the latest version of react and initializes the project

### adb

Make your device listen for incomming connections:

```
adb reverse tcp:8081 tcp:8081
```

Kill an existing bundler that is not working:

```
lsof -i:8081
```

# Perofmance

Each parent component will call render() on its children

To avoid reloading every component each time a state changes we need to implement shouldComponentUpdate or use PureCOmponent


