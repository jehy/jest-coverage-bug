'use strict';

module.exports = {
	coveragePathIgnorePatterns: ['/tests/'],
	coverageProvider: 'v8',
	testEnvironment: 'node',
	collectCoverage: true,
	coverageReporters: ['cobertura'],
	collectCoverageFrom: ["*.js"],
};
