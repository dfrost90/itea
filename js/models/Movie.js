(function () {
    function Movie(options) {
        if (options) {
            this.ID = options.ID;
            this.Title = options.Title;
            this.TitleAlt = options.TitleAlt;
            this.Actors = options.Actors;
            this.Director = options.Director;
            this.Country = options.Country;
            this.Genred = options.Genred;
            this.Image = options.Image;
            this.Info = options.Info;
            this.Rating = options.Rating;
            this.Year = options.Year;
            this.TrailerLink = options.TrailerLink;
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
