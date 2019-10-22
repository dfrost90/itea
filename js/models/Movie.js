(function() {
    function Movie(options) {
        if (options) {
            this.id = options.id || 'id error';
            this.title = options.title || 'default';
            this.image = options.image || 'https://lorempixel.com/200/400';
            this.url = options.url || 'https://example.com';
            this.genre = options.genre || 'other';
            this.rating = options.rating || 0;
            this.year = options.year || 'not set';
            this.director = options.director || 'noname';
            this.cast = options.cast || 'John Doe, Jane Doe';
            this.info = options.info || 'some text';
            this.views = options.views || 0;
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
            return 'set score function for ' + this.title;
        },
        playVideo: function() {
            return 'play function for ' + this.title;
        }
    }

    window.Movie = Movie;
})()
