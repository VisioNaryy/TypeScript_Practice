import { WinsAnalysis } from '../Analysis/WinsAnalysis';
import { MatchData } from '../MatchData';
import { HtmlReport } from '../Reports/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class FullReport {
  //Example for not creating an instance of these classes in the index.ts
  static winsAnalysisWithHtmlReport(team: string): FullReport {
    return new FullReport(new WinsAnalysis(team), new HtmlReport());
  }
  /**
   *
   */
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    let output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
