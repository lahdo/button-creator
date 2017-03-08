import {round} from 'lodash';

const mainDirections = {
    'increase': 'increase',
    'decrease': 'decrease'
};

const levels = {
    'level1': 0,
    'level2': 1,
    'level3': 2,
    'level4': 3
};

const increaseFactors = [3, 1.9, 1.3, 1.05];
const decreaseFactors = increaseFactors.slice().map(item => round(1 / item, 2)); //[0.05, 0.2, 0.7, 0.95];

const factors = {
    increaseFactors: increaseFactors,
    decreaseFactors: decreaseFactors
};

const possibleDirections = [
    {
        name: 'bigger',
        meaning: mainDirections.increase
    },
    {
        name: 'smaller',
        meaning: mainDirections.decrease
    },
    {
        name: 'wider',
        meaning: mainDirections.increase
    },
    {
        name: 'higher',
        meaning: mainDirections.increase
    },
    {
        name: 'longer',
        meaning: mainDirections.increase
    },
    {
        name: 'shorter',
        meaning: mainDirections.decrease
    },
    {
        name: 'less',
        meaning: mainDirections.decrease
    },
    {
        name: 'more',
        meaning: mainDirections.increase
    },
    {
        name: 'lighter',
        meaning: mainDirections.decrease
    },
    {
        name: 'lighten',
        meaning: mainDirections.decrease
    },
    {
        name: 'darker',
        meaning: mainDirections.increase
    },
    {
        name: 'darken',
        meaning: mainDirections.increase
    },
    {
        name: 'brighter',
        meaning: mainDirections.increase
    },
    {
        name: 'larger',
        meaning: mainDirections.increase
    },
    {
        name: 'fatter',
        meaning: mainDirections.increase
    },
    {
        name: 'slimmer',
        meaning: mainDirections.decrease
    },
    {
        name: 'greater',
        meaning: mainDirections.increase
    },
    {
        name: 'taller',
        meaning: mainDirections.increase
    },
    {
        name: 'increase',
        meaning: mainDirections.increase
    },
    {
        name: 'decrease',
        meaning: mainDirections.decrease
    }
];

const defaultAdjective = {
    name: 'default',
    meaning: levels.level3
};

const possibleAdjectives = [
    {
        name: 'default',
        meaning: levels.level3
    },
    {
        name: 'much',
        meaning: levels.level2
    },
    {
        name: 'little',
        meaning: levels.level4
    },
    {
        name: 'bit',
        meaning: levels.level4
    },
    {
        name: 'lightly',
        meaning: levels.level4
    },
    {
        name: 'substantially',
        meaning: levels.level1
    },
    {
        name: 'significantly',
        meaning: levels.level1
    },
    {
        name: 'slightly',
        meaning: levels.level4
    }
];

const intensity = {
    factors: factors,
    possibleDirections: possibleDirections,
    possibleAdjectives: possibleAdjectives,
    mainDirections: mainDirections,
    defaultAdjective: defaultAdjective
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