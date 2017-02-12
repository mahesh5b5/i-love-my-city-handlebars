exports.home = function(req, res) {
    res.render('home', {
        title: "Home",
        headline: "We believe that every city have something to say!"
    });
};


exports.city = function(req, res) {
    var cityName = req.params.city;
    var title, heading;
    var imageArray = [1, 2, 3, 4];
    if (cityName === 'paris') {
        title = 'Paris';
        heading = 'Love is in the air';
    } else if (cityName === 'italy') {
        title = 'Italy';
        heading = 'Man made city with lots of love';
    } else if (cityName === 'london') {
        title = 'London';
        heading = 'Best of the best city!';
    }

    res.render('city', {
        city: cityName,
        title: title,
        headline: heading,
        imageArray: imageArray
    });
}