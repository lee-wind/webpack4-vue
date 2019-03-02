function MyPlugin(options) {
    this.options = options;
}

MyPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function(stat) {
        console.log('Hello World!');
    });
};

module.exports = MyPlugin;