const BASE = {
    'canBeNumber': false,
    'canBeText': false,
    'hasUnit': 0, // 0 - no, 1 - yes, 2 - optional,
    'expectNoOfValues': [true, false, false, false],
    'possibleValues': []
};

export default [

    // 'background': {
    //     ...BASE,
    //     'example_1': '#00ff00 url("smiley.gif") no-repeat fixed center;',
    //     'example_2': '',
    //     'example_3': '',
    //     'example_4': '',
    //     'example_5': ''
    // },
    {
        ...BASE,
        'name': 'background',
        'canBeText': true
        //     background-color: yellow;
        //     background-color: #00ff00;
        //     background-color: rgb(255,0,255);
    },
    {
        ...BASE,
        'name': 'background-color',
        'possibleValues': ['initial', 'inherit'],
        'canBeText': true
        //     background-color: yellow;
        //     background-color: #00ff00;
        //     background-color: rgb(255,0,255);
    },
    {
        ...BASE,
        'name': 'border',
        'possibleValues': ['initial', 'inherit'],
        'expectNoOfValues': [true, false, true, false]
        //     border: 5px solid red;
    },
    {
        ...BASE,
        'name': 'border-left',
        'possibleValues': ['initial', 'inherit'],
        'expectNoOfValues': [true, false, true, false]
        //     border-style: solid;
        //     border-left: thick double #ff0000;
    },
    {
        ...BASE,
        'name': 'border-right',
        'possibleValues': ['initial', 'inherit'],
        'expectNoOfValues': [true, false, true, false]
        //     border-style: solid;
        //     border-left: thick double #ff0000;
    },
    {
        ...BASE,
        'name': 'border-bottom',
        'possibleValues': ['initial', 'inherit'],
        'expectNoOfValues': [true, false, true, false]
        //     border-style: solid;
        //     border-left: thick double #ff0000;
    },
    {
        ...BASE,
        'name': 'border-top',
        'possibleValues': ['initial', 'inherit'],
        'expectNoOfValues': [true, false, true, false]
        //     border-style: solid;
        //     border-left: thick double #ff0000;
    },
    {
        ...BASE,
        'name': 'border-style',
        'possibleValues': [
            'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove',
            'ridge', 'inset', 'outset', 'initial', 'inherit'
        ],
        'expectNoOfValues': [true, true, true, true]
        //      border-style: solid;
        //      border-style: solid;
        //      border-style:dotted solid double dashed;
        //      border-style:dotted solid double;
        //      border-style:dotted solid;
        //      border-style:dotted;
    },
    {
        ...BASE,
        'name': 'border-color',
        'possibleValues': ['transparent', 'initial', 'inherit'],
        'canBeText': true
        //      border-color: #ff0000 #0000ff;

    },
    {
        ...BASE,
        'name': 'color',
        'possibleValues': ['initial', 'inherit'],
        'canBeText': true
        //      color: red;
        //      color: #00ff00;
        //      color: rgb(0,0,255);
    },
    {
        ...BASE,
        'name': 'display',
        'possibleValues': [
            'inline', 'block', 'flex', 'inline-block', 'inline-flex', 'inline-table', 'list-item',
            'run-in', 'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group',
            'table-row-group', 'table-cell', 'table-column', 'table-row', 'none', 'initial', 'inherit'
        ]
        //      display: inline;
    },
    {
        ...BASE,
        'name': 'float',
        'possibleValues': ['none', 'left', 'right', 'initial', 'inherit']
        //      float: right;
    },
    {
        ...BASE,
        'name': 'font-family',
        'possibleValues': ['initial', 'inherit'],
        'canBeText': true,
        'expectNoOfValues': [true, true, true, true]
        //      font-family: "Times New Roman", Georgia, Serif;
    },
    {
        ...BASE,
        'name': 'font-style',
        'possibleValues': ['normal', 'italic', 'oblique', 'initial', 'inherit']
        //      font-style: oblique;
    },
    {
        ...BASE,
        'name': 'font-weight',
        'possibleValues': ['normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit'],
        'canBeNumber': true
        //      font-weight: normal;
        //      font-weight: 900;
    },
    {
        ...BASE,
        'name': 'line-height',
        'possibleValues': ['normal', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 2
        //      line-height: 90%;
        //      line-height: normal;
        //      line-height: 2;
    },
    {
        ...BASE,
        'name': 'position',
        'possibleValues': ['static', 'absolute', 'fixed', 'relative', 'initial', 'inherit']
        //      position: absolute;
    },
    {
        ...BASE,
        'name': 'text-decoration',
        'possibleValues': ['none', 'underline', 'overline', 'line-through', 'initial', 'inherit']
        //      text-decoration: line-through
    },
    {
        ...BASE,
        'name': 'visibility',
        'possibleValues': ['visible', 'hidden', 'collapse', 'initial', 'inherit']
        //       visibility: hidden;
    },
    {
        ...BASE,
        'name': 'word-spacing',
        'possibleValues': ['normal', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
        //      word-spacing: 30px;
    },
    {
        ...BASE,
        'name': 'background-image',
        'possibleValues': ['none', 'initial', 'inherit'],
        'canBeText': true
        //      background-image: url("paper.gif");
    },
//  'font': {
//    'example_1': '',
//    'example_2': '',
//    'example_3': '',
//    'example_4': '',
//    'example_5': ''
//  },
    {
        ...BASE,
        'name': 'font-size',
        'possibleValues': ['medium', 'xx-small', 'x-small', 'small', 'large', 'x-large', 'xx-large', 'smaller', 'larger', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
        //  font-size:medium;
    },
    {
        ...BASE,
        'name': 'margin',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'expectNoOfValues': [true, true, true, true],
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'padding',
        'possibleValues': ['initial', 'inherit'],
        'canBeNumber': true,
        'expectNoOfValues': [true, true, true, true],
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'margin-bottom',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'margin-right',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'margin-left',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'margin-top',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'padding-bottom',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'padding-right',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'padding-left',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'padding-top',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'width',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    },
    {
        ...BASE,
        'name': 'height',
        'possibleValues': ['auto', 'initial', 'inherit'],
        'canBeNumber': true,
        'hasUnit': 1
    }
]