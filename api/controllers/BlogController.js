/**
 * BlogController
 *
 * @description :: Server-side logic for managing Blogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res, next) {
		Blog.find()
		.exec(function(result) {
			return res.view('blog/list', {
				data: result
			});
		});
	}
};

