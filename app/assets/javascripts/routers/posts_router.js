Journal.Routers.Posts = Backbone.Router.extend({
	routes: {
		"": "indexPosts",
		"posts/new" : "newPost",
		"posts/:id" : "showPost"
	},

	initialize: function (options) {
		this.posts = options.posts;
	},

	indexPosts: function () {
		var postsView = new Journal.Views.PostsIndex({
			collection: this.posts
		});

		$("#sidebar").html(postsView.render().$el);
	},

	showPost: function(id) {
		var showPost = new Journal.Views.PostsShow({
			model: this.posts.get(id)
		});

		$("#content").html(showPost.render().$el);
	},

	newPost: function() {
		var newPostView = new Journal.Views.PostsNew({
			collection: this.posts
		});

		$("#content").html(newPostView.render().$el);
	}

});
