import fs from 'fs';
import { OutputTarget } from '../Helpers/Summary';

export class HtmlReport implements OutputTarget {
  //constructor(parameters) {}

  print(report: string): void {
    let html = `
    <div>
    <h1>Analysis Output</h1>
    <div>${report}</div>
    </div>
    `;
    
    fs.writeFileSync('report.html', html);
  }
}
