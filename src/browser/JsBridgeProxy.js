function coolMethod(success, error, opts) {
    success(opts[0]);
}

module.exports = {
    coolMethod: coolMethod
};

require('cordova/exec/proxy').add('JsBridge', module.exports);
