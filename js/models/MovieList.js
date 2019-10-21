(function() {
    function MovieList(data) {
        this.list = data.map(function (el) {
            return new Movie(el);
        });
    }

    MovieList.prototype = {
        search: function (title) {
            return this.list.find(item => item.title === title);
        },
        edit: function (id, newData) {
            this.list[this.list.findIndex(item => item.id === id)] = newData;
        },
        add: function (newData) {
            this.list.push(newData);
        },
        getById: function (ID) {
            return this.list.find(item => item.id === ID);
        },
        deleteById: function (ID) {
            this.list.splice(this.list.findIndex(item => item.id === ID), 1);
        },
        getAll: function () {
            return this.list;
        },
        sortBy: function (sort) {
            var sort = sort || 'year'; // default sorting
    
            return this.list.sort((a, b) => (a[sort] > b[sort]) ? 1 : -1);
        },
        filterBy: function (filter) {
            return this.list.filter(item => item.genre === filter);
        },
        render: function () {
            this.list.map(function (el) {
                return this.list[i].title + ', ';
            });
        }
    }

    window.MovieList = MovieList; // "export"
})();
