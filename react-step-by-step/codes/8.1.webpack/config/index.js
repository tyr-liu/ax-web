/**
 * Created by rain on 2016/3/2.
 */
var $ = require('jquery');
var style = require('./css/main.css');
var image = require('./img/logo.png');

var title = $("#title");
title.text("Hello world.");
var img = $("#img");
img.attr("src", image);