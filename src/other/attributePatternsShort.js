const BASE = {
    'canBeNumber': false,
    'canBeText': false,
    'hasUnit': 0, // 0 - no, 1 - yes, 2 - optional,
    'expectNoOfValues': [true, false, false, false],
    'possibleValues': []
};

export default [
    {
        // 'background': {
        //     ...BASE,
        //     'example_1': '#00ff00 url("smiley.gif") no-repeat fixed center;',
        //     'example_2': '',
        //     'example_3': '',
        //     'example_4': '',
        //     'example_5': ''
        // },
        'background-color': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'canBeText': true
            //     background-color: yellow;
            //     background-color: #00ff00;
            //     background-color: rgb(255,0,255);
        },
        'border': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'expectNoOfValues': [true, false, true, false]
            //     border: 5px solid red;
        },
        'border-left': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'expectNoOfValues': [true, false, true, false]
            //     border-style: solid;
            //     border-left: thick double #ff0000;
        },
        'border-right': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'expectNoOfValues': [true, false, true, false]
            //     border-style: solid;
            //     border-left: thick double #ff0000;
        },
        'border-bottom': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'expectNoOfValues': [true, false, true, false]
            //     border-style: solid;
            //     border-left: thick double #ff0000;
        },
        'border-top': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'expectNoOfValues': [true, false, true, false]
            //     border-style: solid;
            //     border-left: thick double #ff0000;
        },
        'border-style': {
            ...BASE,
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
        'border-color': {
            ...BASE,
            'possibleValues': ['transparent', 'initial', 'inherit'],
            'canBeText': true
            //      border-color: #ff0000 #0000ff;

        },
        'color': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'canBeText': true
            //      color: red;
            //      color: #00ff00;
            //      color: rgb(0,0,255);
        },
        'display': {
            ...BASE,
            'possibleValues': [
                'inline', 'block', 'flex', 'inline-block', 'inline-flex', 'inline-table', 'list-item',
                'run-in', 'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group',
                'table-row-group', 'table-cell', 'table-column', 'table-row', 'none', 'initial', 'inherit'
            ]
            //      display: inline;
        },
        'float': {
            ...BASE,
            'possibleValues': ['none', 'left', 'right', 'initial', 'inherit']
            //      float: right;
        },
        'font-family': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'canBeText': true,
            'expectNoOfValues': [true, true, true, true]
            //      font-family: "Times New Roman", Georgia, Serif;
        },
        'font-style': {
            ...BASE,
            'possibleValues': ['normal', 'italic', 'oblique', 'initial', 'inherit']
            //      font-style: oblique;
        },
        'font-weight': {
            ...BASE,
            'possibleValues': ['normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit'],
            'canBeNumber': true
            //      font-weight: normal;
            //      font-weight: 900;
        },
        'line-height': {
            ...BASE,
            'possibleValues': ['normal', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 2
            //      line-height: 90%;
            //      line-height: normal;
            //      line-height: 2;
        },
        'position': {
            ...BASE,
            'possibleValues': ['static', 'absolute', 'fixed', 'relative', 'initial', 'inherit']
            //      position: absolute;
        },
        'text-decoration': {
            ...BASE,
            'possibleValues': ['none', 'underline', 'overline', 'line-through', 'initial', 'inherit']
            //      text-decoration: line-through
        },
        'visibility': {
            ...BASE,
            'possibleValues': ['visible', 'hidden', 'collapse', 'initial', 'inherit']
            //       visibility: hidden;
        },
        'word-spacing': {
            ...BASE,
            'possibleValues': ['normal', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
            //      word-spacing: 30px;
        },
        'background-image': {
            ...BASE,
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
        'font-size': {
            ...BASE,
            'possibleValues': ['medium', 'xx-small', 'x-small', 'small', 'large', 'x-large', 'xx-large', 'smaller', 'larger', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
            //  font-size:medium;
        },
        'margin': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'expectNoOfValues': [true, true, true, true],
            'hasUnit': 1
        },
        'padding': {
            ...BASE,
            'possibleValues': ['initial', 'inherit'],
            'canBeNumber': true,
            'expectNoOfValues': [true, true, true, true],
            'hasUnit': 1
        },
        'margin-bottom': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'margin-right': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'margin-left': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'margin-top': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'padding-bottom': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'padding-right': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'padding-left': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'padding-top': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'width': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        },
        'height': {
            ...BASE,
            'possibleValues': ['auto', 'initial', 'inherit'],
            'canBeNumber': true,
            'hasUnit': 1
        }
    }
]