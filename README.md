# preact-shallow-compare

[![npm package][npm-badge]][npm]

shallowCompare for preact. react-shallow-compare detached from React.

##Example
```javscript
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

[npm-badge]: https://img.shields.io/npm/v/npm-package.svg?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
