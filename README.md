# ng-wordpress
[![Build Status](https://api.travis-ci.org/kufuntu/ng-wordpress.svg?branch=master)](https://travis-ci.org/kufuntu/ng-wordpress)

### Installing
```Shell
npm install ng-wordpress --save 
```
### Loading
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'ng-wordpress': 'node_modules/ng-wordpress/bundles/ng-wordpress.umd.js'
    }
});
```
#### Angular-CLI
No need to set up anything, just import it in your code.
#### Rollup or webpack
No need to set up anything, just import it in your code.
#### Plain JavaScript
Include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/ng-wordpress/bundles/ng-wordpress.umd.js"></script>
```
and use global `ng.wordpressServices` namespace.

### AoT compilation
The library is compatible with _AoT compilation_.

## License
MIT
