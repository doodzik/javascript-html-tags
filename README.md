# JavaScript HTML Tags

Create valid HTML with ease. Each HTML tag is a function with the same interface.

## Installation

```
npm i javascript-html-tags --save
```

## Usage

```
const {html, head, style, body, div, ...tags} = require('javascript-html-tags')

const cssRules = '.red{color:red}'

html(head(style(cssRules)),
      body(div({class: 'red'}, 'hello'),
          div('world!')))
```

## API

All arguments are concatenated. If the first one is an Object it will be interpreted as the html tags keys and values.

The ones with defaults are:
* style -> defaults to css
* script -> defaults to js

None tags are:
* xid -> returns a concatenated string of the arguments

If you find a tag that isn't supported open an issue

## LICENSE

MIT
