    var data = {
        cols: [{
                title: "Люди",
                text: "покупают квартиры с продуманными планировками. Подъезды в которые приятно входить. Придомовую территорию, по которой хочеться гулять.",
                src: "img/citySm1.jpg"
            }, {
                title: "Заказчики",
                text: "спокойны, потому что знают — объекты Архиматики выгодно выделяются на фоне других застройщиков, а качество и продуманность на порядок выше.",
                src: "img/citySm1.jpg"
            }, {
                title: "Застройщики",
                text: "получают реальную к исполнению документацию, проработанную до последнего гвоздя. Получают вовремя!",
                src: "img/citySm1.jpg"
            }

        ]
    };
    var html = Mustache.render("{{#cols}}<div class='principlesSc-item principles-item'><img src='{{src}}'><h4 class='lol'>{{title}}</h4><p>{{text}}</p></div>{{/cols}}", data);
    var box = $('#principlesSc-block');
    box.html(html);