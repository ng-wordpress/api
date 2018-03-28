# ng-wordpress-services
[![Build Status](https://api.travis-ci.org/kufuntu/ng-wordpress-services.svg?branch=master)](https://travis-ci.org/kufuntu/ng-wordpress-services)

### Installing
```Shell
npm install ng-wordpress-services --save 
```
### Loading
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'ng-wordpress-services': 'node_modules/ng-wordpress-services/bundles/ng-wordpress-services.umd.js'
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
<script src="node_modules/ng-wordpress-services/bundles/ng-wordpress-services.umd.js"></script>
```
and use global `ng.wordpressServices` namespace.

### AoT compilation
The library is compatible with _AoT compilation_.

## License
MIT
