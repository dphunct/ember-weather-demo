window.Weather = Ember.Application.create();

Todos.Router.map(function () {
	this.resource('weather', { path: '/' });
});
