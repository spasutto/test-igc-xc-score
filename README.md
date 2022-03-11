# Test igc-xc-score
Minimal code snippet for running [igc-xc-score](https://github.com/mmomtchev/igc-xc-score/) inside webpage

```html
<script src="main.js"></script>
<script>
window.onload = function () {
  IGCScore.score(igccontent, (score) => {
    score = score.value;
    alert(score + ' pts');
  });
};
</script>
```


## Build
```
npm install
npm run build
```
Then open dist/index.html in webserver, paste the content of an IGC in the textarea and click on "score"

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