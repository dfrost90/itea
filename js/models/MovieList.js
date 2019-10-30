(function () {
    function MovieList() {
    }

    MovieList.prototype = {
        search: function (title) {
            return this.list.find(item => item.Title === title);
        },
        edit: function (id, newData) {
            this.list[this.list.findIndex(item => item.ID == id)] = newData;
        },
        add: function (data) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3000/films');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response).list);
            });
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
        getAll: function (onSuccess) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/films');
            // xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send();

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response).list);
            });
        }
    }

    window.movieList = new MovieList(); // "export"
})();
