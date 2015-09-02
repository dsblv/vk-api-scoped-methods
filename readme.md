# vk-api-scoped-methods [![Build Status](https://travis-ci.org/dsblv/vk-api-scoped-methods.svg?branch=master)](https://travis-ci.org/dsblv/vk-api-scoped-methods)

> Hash of VK API (v5.37) [methods](http://vk.com/dev/methods) that require correct scope and their [scopes](http://vk.com/dev/permissions).


## Install

```
$ npm install --save vk-api-scoped-methods
```


## Usage

The module is just an instance of JavaScript `Object`, you can use it like this:

```js
var vkApiScopedMethods = require('vk-api-scoped-methods');

vkApiScopedMethods['newsfeed.get'];
//=> ['wall', 'friends']
```


## License

MIT © [Dmitriy Sobolev](http://vk.com/sobo13v)
