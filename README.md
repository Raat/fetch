# fetch

Simple example of a fetch request with ES7 Async/Await

## Getting Started

This project aims to use only pure javascript for the frontend. It is compiled with webpack and the babel-loader plugin to es2015. 

### Prerequisites

Make sure that your node and npm version are up to date.

Install the latest npm version
```
npm install npm@latest -g

```

Install the latest node version
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

For the server that will serve a simple api endpoint you need to have php installed
For mac this can be done by using brew

```
brew tap homebrew/homebrew-php
```

And you will need to install composer https://getcomposer.org/doc/00-intro.md


### Installing

Clone the project

```
git clone git@github.com:Raat/fetch.git
```

install npm dependencies and compile the javascript

```
cd fetch
npm i
npm run build
```

install composer packages

```
cd server
composer install
```

Now start the api with the php web server on port 8003
```
php -S localhost:8003
```

navigate to the [html file](https://github.com/Raat/fetch/blob/master/public/index.html) in the public folder and open it in your browser.


* [slim](https://www.slimframework.com/) - A micro framework for php
* [babel-loader](https://github.com/babel/babel-loader) - This package allows transpiling JavaScript files using Babel and webpack.
* [webpack](https://webpack.js.org/) - Bundel your scripts
* [xo-linter](https://github.com/sindresorhus/xo) - Simple js linter
* [stylelint](https://stylelint.io/) - Simple style linter




