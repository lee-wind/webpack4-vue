const { getOptions } = require('loader-utils');

const templateRegExp = /<template>([\s\S]+)<\/template>/gi;

const pxToRemRegExp = /(\d+)px/g;

module.exports = function (source) {

    const options = getOptions(this);

    //console.log(options);

    const remPrecision = options.remPrecision;

    const _template = source.match(templateRegExp)[0];

    let template;

    if(remPrecision){
        template = _template.replace(pxToRemRegExp, function(pxStr){
            let num = pxStr.slice(0, -2);
            if(num > 1){
                return (num/options.remUnit).toFixed(remPrecision) + 'rem';
            }
            return pxStr;
        })
    }else{
        template = _template.replace(pxToRemRegExp, function(pxStr){
            let num = pxStr.slice(0, -2);
            if(num > 1){
                return (num/options.remUnit) + 'rem';
            }
            return pxStr;
        });
    }
    //console.log("模板：" + template);
    return source.replace(templateRegExp, template);
};