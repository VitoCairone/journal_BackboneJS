Journal.Views.PostsIndex = Backbone.View.extend({
	events: {
		"click button.remove": "handleRemove"
	},

	initialize: function () {
		var that = this;

		var renderCallback = that.render.bind(that);
		var renderSidebarCallback = that.renderSidebar.bind(that);

		that.listenTo(that.collection, "remove", renderCallback);
		that.listenTo(that.collection, "add", renderCallback);
		that.listenTo(that.collection, "change", renderSidebarCallback);
		that.listenTo(that.collection, "reset", renderCallback);

	},

  template: JST['posts/index'],

	render: function() {
		var that = this;
		that.$el.html(that.template({ posts: that.collection }));
		console.log(that.$el);
		$("#content").empty();
		return that;
	},

	renderSidebar: function() {
		var that = this;
		this.$el.html(that.template({ posts: that.collection }));

		return that;
	},

	handleRemove: function(event) {
		console.log("called handleRemove")
		event.preventDefault();
		var model_id = $(event.currentTarget).attr("data-id");
		var delete_post = this.collection.get(model_id);
		delete_post.destroy();
	}

});
