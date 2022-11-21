import { FullReport } from './Helpers/Summary';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './Analysis/WinsAnalysis';
import { ConsoleReport } from './Reports/ConsoleReport';
import { HtmlReport } from './Reports/HtmlReport';

// let csvFileReader = new CsvFileReader('098 football.csv');

// let matchReader = new MatchReader(csvFileReader);
// matchReader.load();

let matchReader = MatchReader.fromCsv('098 football.csv');

//analysis
let winsAnalysis = new WinsAnalysis('Liverpool');

//reports
let consoleReport = new ConsoleReport();
let htmlReport = new HtmlReport();

let fullReport = new FullReport(winsAnalysis, htmlReport);
fullReport.buildAndPrintReport(matchReader.matches);

// NOTE: build-in analysis and report in FullReport-class
let fullReport2 = FullReport.winsAnalysisWithHtmlReport('Liverpool');

fullReport2.buildAndPrintReport(matchReader.matches);
