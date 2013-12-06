App.response = DS.Model.extend({
	version: DS.attr('string'),
	termsofService: DS.attr('string'),
	features: DS.belongsTo('features')
});

App.feature = DS.Model.extend({
	forecast: DS.attr('int')
});

App.Adapter.map('response', {
  features: { embedded: 'always' }
});

App.forecast = DS.Model.extend({
	txtForecast: DS.belongsTo('txtForecast'),
	simpleforecast: DS.belongsTo('simpleforecast')
});

App.txtForecast = DS.Model.extend({
	forecast: DS.belongsTo('forecast'),
	date: DS.attr('date'),
	forecastday: DS.hasMany('tForecastday')
});

App.Adapter.map('txtForecast', {
  forecastday: { embedded: 'always' }
});

App.tForecastday = DS.Model.extend({
	period: DS.attr('int'),
	icon: DS.attr('string'),
	icon_url: DS.attr('string'),
	title: DS.attr('string'),
	fcttext: DS.attr('string'),
	fcttextMetric: DS.attr('string'),
	pop: DS.attr('int')
});

App.simpleforecast = DS.Model.extend({
	forecastday: DS.hasMany('sForecastday')
});

App.Adapter.map('simpleforecast', {
  forecastday: { embedded: 'always' }
});

App.sForecastday = DS.Model.extend({
	date: DS.belongsTo('aDate'),
	period: DS.attr('int'),
	high: DS.belongsTo('high'),
	low: DS.belongsTo('low'),
	conditions: DS.attr('string'),
	icon: DS.attr('string'),
	iconUrl: DS.attr('string'),
	skyicon: DS.attr('string'),
	pop: DS.attr('int')
});

App.aDate = DS.Model.extend({
	epoch: DS.attr('string'),
	pretty: DS.attr('string'),
	day: DS.attr('int'),
	month: DS.attr('int'),
	year: DS.attr('int'),
	yday: DS.attr('int'),
	hour: DS.attr('int'),
	min: DS.attr('string'),
	sec: DS.attr('int'),
	isdst: DS.attr('string'),
	monthname: DS.attr('string'),
	weekday_short: DS.attr('string'),
	weekday: DS.attr('string'),
	ampm: DS.attr('string'),
	tz_short: DS.attr('string'),
	tz_long: DS.attr('string')
});

App.low = DS.Model.extend({
	fahrenheit: DS.attr('string'),
	celsius: DS.attr('string')
});

App.high = DS.Model.extend({
	fahrenheit: DS.attr('string'),
	celsius: DS.attr('string')
});

App.Adapter.map('sForecastday', {
	date: {embedded: 'always'},
	high: {embedded: 'always'},
	low: {embedded: 'always'}
});


