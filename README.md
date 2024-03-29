# Test igc-xc-score
Minimal code snippet for running [igc-xc-score](https://github.com/mmomtchev/igc-xc-score/) inside webpage

```html
<script src="igc-xc-score.js"></script>
<script>
window.onload = function () {
  IGCScore.score(igccontent, (score) => {
    score = score.value;
    alert(score + ' pts');
  });
};
</script>
```

## Try
Live demo running on [Github page](https://spasutto.github.io/test-igc-xc-score/dist/).
There is also a simple [map point&click score tool](https://spasutto.github.io/test-igc-xc-score/dist/score.html)

Alternatively you can get a [release zip](https://github.com/spasutto/test-igc-xc-score/releases/) (e.g. [test-igc-xc-score_v1.1.6.zip](https://github.com/spasutto/test-igc-xc-score/releases/download/v1.1.6/test-igc-xc-score_v1.1.6.zip)) and open `index.html` or `score.html` in webserver, select an IGC file to "score".

## Options
`IGCScore.score` accepts 4 parameters :
 - igc content (plain text format)
 - callback function (taking a [score result object](#return-data) as parameter)
 - _[optional]_ scoring rules : a string like `'FFVL'` or `'XContest'`. Values are available by calling :
```javascript
Object.keys(IGCScore.xcScoringRules); // sample output : ['FFVL', 'XContest', 'FAI', 'FAI-Cylinders', 'FAI-OAR', 'FAI-OAR2', 'XCLeague']
```
 - _[optional]_ maximum time to compute the score (in seconds, default to 10s, if greater then further computations will be discarded and actual score will be returned).

## Build
```
npm install
npm run build
```
Output files will be in `dist` folder

## Return data
igc-xc-score return (minus opt.flight) :
```json
{
    "ranges": [{
            "start": 1297,
            "end": 1300
        }, {
            "start": 2336,
            "end": 2343
        }, {
            "start": 3046,
            "end": 3053
        }
    ],
    "opt": {
        "launch": 0,
        "landing": 3987,
        "scoring": {
            "name": "Triangle FAI",
            "multiplier": 1.4,
            "minSide": 0.28,
            "closingDistanceFixed": 3,
            "closingDistanceFree": 3,
            "closingDistanceRelative": 0.05,
            "cardinality": 3,
            "code": "fai"
        },
        "config": {
            "quiet": true,
            "trim": true
        }
    },
    "boxes": [{
            "x1": 5.8245000000000005,
            "y1": 44.753433333333334,
            "x2": 5.824716666666666,
            "y2": 44.7536
        }, {
            "x1": 5.807566666666666,
            "y1": 44.82055,
            "x2": 5.808016666666667,
            "y2": 44.820766666666664
        }, {
            "x1": 5.7748333333333335,
            "y1": 44.78265,
            "x2": 5.7755,
            "y2": 44.783166666666666
        }
    ],
    "score": 24.69,
    "bound": 24.771939339903188,
    "id": 639,
    "scoreInfo": {
        "distance": 17.64,
        "score": 24.689092536526232,
        "tp": [{
                "x": 5.824666666666666,
                "y": 44.75351666666667,
                "r": 1298
            }, {
                "x": 5.80785,
                "y": 44.820766666666664,
                "r": 2339
            }, {
                "x": 5.7751166666666665,
                "y": 44.78293333333333,
                "r": 3049
            }
        ],
        "cp": {
            "d": 0.38,
            "out": {
                "x": 5.8094833333333336,
                "y": 44.78375,
                "r": "3457"
            },
            "in": {
                "x": 5.8131,
                "y": 44.785983333333334,
                "r": "47"
            }
        }
    },
    "processed": 269,
    "currentUpperBound": 24.771939339903188,
    "time": 96,
    "optimal": true
}
```

## Credits
 - [igc-xc-score](https://github.com/mmomtchev/igc-xc-score/) by mmomtchev
 - FAI Sectors by Tom Payne (stolen from XC Planner)
