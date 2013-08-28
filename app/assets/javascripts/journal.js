window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var data = JSON.parse($("#bootstrap_data").html());
		new Journal.Routers.Posts({
			posts: new Journal.Collections.Posts(data)
		});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize();
});
