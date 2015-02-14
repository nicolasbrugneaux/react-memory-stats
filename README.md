# react-memory-stats

This plugin is based on Paul Irish's [memory-stats](https://github.com/paulirish/memory-stats.js).

![image](http://i.imgur.com/eUCFcAH.gif)

## Install

```
npm i react-memory-stats --save
```

### Start Chrome with `--enable-precise-memory-info`

```
# Linux
google-chrome --enable-precise-memory-info --enable-memory-info

#MacOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-precise-memory-info --enable-memory-info
```

Otherwise the results from performance.memory are bucketed and less useful.

### Add the module to your react's dependencies

```
var MemoryStatsComponent = require( 'react-memory-stats' );
...
render: function()
{
  return ( <ReactMemoryStats enabled={true}/> );
}

```

## Contribute

```
npm install
npm run build
```