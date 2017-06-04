"use strict";

// index to different views in website.

var app = angular.module("PortfolioApp", ['ngRoute']);

app.config( function ($routeProvider) {
  $routeProvider.
  when("/", {
    templateUrl: "index.html",
    controller: "HomeCtrl"
  }).
  when("/about", {
    templateUrl: "partials/about.html",
    controller: "HomePageCtrl"
  }).
  when("/blog", {
    templateUrl: "partials/blog.html",
    controller: "HomePageCtrl"
  }).
    when("/contact", {
    templateUrl: "partials/contact.html",
    controller: "UserCtrl",
    // resolve:{isAuth}
  }).
    when("/resume", {
    templateUrl: "partials/resume.html",
    controller: "UserCtrl"
  }).
    when("/projects", {
    templateUrl: "partials/projects.html",
    controller: "HomePageCtrl"
  }).otherwise("/");
});
