# boilerplate-rest-loopback

[![Build Status](https://travis-ci.org/basribasren/boilerplate-rest-loopback.svg?branch=master)](https://travis-ci.org/basribasren/boilerplate-rest-loopback) [![Build status](https://ci.appveyor.com/api/projects/status/0ac4faakwsphqua0?svg=true)](https://ci.appveyor.com/project/basribasren/boilerplate-rest-loopback) [![dependencies Status](https://david-dm.org/basribasren/boilerplate-rest-loopback/status.svg)](https://david-dm.org/basribasren/boilerplate-rest-loopback) ![GitHub All Releases](https://img.shields.io/github/downloads/basribasren/boilerplate-rest-loopback/total.svg) [![GitHub license](https://img.shields.io/github/license/basribasren/boilerplate-rest-loopback.svg)](https://github.com/basribasren/boilerplate-rest-loopback/blob/master/LICENSE) [![GitHub last commit](https://img.shields.io/github/last-commit/basribasren/boilerplate-rest-loopback.svg)](https://github.com/basribasren/boilerplate-rest-loopback/commits/master)

boilerplate for create rest api using loopback framework.

## Ecosystem

<!-- prettier-ignore -->
| Project | Status | Description |
|---------|--------|-------------|
| [loopback]          | [![loopback-status]][loopback-package] | LoopBack makes it easy to build modern applications that require complex integrations. |
| [loopback-cli]          | [![loopback-cli-status]][loopback-cli-package] | LoopBack CLI tool for creating projects, models and more. |

[loopback]: https://github.com/strongloop/loopback
[loopback-status]: https://img.shields.io/npm/v/loopback.svg
[loopback-package]: https://npmjs.com/package/loopback
[loopback-cli]: https://github.com/strongloop/loopback-cli
[loopback-cli-status]: https://img.shields.io/npm/v/loopback-cli.svg
[loopback-cli-package]: https://npmjs.com/package/loopback-cli

## Folder Structure

After creation, your project should look like this:

```
my-app/
├── node_modules/
├── client/
│   └── README.md
├── common/
│   └── model/
├── server/
│   └── boot/
│   └── component-config.json/
│   └── component-config.production.json/
│   └── config.json/
│   └── datasource.json/
│   └── middleware.development.json/
│   └── middleware.json/
│   └── middleware.production.json/
│   └── model-config.json/
│   └── server.js/
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .travis.yml
├── .yo-rc.json
├── .appveyor.yml
├── LICENSE
├── README.md
├── webpack.config.js
├── webpack.config.prod.js
├── package.json

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000/explorer](http://localhost:3000/explorer) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Runs the app in the production mode.<br>
Open [http://localhost:3000/api](http://localhost:3000/api) to view it in the browser.

### Loopback-CLI

For environments using [Node](https://nodejs.org/), the easiest way to handle this would be to install [loopback-cli](https://github.com/strongloop/loopback-cli) and let it handle the rest:

```sh
npm install -g loopback-cli
```

for create model using this command in project directory

```sh
lb model
```

for more documentation of loopback you can go to this site[loopback3](https://loopback.io/doc/en/lb3/index.html)

## Maintainers

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<img src="https://avatars0.githubusercontent.com/u/25193994?v=4" width="100px;"/><br /><sub><b>Basri Basren</b></sub>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/basribasren/boilerplate-rest-loopback/issues)
