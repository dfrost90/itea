(function () {
    function MovieList() {
        this.URL = 'http://localhost:3000/films';
    }

    MovieList.prototype = {
        search: function (title) {
            return window.movieListData.find(item => item.Title === title);
        },
        edit: function (id, newData) {
            // window.movieListData[window.movieListData.findIndex(item => item.ID == id)] = newData;
            var data = {
                id: id,
                options: newData
            }

            var xhr = new XMLHttpRequest();
            xhr.open('PUT', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response).list);
            });
        },
        add: function (data, onSuccess) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response).list);
            });
        },
        getById: function (id) {
            return window.movieListData.find(item => item.ID === id);
        },
        deleteById: function (id) {
            var message = confirm('Remove movie ' + id + ' from the list?');
            if (message) {
                // window.movieListData.splice(window.movieListData.findIndex(item => item.ID === id), 1);
                var data = {
                    id: id
                }
                var xhr = new XMLHttpRequest();
                xhr.open('DELETE', this.URL);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        },
        getAll: function (onSuccess) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send();

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response).list);
            });
        }
    }

    window.movieList = new MovieList(); // "export"
})();
