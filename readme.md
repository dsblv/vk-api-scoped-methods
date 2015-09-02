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


## Related

- [vk-api-all-methods](https://github.com/dsblv/vk-api-all-methods) — List of all VK API methods
- [vk-api-open-methods](https://github.com/dsblv/vk-api-open-methods) — List of VK API methods that don't require authentication
- [vk-api-scopes](https://github.com/dsblv/vk-api-scopes) — Hash of VK API access permission codes


## License

MIT © [Dmitriy Sobolev](http://vk.com/sobo13v)
