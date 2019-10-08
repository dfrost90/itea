'use strict';

function MovieList(data) {
    this.data = data;

    this.search = function () {}
    this.sort = function (param) {
        switch (param) {
            case 'name':
                console.log('sorted by name');
                break;
            case 'rating':
                console.log('sorted by rating');
                break;
            case 'views':
                console.log('sorted by views');
                break;
            case 'date':
                console.log('sorted by date/year');
                break;
            default:
                console.log('default sorting by added');
        }
    }
    this.filter = function () {}
    this.render = function () {}
}