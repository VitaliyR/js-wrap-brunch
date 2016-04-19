## js-wrap-brunch
Adds possibility to wrap [brunch](http://brunch.io) js output and not break source map.

## Install
Install the plugin via npm with `npm install --save-dev js-wrap-brunch`.
By default, your js output will be closured by self invoking function:

```javascript
;(function() {
  // ...
})();
```

## Options

You can change wrapper to your own by setting wrapper option in config. Use **@DATA**
in wrapper string for inserting code in its place:

```javascript
    { plugins: {
        jswrap: {
          wrapper: ';(function(){@DATA})();'  // default
        }
      }
    }
```

## License

The MIT License (MIT)

Copyright (c) 2016 Vitaliy Ribachenko (http://ribachenko.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
