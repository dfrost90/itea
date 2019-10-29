(function () {
    function MovieList() {
        var data;
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:3000/films');

        xhr.send();

        xhr.addEventListener('load', () => {
            data = JSON.parse(xhr.response).list;

            this.list = data.map(function (el) {
                return new Movie(el);
            });
        });
    }

    MovieList.prototype = {
        search: function (title) {
            return this.list.find(item => item.Title === title);
        },
        edit: function (id, newData) {
            this.list[this.list.findIndex(item => item.ID == id)] = newData;
        },
        add: function (newData) {
            this.list.push(newData);
        },
        getById: function (id) {
            return this.list.find(item => item.ID === id);
        },
        deleteById: function (id) {
            var message = confirm('Remove movie ' + id + ' from the list?');
            if (message) {
                this.list.splice(this.list.findIndex(item => item.ID === id), 1);
                movieListData = this.list;
            }
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
                return this.list[i].Title + ', ';
            });
        }
    }

    window.MovieList = MovieList; // "export"
})();
