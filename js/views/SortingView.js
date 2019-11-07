(function () {
    function SortingView(container) {
        this.container = container || document.querySelector('.sorting-container');
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'sort-by dropdown');

        this.sortByList = [
            {
                name: "Name",
                rule: "Title"
            },
            {
                name: "Rating",
                rule: "Rating"
            },
            {
                name: "Year",
                rule: "Year"
            }
        ];
    }

    SortingView.prototype.render = function () {
        var sortingHtml, rulesHtml = ``;
        var sortBy = undefined;
        var sortOrder = false;

        this.sortByList.forEach(sorting => {
            rulesHtml += `<a class="dropdown-item" data-sorting-rule="${sorting.rule}" href="#">${sorting.name}</a>`;
        });

        sortingHtml = `
            <button class="btn btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by <span id="sort-by-value"></span>
            </button>
            <button class="sort-order ml-3 hidden" type="button"><span class="sort-order-icon"></span></button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                ${rulesHtml}
            </div>
        `;

        this.element.insertAdjacentHTML('beforeend', sortingHtml);
        this.container.append(this.element);

        this.sortOrderEl = document.querySelector('.sort-order');

        this.container.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown-item')) return;

            var sortByValueEl = document.querySelector('#sort-by-value');
            sortBy = e.target.closest('.dropdown-item').dataset.sortingRule;
            window.movieList.sort(sortBy);
            movieListView.render(window.movieListData);

            if (sortBy) {
                this.sortOrderEl.classList.remove('hidden');
                sortByValueEl.innerText = e.target.closest('.dropdown-item').innerText;
            } else {
                this.sortOrderEl.classList.add('hidden');
            }
        });

        this.sortOrderEl.addEventListener('click', (e) => {
            this.sortOrderEl.classList.toggle('active');

            sortOrder = !sortOrder;

            window.movieList.sort(sortBy, sortOrder);
            movieListView.render(window.movieListData);
        });
    }

    window.SortingView = SortingView;
})()