(function () {
    function Movie(options) {
        if (options) {
            this.ID = options.ID;
            this.Title = options.Title;
            this.TitleAlt = options.TitleAlt;
            this.rating = options.rating;
            this.url = options.url;
            this.srcImage = options.srcImage;
            this.year = options.year;
            this.genre = options.genre;
            this.director = options.director;
            this.country = options.country;
            this.Actors = options.Actors;
            this.info = options.info;
        }
    }

    Movie.prototype = {
        add: function (key, value) {
            this[key] = value;
        },
        edit: function (key, value) {
            this[key] = value;
        },
        remove: function (key) {
            delete this[key];
        },
        setScore: function () {
            return 'set score function for ' + this.Title;
        },
        playVideo: function () {
            return 'play function for ' + this.Title;
        }
    }

    window.Movie = Movie;
})()
