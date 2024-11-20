var size = 0;
var placement = 'point';

var style_NivelSocioeconomico_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("PC1");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -1.491674 && value <= -0.777393) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,251,253,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.777393 && value <= 0.450932) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,232,242,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.450932 && value <= 1.851773) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(201,202,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.851773 && value <= 3.693630) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(163,159,203,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.693630 && value <= 6.347428) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(124,118,182,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6.347428 && value <= 9.813330) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(94,58,152,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 9.813330 && value <= 19.402998) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(63,0,125,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
