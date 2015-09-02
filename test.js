'use strict';
var assert = require('assert');
var vkApiScopedMethods = require('./');

it('should export an object', function () {
	assert(vkApiScopedMethods instanceof Object, 'it really is an object');
});

it('should only contain arrays', function () {
	Object.keys(vkApiScopedMethods).forEach(function (key) {
		assert(vkApiScopedMethods[key] instanceof Array, 'yes, that\'s array');
	});
});
