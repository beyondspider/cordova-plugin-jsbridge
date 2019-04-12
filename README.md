---
title: JsBridge
description: JsBridge HelloWorld.
---

# cordova-plugin-jsbridge
HelloWorld for cordova plugin.

## Supported Platforms

- Android
- iOS
- Browser

## Install
```bash
cordova plugin add https://github.com/beyondspider/cordova-plugin-jsbridge.git
cordova plugin rm cordova-plugin-jsbridge
```

## Use
```javascript
cordova.plugins.JsBridge.coolMethod("JsBridge coolMethod Test", function(data) {
    alert("JsBridge:" + data)
    console.log("JsBridge:" + data);
}, function(error) {
    console.error(error);
});
```
## License

Copyright (c) 2019 beyondspider

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


