import { OutputTarget } from '../Helpers/Summary';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
