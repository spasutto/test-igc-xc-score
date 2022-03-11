
import IGCParser from 'igc-parser';
import { solver, scoringRules } from 'igc-xc-score';


let runningProcess;

export function score(igccont, onsuccess, scoringrule) {
  if (typeof onsuccess !== 'function') {
    return;
  }
  if (!scoringRules.hasOwnProperty(scoringrule)) {
    scoringrule = 'FFVL';//Object.keys(scoringRules)[0];
  }
  if (runningProcess) {
    window.cancelIdleCallback(runningProcess);
    runningProcess = undefined;
  }

  const flight = IGCParser.parse(igccont, { lenient: true });

  window.requestIdleCallback(() => {
    let it = solver(flight, scoringRules[scoringrule], {
      maxcycle: 1000,
      trim: true
    }).next();
    runningProcess = undefined;
    onsuccess(it);
  });
}
