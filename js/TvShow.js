(function() {
    function TvShow(options) {
        Movie.apply(this, arguments);
    
        if (options) {
            this.numberOfSeasons = options.numberOfSeasons || '1';
            this.statusOnAir = options.statusOnAir || false;
        }
    }
    
    TvShow.prototype = Object.create(Movie.prototype);
    TvShow.prototype.constructor = Movie;
    
    TvShow.prototype.isOnAir = function () {
        return this.statusOnAir ? 'yes' : 'cancelled';
    }
    
    TvShow.prototype.playListOfEpisodes = function () {
        return 'play list of episodes';
    }
    
    TvShow.prototype.setSeasonScore = function () {
        return 'rate season';
    }
    
    TvShow.prototype.render = function () {
        return 'render tvshow';
    }

    window.tvshow = TvShow;
})()