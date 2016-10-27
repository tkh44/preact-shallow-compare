# preact-shallow-compare

#Deprecated: Please use https://github.com/tkh44/shallow-compare instead

[![npm version](https://badge.fury.io/js/preact-shallow-compare.svg)](https://badge.fury.io/js/preact-shallow-compare)

shallowCompare for preact. react-shallow-compare detached from React.

##Example
```javascript
import { h, Component } from 'preact';
import shallowCompare from 'preact-shallow-compare';


class Foo extends Component {

    constructor(props) {

        super(props);

        this.state = { color: 'blue' };
    }

    shouldComponentUpdate(nextProps, nextState) {

        return shallowCompare(this, nextProps, nextState);
    }

    render() {

        return h('div', null, this.state.color);
    }

}
```
