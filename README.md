# Install the Ionic CLI

Before proceeding, make sure your computer has [Node.js](https://ionicframework.com/docs/reference/glossary#node) installed. See [these instructions](https://ionicframework.com/docs/intro/environment) to set up an environment for Ionic.

## Install the Ionic CLI with npm:



```CLI
npm install -g @ionic/cli
```

If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a change in package name.

```CLI
$ npm uninstall -g ionic
$ npm install -g @ionic/cli
```

## Note

The -g option means install globally. When packages are installed globally, EACCES permission errors can occur. Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](https://ionicframework.com/docs/developing/tips#resolving-permission-errors) for more information.

## Start an App

Create an Ionic app using one of the pre-made app templates, or a blank one to start fresh. The three most common starters are the blank starter, tabs starter, and sidemenu starter. Get started with the ionic start command:
```
ionic start
```
To learn more about starting Ionic apps, see the [Starting Guide](https://ionicframework.com/docs/developing/starting).

## Run the App

The majority of Ionic app development can be spent right in the browser using the ionic serve command:

```
$ cd myApp
$ ionic serve
```
There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the [Running an App Guide](https://ionicframework.com/docs/developing/previewing).
