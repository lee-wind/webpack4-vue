const { getOptions } = require('loader-utils');

const pxToRemRegExp = /(\d+)px/g;

module.exports = function (source) {

    const options = getOptions(this);

    console.log(options);

    const remPrecision = options.remPrecision;

    let template;

    if(remPrecision){
        template = source.replace(pxToRemRegExp, function(pxStr){
            let num = pxStr.slice(0, -2);
            if(num > 1){
                return (num/options.remUnit).toFixed(remPrecision) + 'rem';
            }
            return pxStr;
        })
    }else{
        template = source.replace(pxToRemRegExp, function(pxStr){
            let num = pxStr.slice(0, -2);
            if(num > 1){
                return (num/options.remUnit) + 'rem';
            }
            return pxStr;
        });
    }
    //console.log("模板：" + template);
    return template;
};