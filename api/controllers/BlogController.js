/**
 * BlogController
 *
 * @description :: Server-side logic for managing Blogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res, next) {
		Blog.find()
		.exec(function(err, result) {
			return res.view('blog/list', {
				data: result
			});
		});
	},
	new: function(req, res, next) {
		return res.view('blog/create', {
			title: 'Create title post'
		});
	},
	create: function(req, res, next) {
		Blog.create(req.body)
		.exec(function(result) {
			return res.redirect('/posts');
		});
	}
};

