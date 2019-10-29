// data
var movieListData = [
    {
        "ID": "1",
        "Title": "Рэмбо: Последняя кровь",
        "TitleAlt": "Rambo: Last Blood",
        "rating": 6.7,
        "url": "#",
        "srcImage": "images/movies/last_blood.jpg",
        "year": "01",
        "genre": "Триллеры,  Приключения,  Боевики,  Вестерн",
        "director": "Адриан Грюнберг",
        "country": "США",
        "Actors": ["Сильвестр Сталлоне", "Пас Вега", "Луис Мэндилор", "Оскар Хаэнада", "Хоакин Косио", "Ивет Монреаль", "Серхио Перис-Менчета", "Шила Шах", "Адриана Барраса", "Джессика Мэдсен"],
        "info": "Ветеран Вьетнамской войны и несокрушимая «боевая машина» Джон Рэмбо пытается наладить спокойную жизнь на ранчо. Он вынужден покинуть тихое место и отравиться в Мексику, чтобы спасти похищенную дочь своего друга. На Рэмбо снова ложится миссия, непосильная для простого смертного, – противостоять могущественному и беспощадному наркокартелю."
    },
    {
        "ID": "2",
        "Title": "El Camino: Во все тяжкие",
        "TitleAlt": "El Camino: A Breaking Bad Movie",
        "rating": 7.6,
        "url": "#",
        "srcImage": "images/movies/el_camino.jpg",
        "genre": "Драмы, Криминал",
        "year": "2019",
        "director": "Винс Гиллиган",
        "country": "США",
        "Actors": ["Аарон Пол", "Брайан Крэнстон", "Джесси Племонс", "Мэтт Джонс", "Джонатан Бэнкс", "Чарльз Бэйкер", "Ларри Хэнкин", "Кевин О. Ранкин", "Тесс Харпер", "Марла Гиббс"],
        "info": "Действие криминально-драматического фильма «El Camino: Во все тяжкие» разворачивается сразу же после событий, показанных в финале сериала. В центре истории оказывается Джесси Пинкман, оказавшийся в трудной ситуации. Еще совсем недавно он занимался производством наркотиков и был замешан в сложных преступных махинациях. Он был партнером Уолтера Уайта, которому удалось пройти путь от законопослушного гражданина до опасного гангстера и наркобарона. Но сейчас Пинман хочет другого."
    },
    {
        "ID": "3",
        "Title": "К звёздам",
        "TitleAlt": "Ad Astra",
        "rating": 7,
        "url": "#",
        "srcImage": "images/movies/ad_astra.jpg",
        "genre": "Драмы, Триллеры, Фантастика, Приключения, Детектив",
        "year": "2019",
        "director": "Джеймс Грэй",
        "country": "Бразилия, США",
        "Actors": ["Брэд Питт", "Лив Тайлер", "Томми Ли Джонс", "Дональд Сазерленд", "Джон Ортис", "Рут Негга", "Грег Брайк", "Лорен Дин", "Кимберли Элиз", "Джон Финн"],
        "info": "Предыстория научно-фантастического фильма «К звёздам» рассказывает об ученом по имени Клиффорд МакБрайд, который занимается проведением сложных научных экспериментов. Его исследования не только важны, но и опасны. Некоторые считают, что они могут угрожать человеческой цивилизации. Но однажды Клиффорд пропадает. Он словно исчезает, не оставляя после себя ничего."
    },
    {
        "ID": "4",
        "Title": "Эверест",
        "TitleAlt": "Abominable",
        "rating": 7,
        "url": "#",
        "srcImage": "images/movies/abominalble.jpg",
        "genre": "Семейный, Фэнтези, Приключения, Мультфильмы, Комедия",
        "year": "2019",
        "director": "Джилл Калтон, Тодд Вилдерман",
        "country": "Китай, США",
        "Actors": ["Альберт Цай", "Хлоя Беннет", "Сара Полсон", "Эдди Иззард", "Тензинг Норгай Трэйнор", "Мишель Вонг"],
        "info": "Главной героиней полнометражного анимационного фильма с названием «Эверест» оказывается Лу, любящая приключения и путешествия. А еще она любит помогать тем, кто оказался в непростой ситуации. Но Лу еще не знает, что вскоре эта черта характера приведет ее к самому необычному путешествию, которое раз и навсегда изменит ее жизнь."
    },
    {
        "ID": "5",
        "Title": "Падение ангела",
        "TitleAlt": "Angel Has Fallen",
        "rating": 6.7,
        "url": "#",
        "srcImage": "images/movies/angel_has_fallen.jpg",
        "genre": "Драмы, Триллеры, Боевики",
        "year": "2019",
        "director": "Рик Роман Во",
        "country": "США",
        "Actors": ["Джерард Батлер, Пайпер Перабо, Морган Фриман, Джада Пинкетт Смит, Лэнс Реддик, Ник Нолти, Тим Блейк Нельсон, Дэнни Хьюстон, Крис Браунинг, Майкл Лэндис"],
        "info": "Действие драматического триллера «Падение ангела» с элементами боевика начинается в тот момент, когда президент США оказывается под ударом. Совершается хорошо спланированное нападение, целью которой становится ликвидация лидера страны. Сразу же после этого проводится активное расследование, которое показывает, что главным подозреваемым может быть только один человек. По несправедливому стечению обстоятельств этим человеком оказывается Майк Бэннинг, служащий в секретном подразделении и занимающийся защитой президента."
    },
    {
        "ID": "6",
        "Title": "Аббатство Даунтон",
        "TitleAlt": "Downton Abbey",
        "rating": 7.7,
        "url": "#",
        "srcImage": "images/movies/downton_abbey.jpg",
        "genre": "Драмы",
        "year": "2019",
        "director": "Майкл Энглер",
        "country": "Великобритания",
        "Actors": ["Таппенс Мидлтон, Пенелопа Уилтон, Мэгги Смит, Аллен Лич, Мишель Докери, Элизабет МакГоверн, Джоанн Фроггатт, Имелда Стонтон, Ракель Кэссиди, Хью Бонневилль"],
        "info": "Британский полнометражный драматический фильм «Аббатство Даунтон», основанный на одноименном сериале, рассказывает своим зрителям удивительную историю одной семьи. Перед взором зрителей оказывается семейство Кроули, живущее в одном из самых дорогих мест страны. У них огромное поместье, находящееся в английской сельской местности. Перед ними открываются живописные виды. И несмотря на то, что они находятся далеко за пределами больших городов, жизнь здесь бурлит и кипит."
    },
    {
        "ID": "7",
        "Title": "Хорошие мальчики",
        "TitleAlt": "Good Boys",
        "rating": 6.8,
        "url": "#",
        "srcImage": "images/movies/good_boys.jpg",
        "genre": "Комедия, Приключения",
        "year": "2019",
        "director": "Джин Ступницки",
        "country": "США",
        "Actors": ["Джейкоб Тремблей, Молли Гордон, Уилл Форте, Ретта, Брэйди Нун, Кит Л. Уильямс, Лил Релл, Милли Дэвис, Мидори Френсис, Чэнс Херстфилд"],
        "info": "Комедийный фильм «Хорошие мальчики» знакомит нас с двенадцатилетним парнем по имени Макс. Его впервые в жизни приглашают на вечеринку. И это Макса сильно волнует. Но больше всего у него вызывает стресс тот факт, что эта вечеринка посвящена поцелуям. Он никогда в своей жизни не целовался и не знает, как это нужно делать. Из-за этого Макс впадает в панику."
    },
    {
        "ID": "8",
        "Title": "Оно 2",
        "TitleAlt": "It Chapter Two",
        "rating": 6.9,
        "url": "#",
        "srcImage": "images/movies/it_2.jpg",
        "genre": "Ужасы",
        "year": "2019",
        "director": "Андрес Мускетти",
        "country": "Канада, США",
        "Actors": ["Джессика Честейн, Джеймс МакЭвой, Билл Хейдер, Айзая Мустафа, Джей Райан, Джеймс Рэнсон, Энди Бин, Билл Скарсгард, Джейден Мартелл, Уайатт Олефф"],
        "info": "Действие фильма ужасов «Оно 2» начинает свое развитие в тот момент, когда Майк Хэнлон через полицейских узнает о том, что Пеннивайз, устроивший много лет назад кровавую резню, вновь вернулся для того, чтобы совершать жуткие поступки. Поначалу Майк скептически относится к этой информации, поэтому он решает проверить место происшествия, где был замечен ужасающий клоун. Оказавшись на месте, он понимает, что Пеннивайз вновь охотится за своими жертвами."
    },
    {
        "ID": "9",
        "Title": "Джокер",
        "TitleAlt": "Joker",
        "rating": 8.9,
        "url": "#",
        "srcImage": "images/movies/joker.jpg",
        "genre": "Драмы, Триллеры, Криминал",
        "year": "2019",
        "director": "Тодд Филлипс",
        "country": "Канада, США",
        "Actors": ["Хоакин Феникс, Роберт Де Ниро, Зази Битц, Фрэнсис Конрой, Бретт Каллен, Шей Уигэм, Билл Кэмп, Гленн Флешлер, Ли Гилл, Джош Пэйс"],
        "info": "Действие криминально-драматического триллера «Джокер», основанного на одноименном персонаже комиксов DC, начинает свое развитие в мрачном городе под названием Готэм. Уровень преступности здесь всегда высок, однако у города есть свои защитники. Но у всех защитников есть свои враги."
    },
    {
        "ID": "10",
        "Title": "Король Лев",
        "TitleAlt": "The Lion King",
        "rating": 7,
        "url": "#",
        "srcImage": "images/movies/lion_king.jpg",
        "genre": "Драмы, Мюзикл, Семейный, Приключения, Мультфильмы",
        "year": "2019",
        "director": "Джон Фавро",
        "country": "Канада, США",
        "Actors": ["Сет Роген, Элфри Вудард, Чиветель Эджиофор, Дональд Гловер, Кигэн-Майкл Ки, Эми Седарис, Джеймс Эрл Джонс, Билли Айкнер, Бейонсе, Эрик Андре"],
        "info": "Действие семейного мультфильма «Король Лев» начинается в тот момент, когда у верховного правителя саванны появляется наследник, которому когда-нибудь предстоит занять место своего отца. Это событие становится настоящим праздником для многих зверей, живущих в этих местах. Однако далеко не все этому рады. Есть среди зверей и те, которые хотят захватить власть и уничтожить главного правителя. Они прячутся, надеясь на то, что смогут найти подходящее время для того, чтобы нанести удар."
    }
]
