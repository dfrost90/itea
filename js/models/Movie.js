(function () {
    function Movie(options) {
        this.options = options;
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
