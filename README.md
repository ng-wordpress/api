<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/37930764?s=200" alt="ng-wordpress" height="200"/>
</p>

# @ng-wordpress/api

### Installing
```Shell
npm install @ng-wordpress/api --save 
```
### Loading
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'ng-wordpress': 'node_modules/@ng-wordpress/api/bundles/ng-wordpress.umd.js'
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
<script src="node_modules/@ng-wordpress/api/bundles/ng-wordpress.umd.js"></script>
```
and use global `ng.wordpressApi` namespace.

### AoT compilation
The library is compatible with _AoT compilation_.

## License
MIT
