function PlotData(options) {
    options = _.extend({
        nrSamples: 200,
        initPrice: 2,
        priceVariation: 1
    }, options);

    var generatePriceLadder = function () {
        var prices = [];

        // initialize the ladder object.
        var price = 101;
        while (price <= 100000) {
            prices.push(price / 100);

            if (price >= 10000) {
                price += 1000;
            } else if (price >= 5000) {
                price += 500;
            } else if (price >= 3000) {
                price += 200;
            } else if (price >= 2000) {
                price += 100;
            } else if (price >= 1000) {
                price += 50;
            } else if (price >= 600) {
                price += 20;
            } else if (price >= 400) {
                price += 10;
            } else if (price >= 300) {
                price += 5;
            } else if (price >= 200) {
                price += 2;
            } else if (price >= 100) {
                price += 1;
            }
        }

        return prices;
    };
    var index;
    var samples = [];
    var priceLadder = generatePriceLadder();
    var currentPriceIndex = _.indexOf(priceLadder, options.initPrice);

    var generateNewSample = function () {
        var sample;

        currentPriceIndex += _.random(options.priceVariation * -1, options.priceVariation);
        currentPriceIndex = currentPriceIndex < 0 ? 0 : currentPriceIndex;
        sample = priceLadder[currentPriceIndex];
        samples.push(sample);

        if (samples.length > options.nrSamples) {
            samples.shift();
        }

        return sample;
    };


    samples.push(priceLadder[currentPriceIndex]);
    for (index = 0; index < options.nrSamples; index++) {
        generateNewSample(priceLadder[currentPriceIndex]);
    }

    return {
        generateNewSample: generateNewSample,
        getGeneratedSamples: function () {
            return samples;
        }
    }
}