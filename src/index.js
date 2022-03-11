
import IGCParser from 'igc-parser';
import { solver, scoringRules } from 'igc-xc-score';

export function score(igccont) {
  console.log('scoring start');
  const flight = IGCParser.parse(igccont, { lenient: true });
  const best = solver(flight, scoringRules['FFVL'], {
    quiet: true,
    trim: true
  }).next().value;
  console.log('scoring end');
  return best;
}
