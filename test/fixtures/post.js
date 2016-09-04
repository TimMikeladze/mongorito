'use strict';

/**
 * Dependencies
 */

const chance = require('chance')();

const commentFixture = require('./comment');


/**
 * Expose post fixture
 */

module.exports = function postFixture (attrs) {
	let n = 2;
	let comments = [];

	while (n--) {
		comments.push(commentFixture());
	}

	let post = {
		title: chance.word(),
		body: chance.word(),
		author: {
			name: chance.word()
		},
		comments: comments,
		views: 0
	};

	for (let key in attrs) {
		post[key] = attrs[key];
	}

	return post;
};
