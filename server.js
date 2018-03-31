// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");

var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();