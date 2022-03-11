
import IGCParser from 'igc-parser';
import { solver, scoringRules } from 'igc-xc-score';


let runningProcess;

function loop(onsuccess, stopatfirsttry) {
  const s = this.next();
  if (!stopatfirsttry && !s.done) {
    console.log(s);
    runningProcess = window.requestIdleCallback(loop.bind(this, onsuccess));
  } else {
    runningProcess = undefined;
    onsuccess(s);
  }
}

export function score(igccont, onsuccess, stopatfirsttry) {
  if (typeof onsuccess !== 'function') {
    return;
  }
  stopatfirsttry = stopatfirsttry === true;
  if (runningProcess) {
    window.cancelIdleCallback(runningProcess);
    runningProcess = undefined;
  }

  const flight = IGCParser.parse(igccont, { lenient: true });

  window.requestIdleCallback(() => {
    const it = solver(flight, scoringRules['FFVL'], {
        maxcycle: 1000,
        trim: true
    });
    loop.call(it, onsuccess, stopatfirsttry);
  });
}
