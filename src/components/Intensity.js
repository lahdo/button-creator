const mainDirections = {
    'increase': 'increase',
    'decrease': 'decrease'
};

const powers = {
    'power1': 7,
    'power2': 4.5,
    'power3': 2,
    'power4': 1.3
};

const possibleDirections = {
    'bigger': 'bigger',
    'smaller': 'smaller',
    'wider': 'wider',
    'higher': 'higher',
    'longer': 'longer',
    'shorter': 'shorter',
    'less': 'less',
    'more': 'more',
    'lighter': 'lighter',
    'darker': 'darker',
    'brighter': 'brighter',
    'larger': 'larger',
    'fatter': 'fatter',
    'slimmer': 'slimmer',
    'greater': 'greater',
    'taller': 'taller',
    'increase': 'increase',
    'decrease': 'decrease'
};

const possibleAdjectives = {
    'much': 'much',
    'little': 'little',
    'lightly': 'lightly',
    'substantially': 'substantially'
};

function adjectiveTranslator(adjective, direction) {

}

const adjectivesTranslations = [
    {
        from: possibleDirections.bigger,
        to: powers.power1
    }
];

const directionTranslations = [
    {
        from: possibleDirections.bigger,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.smaller,
        to: mainDirections.decrease
    },
    {
        from: possibleDirections.wider,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.higher,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.longer,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.shorter,
        to: mainDirections.decrease
    },
    {
        from: possibleDirections.less,
        to: mainDirections.decrease
    },
    {
        from: possibleDirections.more,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.lighter,
        to: mainDirections.decrease
    },
    {
        from: possibleDirections.darker,
        to: mainDirections.decrease
    },
    {
        from: possibleDirections.brighter,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.larger,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.fatter,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.slimmer,
        to: mainDirections.decrease
    },
    {
        from: possibleDirections.greater,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.taller,
        to: mainDirections.increase
    },
    {
        from: possibleDirections.decrease,
        to: mainDirections.decrease
    },
    {
        from: possibleDirections.increase,
        to: mainDirections.increase
    },
];

const intensity = {
    possibleDirections: possibleDirections,
    possibleAdjectives: possibleAdjectives,
    directionTranslations: directionTranslations,
    adjectivesTranslations: adjectivesTranslations
};

export default intensity;

// broad
// chubby
// crooked
// curved
// deep
// flat
// high
// hollow
// low
// narrow
// round
// shallow
// skinny
// square
// steep
// straight
// wide