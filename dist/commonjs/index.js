'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.configure = configure;

var _authFilter = require('./authFilter');

var _baseConfig = require('./baseConfig');

var _authService = require('./authService');

Object.defineProperty(exports, 'AuthService', {
	enumerable: true,
	get: function get() {
		return _authService.AuthService;
	}
});

var _authorizeStep = require('./authorizeStep');

Object.defineProperty(exports, 'AuthorizeStep', {
	enumerable: true,
	get: function get() {
		return _authorizeStep.AuthorizeStep;
	}
});

function configure(aurelia, configCallback) {
	var version = 'versie 1.0.10';

	var authFilterValueConverter = new _authFilter.AuthFilterValueConverter();;

	aurelia.container.registerSingleton(_authFilter.AuthFilterValueConverter, authFilterValueConverter);
	var baseConfig = aurelia.container.get(_baseConfig.BaseConfig);
	if (configCallback !== undefined && typeof configCallback === 'function') {
		configCallback(baseConfig);
	}
}

;