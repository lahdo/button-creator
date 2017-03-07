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
        'name': 'border-radius'
        //     border-radius: 50%;
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
    },
    {...BASE, 'name': 'additive-symbols'},
    {...BASE, 'name': 'align-content'},
    {...BASE, 'name': 'align-items'},
    {...BASE, 'name': 'align-self'},
    {...BASE, 'name': 'angle'},
    {...BASE, 'name': 'animation'},
    {...BASE, 'name': 'animation-delay'},
    {...BASE, 'name': 'animation-direction'},
    {...BASE, 'name': 'animation-duration'},
    {...BASE, 'name': 'animation-fill-mode'},
    {...BASE, 'name': 'animation-iteration-count'},
    {...BASE, 'name': 'animation-name'},
    {...BASE, 'name': 'animation-play-state'},
    {...BASE, 'name': 'animation-timing-function'},
    {...BASE, 'name': 'backface-visibility'},
    {...BASE, 'name': 'background'},
    {...BASE, 'name': 'background-attachment'},
    {...BASE, 'name': 'background-blend-mode'},
    {...BASE, 'name': 'background-clip'},
    {...BASE, 'name': 'background-color'},
    {...BASE, 'name': 'background-image'},
    {...BASE, 'name': 'background-origin'},
    {...BASE, 'name': 'background-position'},
    {...BASE, 'name': 'background-repeat'},
    {...BASE, 'name': 'background-size'},
    {...BASE, 'name': 'basic-shape'},
    {...BASE, 'name': 'blend-mode'},
    {...BASE, 'name': 'block-size'},
    {...BASE, 'name': 'border'},
    {...BASE, 'name': 'border-block-end'},
    {...BASE, 'name': 'border-block-end-color'},
    {...BASE, 'name': 'border-block-end-style'},
    {...BASE, 'name': 'border-block-end-width'},
    {...BASE, 'name': 'border-block-start'},
    {...BASE, 'name': 'border-block-start-color'},
    {...BASE, 'name': 'border-block-start-style'},
    {...BASE, 'name': 'border-block-start-width'},
    {...BASE, 'name': 'border-bottom'},
    {...BASE, 'name': 'border-bottom-color'},
    {...BASE, 'name': 'border-bottom-left-radius'},
    {...BASE, 'name': 'border-bottom-right-radius'},
    {...BASE, 'name': 'border-bottom-style'},
    {...BASE, 'name': 'border-bottom-width'},
    {...BASE, 'name': 'border-collapse'},
    {...BASE, 'name': 'border-color'},
    {...BASE, 'name': 'border-image'},
    {...BASE, 'name': 'border-image-outset'},
    {...BASE, 'name': 'border-image-repeat'},
    {...BASE, 'name': 'border-image-slice'},
    {...BASE, 'name': 'border-image-source'},
    {...BASE, 'name': 'border-image-width'},
    {...BASE, 'name': 'border-inline-end'},
    {...BASE, 'name': 'border-inline-end-color'},
    {...BASE, 'name': 'border-inline-end-style'},
    {...BASE, 'name': 'border-inline-end-width'},
    {...BASE, 'name': 'border-inline-start'},
    {...BASE, 'name': 'border-inline-start-color'},
    {...BASE, 'name': 'border-inline-start-style'},
    {...BASE, 'name': 'border-inline-start-width'},
    {...BASE, 'name': 'border-left'},
    {...BASE, 'name': 'border-left-color'},
    {...BASE, 'name': 'border-left-style'},
    {...BASE, 'name': 'border-left-width'},
    {...BASE, 'name': 'border-radius'},
    {...BASE, 'name': 'border-right'},
    {...BASE, 'name': 'border-right-color'},
    {...BASE, 'name': 'border-right-style'},
    {...BASE, 'name': 'border-right-width'},
    {...BASE, 'name': 'border-spacing'},
    {...BASE, 'name': 'border-style'},
    {...BASE, 'name': 'border-top'},
    {...BASE, 'name': 'border-top-color'},
    {...BASE, 'name': 'border-top-left-radius'},
    {...BASE, 'name': 'border-top-right-radius'},
    {...BASE, 'name': 'border-top-style'},
    {...BASE, 'name': 'border-top-width'},
    {...BASE, 'name': 'border-width'},
    {...BASE, 'name': 'bottom'},
    {...BASE, 'name': 'box-decoration-break'},
    {...BASE, 'name': 'box-shadow'},
    {...BASE, 'name': 'box-sizing'},
    {...BASE, 'name': 'break-after'},
    {...BASE, 'name': 'break-before'},
    {...BASE, 'name': 'break-inside'},
    {...BASE, 'name': 'caption-side'},
    {...BASE, 'name': 'caret-color'},
    {...BASE, 'name': 'clear'},
    {...BASE, 'name': 'clip'},
    {...BASE, 'name': 'clip-path'},
    {...BASE, 'name': 'color'},
    {...BASE, 'name': 'column-count'},
    {...BASE, 'name': 'column-fill'},
    {...BASE, 'name': 'column-gap'},
    {...BASE, 'name': 'column-rule'},
    {...BASE, 'name': 'column-rule-color'},
    {...BASE, 'name': 'column-rule-style'},
    {...BASE, 'name': 'column-rule-width'},
    {...BASE, 'name': 'column-span'},
    {...BASE, 'name': 'column-width'},
    {...BASE, 'name': 'columns'},
    {...BASE, 'name': 'content'},
    {...BASE, 'name': 'counter'},
    {...BASE, 'name': 'counter-increment'},
    {...BASE, 'name': 'counter-reset'},
    {...BASE, 'name': 'cursor'},
    {...BASE, 'name': 'direction' },
    {...BASE, 'name': 'display'},
    {...BASE, 'name': 'empty-cells'},
    {...BASE, 'name': 'filter'},
    {...BASE, 'name': 'flex'},
    {...BASE, 'name': 'flex-basis'},
    {...BASE, 'name': 'flex-direction'},
    {...BASE, 'name': 'flex-flow'},
    {...BASE, 'name': 'flex-grow'},
    {...BASE, 'name': 'flex-shrink'},
    {...BASE, 'name': 'flex-wrap'},
    {...BASE, 'name': 'float'},
    {...BASE, 'name': 'font'},
    {...BASE, 'name': 'font-family'},
    {...BASE, 'name': 'font-feature-settings'},
    {...BASE, 'name': 'font-kerning'},
    {...BASE, 'name': 'font-language-override'},
    {...BASE, 'name': 'font-size'},
    {...BASE, 'name': 'font-size-adjust'},
    {...BASE, 'name': 'font-stretch'},
    {...BASE, 'name': 'font-style'},
    {...BASE, 'name': 'font-synthesis'},
    {...BASE, 'name': 'font-variant'},
    {...BASE, 'name': 'font-variant-alternates'},
    {...BASE, 'name': 'font-variant-caps'},
    {...BASE, 'name': 'font-variant-east-asian'},
    {...BASE, 'name': 'font-variant-ligatures'},
    {...BASE, 'name': 'font-variant-numeric'},
    {...BASE, 'name': 'font-variant-position'},
    {...BASE, 'name': 'font-weight'},
    {...BASE, 'name': 'frequency'},
    {...BASE, 'name': 'grad'},
    {...BASE, 'name': 'gradient'},
    {...BASE, 'name': 'grid'},
    {...BASE, 'name': 'grid-area'},
    {...BASE, 'name': 'grid-auto-columns'},
    {...BASE, 'name': 'grid-auto-flow'},
    {...BASE, 'name': 'grid-auto-rows'},
    {...BASE, 'name': 'grid-column'},
    {...BASE, 'name': 'grid-column-end'},
    {...BASE, 'name': 'grid-column-gap'},
    {...BASE, 'name': 'grid-column-start'},
    {...BASE, 'name': 'grid-gap'},
    {...BASE, 'name': 'grid-row'},
    {...BASE, 'name': 'grid-row-end'},
    {...BASE, 'name': 'grid-row-gap'},
    {...BASE, 'name': 'grid-row-start'},
    {...BASE, 'name': 'grid-template'},
    {...BASE, 'name': 'grid-template-areas'},
    {...BASE, 'name': 'grid-template-columns'},
    {...BASE, 'name': 'grid-template-rows'},
    {...BASE, 'name': 'height'},
    {...BASE, 'name': 'hyphens'},
    {...BASE, 'name': 'ident'},
    {...BASE, 'name': 'image'},
    {...BASE, 'name': 'image-orientation'},
    {...BASE, 'name': 'image-rendering'},
    {...BASE, 'name': 'image-resolution'},
    {...BASE, 'name': 'image-set'},
    {...BASE, 'name': 'ime-mode'},
    {...BASE, 'name': 'inline-size'},
    {...BASE, 'name': 'isolation'},
    {...BASE, 'name': 'justify-content'},
    {...BASE, 'name': 'leader'},
    {...BASE, 'name': 'left'},
    {...BASE, 'name': 'length'},
    {...BASE, 'name': 'letter-spacing'},
    {...BASE, 'name': 'line-break'},
    {...BASE, 'name': 'line-height'},
    {...BASE, 'name': 'list-style'},
    {...BASE, 'name': 'list-style-image'},
    {...BASE, 'name': 'list-style-position'},
    {...BASE, 'name': 'list-style-type'},
    {...BASE, 'name': 'margin'},
    {...BASE, 'name': 'margin-block-end'},
    {...BASE, 'name': 'margin-block-start'},
    {...BASE, 'name': 'margin-bottom'},
    {...BASE, 'name': 'margin-inline-end'},
    {...BASE, 'name': 'margin-inline-start'},
    {...BASE, 'name': 'margin-left'},
    {...BASE, 'name': 'margin-right'},
    {...BASE, 'name': 'margin-top'},
    {...BASE, 'name': 'mask'},
    {...BASE, 'name': 'mask-clip'},
    {...BASE, 'name': 'mask-composite'},
    {...BASE, 'name': 'mask-image'},
    {...BASE, 'name': 'mask-mode'},
    {...BASE, 'name': 'mask-origin'},
    {...BASE, 'name': 'mask-position'},
    {...BASE, 'name': 'mask-repeat'},
    {...BASE, 'name': 'mask-size'},
    {...BASE, 'name': 'mask-type'},
    {...BASE, 'name': 'max-height'},
    {...BASE, 'name': 'max-width'},
    {...BASE, 'name': 'min-block-size'},
    {...BASE, 'name': 'min-height'},
    {...BASE, 'name': 'min-inline-size'},
    {...BASE, 'name': 'min-width'},
    {...BASE, 'name': 'mix-blend-mode'},
    {...BASE, 'name': 'object-fit'},
    {...BASE, 'name': 'object-position'},
    {...BASE, 'name': 'offset-block-end'},
    {...BASE, 'name': 'offset-block-start'},
    {...BASE, 'name': 'offset-inline-end'},
    {...BASE, 'name': 'offset-inline-start'},
    {...BASE, 'name': 'opacity'},
    {...BASE, 'name': 'order'},
    {...BASE, 'name': 'orphans'},
    {...BASE, 'name': 'outline'},
    {...BASE, 'name': 'outline-color'},
    {...BASE, 'name': 'outline-offset'},
    {...BASE, 'name': 'outline-style'},
    {...BASE, 'name': 'outline-width'},
    {...BASE, 'name': 'overflow'},
    {...BASE, 'name': 'overflow-wrap'},
    {...BASE, 'name': 'overflow-x'},
    {...BASE, 'name': 'overflow-y'},
    {...BASE, 'name': 'padding'},
    {...BASE, 'name': 'padding-block-end'},
    {...BASE, 'name': 'padding-block-start'},
    {...BASE, 'name': 'padding-bottom'},
    {...BASE, 'name': 'padding-inline-end'},
    {...BASE, 'name': 'padding-inline-start'},
    {...BASE, 'name': 'padding-left'},
    {...BASE, 'name': 'padding-right'},
    {...BASE, 'name': 'padding-top'},
    {...BASE, 'name': 'page-break-after'},
    {...BASE, 'name': 'page-break-before'},
    {...BASE, 'name': 'page-break-inside'},
    {...BASE, 'name': 'perspective'},
    {...BASE, 'name': 'perspective-origin'},
    {...BASE, 'name': 'pointer-events'},
    {...BASE, 'name': 'position'},
    {...BASE, 'name': 'resize'},
    {...BASE, 'name': 'resolution'},
    {...BASE, 'name': 'revert'},
    {...BASE, 'name': 'right'},
    {...BASE, 'name': 'scroll-behavior'},
    {...BASE, 'name': 'scroll-snap-coordinate'},
    {...BASE, 'name': 'scroll-snap-destination'},
    {...BASE, 'name': 'scroll-snap-type'},
    {...BASE, 'name': 'shape'},
    {...BASE, 'name': 'shape-image-threshold'},
    {...BASE, 'name': 'shape-margin'},
    {...BASE, 'name': 'shape-outside'},
    {...BASE, 'name': 'tab-size'},
    {...BASE, 'name': 'table-layout'},
    {...BASE, 'name': 'text-align'},
    {...BASE, 'name': 'text-align-last'},
    {...BASE, 'name': 'text-combine-upright'},
    {...BASE, 'name': 'text-decoration'},
    {...BASE, 'name': 'text-decoration-color'},
    {...BASE, 'name': 'text-decoration-line'},
    {...BASE, 'name': 'text-decoration-style'},
    {...BASE, 'name': 'text-emphasis'},
    {...BASE, 'name': 'text-emphasis-color'},
    {...BASE, 'name': 'text-emphasis-position'},
    {...BASE, 'name': 'text-emphasis-style'},
    {...BASE, 'name': 'text-indent'},
    {...BASE, 'name': 'text-orientation'},
    {...BASE, 'name': 'text-overflow'},
    {...BASE, 'name': 'text-rendering'},
    {...BASE, 'name': 'text-shadow'},
    {...BASE, 'name': 'text-transform'},
    {...BASE, 'name': 'text-underline-position'},
    {...BASE, 'name': 'top'},
    {...BASE, 'name': 'transform'},
    {...BASE, 'name': 'transform-box'},
    {...BASE, 'name': 'transform-origin'},
    {...BASE, 'name': 'transform-style'},
    {...BASE, 'name': 'transition'},
    {...BASE, 'name': 'transition-delay'},
    {...BASE, 'name': 'transition-duration'},
    {...BASE, 'name': 'transition-property'},
    {...BASE, 'name': 'transition-timing-function'},
    {...BASE, 'name': 'unicode-bidi'},
    {...BASE, 'name': 'unicode-range'},
    {...BASE, 'name': 'vertical-align'},
    {...BASE, 'name': 'visibility'},
    {...BASE, 'name': 'white-space'},
    {...BASE, 'name': 'widows'},
    {...BASE, 'name': 'width'},
    {...BASE, 'name': 'will-change'},
    {...BASE, 'name': 'word-break'},
    {...BASE, 'name': 'word-spacing'},
    {...BASE, 'name': 'word-wrap'},
    {...BASE, 'name': 'writing-mode'},
    {...BASE, 'name': 'z-index'},
    {...BASE, 'name': 'zoom'}
]


