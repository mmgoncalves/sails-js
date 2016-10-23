/**
 * PersonController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		res.view('person/index', { title: 'Mateus'});
	},

	name: function(req, res) {
		res.view('person/index', { title: req.params.name });
	}
};

