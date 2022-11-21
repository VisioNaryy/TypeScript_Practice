import { Analyzer } from '../Helpers/Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

// NOTE: this is just an example of analysis - class, we might as well define AverageGoalAnalysis class or smth else

export class WinsAnalysis implements Analyzer {
  /**
   *
   */
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins: number = 0;
    for (let match of matches) {
      if (match[1] == `${this.team}` && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] == `${this.team}` &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
