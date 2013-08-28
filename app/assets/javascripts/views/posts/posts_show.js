Journal.Views.PostsShow = Backbone.View.extend({
	events: {
		"click button#show-edit-form" : "handleShowEditForm",
		"submit form.edit-post" : "handleSubmitForm",
		"dblclick .title" : "handleTitleEdit",
		"dblclick .postbody" : "handleBodyEdit",
		"blur .post-input" : "handleSave"
	},

  template: JST['posts/show'],

	render: function() {
		var that = this;
		that.$el.html(that.template({ post: that.model }));
		return that;
	},

	handleShowEditForm: function() {
		$("#form-container").removeClass("hidden");
	},

	handleSubmitForm: function(event) {
		//console.log("Updating")
		event.preventDefault();
		var user_submitted_data = $(event.currentTarget).serializeJSON().post;
		user_submitted_data = {post: user_submitted_data};
		this.model.save(user_submitted_data, {
			success: function() { Backbone.history.navigate("/", {trigger: true}); },
			error: function() { alert("You suck"); }
		});
	},

	handleTitleEdit: function(event) {
		var that = this;
		$(event.currentTarget).html('<input class="post-input" type="text" id="title" value="' + that.model.get("title") + '">');

	},

	handleBodyEdit: function(event) {
		var that = this;
		$(event.currentTarget).html('<input class="post-input" type="text" id="body" value="' + that.model.get("body") + '">');
	},

	handleSave: function(event) {
		var that = this;
		var $me = $(event.currentTarget);
		var which_field = $me.attr("id").trim(); // "title" or "body"
		var new_val = $me.val();
		var argument = which_field === "title" ? {title: new_val} : {body: new_val};
		that.model.save(argument, {
			success: function() { $me.parent().html(new_val); },
			error: function() { alert("You suck"); }
		});

	}



});