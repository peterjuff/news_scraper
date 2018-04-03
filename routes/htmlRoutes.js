//require express & setup Router
var express = require("express");
var router = express.Router();

//require article
var Article = require("../models/article.js")

var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");

var db = require("../models");