require("angular");
require("angular-route");
require("./style.styl");

var app = angular.module('myApp', ['ngRoute']);

//TODO: Can we import pug without having to write .pug? 
//TODO: If so, how? leaving it off seems to make web-pack take index.js instead.
//TODO: Follow-up; shouldn't the controller save/export its template?  If so, does
//TODO: the route actually need the template here?  How did we do this in Insight?
app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    template : require('./pages/home/home.pug'),
    controller  : 'HomeController'
  })

  .when('/blog', {
    template : require('./pages/blog/blog.pug'),
    controller  : 'BlogController'
  })

  .when('/about', {
    template : require('./pages/about/about.pug'),
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', require("./pages/home"));

app.controller('BlogController', require("./pages/blog"))

app.controller('AboutController', require("./pages/about"))

var x = require("./main.pug");
document.write(x);