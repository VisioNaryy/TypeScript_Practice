"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullReport = void 0;
var FullReport = /** @class */ (function () {
    /**
     *
     */
    function FullReport(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    FullReport.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return FullReport;
}());
exports.FullReport = FullReport;
