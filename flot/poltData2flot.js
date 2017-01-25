function plotData2Flot(plotData) {
    var flotData = {
        max: _.max(plotData),
        min: _.min(plotData),
        points: []
    };

    for (var i =0; i < plotData.length; i++) {
        flotData.points.push([i, plotData[i]]);
    }

    return flotData;
}