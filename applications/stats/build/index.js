"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./Helpers/CsvFileReader");
var Summary_1 = require("./Helpers/Summary");
var MatchReader_1 = require("./MatchReader");
var WinsAnalysis_1 = require("./Objects/WinsAnalysis");
var ConsoleReport_1 = require("./Reports/ConsoleReport");
var HtmlReport_1 = require("./Reports/HtmlReport");
var csvFileReader = new CsvFileReader_1.CsvFileReader('098 football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//analysises
var winsAnalysis = new WinsAnalysis_1.WinsAnalysis('Liverpool');
//reports
var consoleReport = new ConsoleReport_1.ConsoleReport();
var htmlReport = new HtmlReport_1.HtmlReport();
var fullReport = new Summary_1.FullReport(winsAnalysis, htmlReport);
fullReport.buildAndPrintReport(matchReader.matches);
