
import IGCParser from 'igc-parser';
import { solver, scoringRules } from 'igc-xc-score';


let runningProcess;
let tend = null;

function loop(onsuccess) {
  const s = this.next();
  if (!s.done && Date.now() < tend) {
    runningProcess = window.requestIdleCallback(loop.bind(this, onsuccess));
  } else {
    runningProcess = undefined;
    onsuccess(s);
  }
}

export const xcScoringRules = scoringRules;

export function score(igccont, onsuccess, scoringrule, maxtime) {
  if (typeof onsuccess !== 'function') {
    return;
  }
  if (scoringRules && !scoringRules.hasOwnProperty(scoringrule)) {
    scoringrule = 'FFVL';//Object.keys(scoringRules)[0];
  }
  if (runningProcess) {
    window.cancelIdleCallback(runningProcess);
    runningProcess = undefined;
  }

  const flight = IGCParser.parse(igccont, { lenient: true });

  window.requestIdleCallback(() => {
    let it = solver(flight, scoringRules[scoringrule], {maxcycle: 1000});
	if (typeof maxtime !== 'number') {
	  maxtime = 10;
	}
	tend = Date.now() + maxtime * 1e3;
    loop.call(it, onsuccess);
  });
}
