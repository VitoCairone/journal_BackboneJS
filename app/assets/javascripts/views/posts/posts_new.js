Journal.Views.PostsNew = Backbone.View.extend({

	events: {
		"submit form.new-post": "handleSubmit"
	},

  template: JST['posts/new'],

	render: function() {
		var that = this;
		that.$el.html(that.template({}));
		return that;
	},

	handleSubmit: function(event) {
		event.preventDefault();
		var user_submitted_data = $(event.currentTarget).serializeJSON().post;
		user_submitted_data = {post: user_submitted_data};
		this.collection.create(user_submitted_data);
		// this.$el.empty();

		Backbone.history.navigate("/", { trigger: true });
	}

});
