        const pics = [/*1*/"Egame-ai-art/1_hall.png", /*2*/"Egame-ai-art/1_hall.png", /*3*/"Egame-ai-art/2_lab.png", /*4*/"Egame-ai-art/2_lab.png", /*5*/"Egame-ai-art/3_despair.png", /*6*/"Egame-ai-art/3_despair.png", /*7*/"Egame-ai-art/4_rocket.png", /*8*/"Egame-ai-art/4_rocket.png", /*9*/"Egame-ai-art/5_cafe.png", /*10*/"Egame-ai-art/5_cafe.png", /*11*/"Egame-ai-art/6_station.png", /*12*/"Egame-ai-art/6_station.png", /*13*/"Egame-ai-art/7_inner.png", /*14*/"Egame-ai-art/7_inner.png", "Egame-ai-art/8_captain.png", "Egame-ai-art/8_captain.png", "Egame-ai-art/9_ship.png", "Egame-ai-art/9_ship.png", "Egame-ai-art/10_landscape.png", "Egame-ai-art/10_landscape.png", "Egame-ai-art/11_cosmogarden.png", "Egame-ai-art/11_cosmogarden.png", "Egame-ai-art/12_cosmogardener.png", "Egame-ai-art/12_cosmogardener.png", "Egame-ai-art/13_anothergarden.png", "Egame-ai-art/13_anothergarden.png", "Egame-ai-art/14_boat.png", "Egame-ai-art/14_boat.png", "Egame-ai-art/15_stationagain.png", "Egame-ai-art/15_stationagain.png", "Egame-ai-art/16_captainagain.png", "Egame-ai-art/16_captainagain.png", "Egame-ai-art/17_rain.png", "Egame-ai-art/17_rain.png", "Egame-ai-art/18_gates.png", "Egame-ai-art/18_gates.png", "Egame-ai-art/19_earthgarden.png", "Egame-ai-art/19_earthgarden.png", "Egame-ai-art/20_gardener.png", "Egame-ai-art/20_gardener.png", "Egame-ai-art/21_grannyhome.png", "Egame-ai-art/21_grannyhome.png", "Egame-ai-art/22_liveroom.png", "Egame-ai-art/22_liveroom.png", "Egame-ai-art/23_gallery.png", "Egame-ai-art/23_gallery.png", "Egame-ai-art/24_uniyard.png", "Egame-ai-art/24_uniyard.png", "Egame-ai-art/25_profroom.png", "Egame-ai-art/25_profroom.png", "Egame-ai-art/26_cars.png", "Egame-ai-art/26_cars.png", "Egame-ai-art/27_nighriver.png", "Egame-ai-art/27_nighriver.png", "Egame-ai-art/28_carnival.png", "Egame-ai-art/28_carnival.png"];
        const tasks = [/*1*/"Tasks/1.png", /*2*/"Tasks/2.png", /*3*/"Tasks/3.png", /*4*/"Tasks/4.png", /*5*/"Tasks/5.png", /*6*/"Tasks/6.png", /*7*/"Tasks/7.png", /*8*/"Tasks/8.png", /*9*/"Tasks/9.png", /*10*/"Tasks/10.png", /*11*/"Tasks/11.png", /*12*/"Tasks/12.png", /*13*/"Tasks/13.png", /*14*/"Tasks/14.png", "Tasks/15.png", "Tasks/16.png", "Tasks/17.png", "Tasks/18.png", "Tasks/19.png", "Tasks/20.png", "Tasks/21.png", "Tasks/22.png", "Tasks/23.png", "Tasks/24.png", "Tasks/25.png", "Tasks/26.png", "Tasks/27.png", "Tasks/28.png", "Tasks/29.png", "Tasks/30.png", "Tasks/31.png", "Tasks/32.png", "Tasks/33.png", "Tasks/34.png", "Tasks/35.png", "Tasks/36.png", "Tasks/37.png", "Tasks/38.png", "Tasks/39.png", "Tasks/40.png", "Tasks/41.png", "Tasks/42.png", "Tasks/43.png", "Tasks/44.png", "Tasks/45.png", "Tasks/46.png", "Tasks/47.png", "Tasks/48.png", "Tasks/49.png", "Tasks/50.png", "Tasks/51.png", "Tasks/52.png", "Tasks/53.png", "Tasks/54.png", "Tasks/55.png", "Tasks/56.png"];
        const answers = [/*1*/ 14, /*2*/ 7, /*3*/ 0.625, /*4*/ 11, /*5*/ 3, /*6*/ 2, /*7*/5, /*8*/8, /*9*/2.5, /*10*/5, /*11*/0.7, /*12*/6, /*13*/3, /*14*/3, /*15*/6, /*16*/3, /*17*/4, /*18*/9, /*19*/90, /*20*/5, /*21*/3, /*22*/5, /*23*/5, /*24*/3, /*25*/4.5, /*26*/5, /*27*/1.25, /*28*/8, /*29*/4, /*30*/5, /*31*/4, /*32*/4, /*33*/3, /*34*/2, /*35*/0.375, /*36*/0.3, /*37*/1.75, /*38*/0.5, /*39*/1.5, /*40*/1, /*41*/1.125, /*42*/16807, /*43*/256, /*44*/512, /*45*/36, /*46*/125, /*47*/729, /*48*/64, /*49*/1024, /*50*/128, /*51*/27, /*52*/72, /*53*/50, /*54*/4.8, /*55*/6.4, /*56*/5.5];
        const heroes = [/*1*/"Egame-ai-art/doc_clear.png", /*2*/"Egame-ai-art/doc_clear.png", /*3*/"Egame-ai-art/doc_clear.png", /*4*/"Egame-ai-art/doc_clear.png", /*5*/"Egame-ai-art/doc_clear.png", /*6*/"Egame-ai-art/doc_clear.png", /*7*/"Egame-ai-art/doc_clear.png", /*8*/"Egame-ai-art/doc_clear.png", /*9*/"Egame-ai-art/waitress_clear.png", /*10*/"Egame-ai-art/waitress_clear.png", /*11*/"Egame-ai-art/waitress_clear.png", /*12*/"Egame-ai-art/waitress_clear.png", /*13*/"Egame-ai-art/waitress_clear.png", /*14*/"Egame-ai-art/waitress_clear.png", /*15*/"Egame-ai-art/captain_clear.png", /*16*/"Egame-ai-art/captain_clear.png", /*17*/"Egame-ai-art/waitress_clear.png", /*18*/"Egame-ai-art/waitress_clear.png", /*19*/"Egame-ai-art/empty.png", /*20*/"Egame-ai-art/empty.png", /*21*/"Egame-ai-art/empty.png", /*22*/"Egame-ai-art/empty.png", /*23*/"Egame-ai-art/empty.png", /*24*/"Egame-ai-art/empty.png", /*25*/"Egame-ai-art/cosmogardener_clear.png", /*26*/"Egame-ai-art/cosmogardener_clear.png", /*27*/"Egame-ai-art/cosmogardener_clear.png", /*28*/"Egame-ai-art/cosmogardener_clear.png", /*29*/"Egame-ai-art/empty.png", /*30*/"Egame-ai-art/empty.png", /*31*/"Egame-ai-art/captain_clear.png", /*32*/"Egame-ai-art/captain_clear.png", /*33*/"Egame-ai-art/waitress_clear.png", /*34*/"Egame-ai-art/waitress_clear.png", /*35*/"Egame-ai-art/waitress_clear.png", /*36*/"Egame-ai-art/waitress_clear.png", /*37*/"Egame-ai-art/waitress_clear.png", /*38*/"Egame-ai-art/waitress_clear.png", /*39*/"Egame-ai-art/gardener_clear.png", /*40*/"Egame-ai-art/gardener_clear.png", /*41*/"Egame-ai-art/granny_clear.png", /*42*/"Egame-ai-art/granny_clear.png", /*43*/"Egame-ai-art/granny_clear.png", /*44*/"Egame-ai-art/granny_clear.png", /*45*/"Egame-ai-art/granny_clear.png", /*46*/"Egame-ai-art/granny_clear.png", /*47*/"Egame-ai-art/doc_clear.png", /*48*/"Egame-ai-art/doc_clear.png", /*49*/"Egame-ai-art/doc_clear.png", /*50*/"Egame-ai-art/doc_clear.png", /*51*/"Egame-ai-art/waitress_clear.png", /*52*/"Egame-ai-art/waitress_clear.png", /*53*/"Egame-ai-art/waitress_clear.png", /*54*/"Egame-ai-art/waitress_clear.png", /*55*/"Egame-ai-art/waitress_clear.png", /*56*/"Egame-ai-art/waitress_clear.png", "Egame-ai-art/hero_face.png"];
        const person_texts = [/*1*/"Земле угрожает засуха. Тебе нужно спасти планету от гибели! Для этого — решай математические задачи. Когда ты наводишь курсор на красную область — появляется окно с задачей, в которое нужно вписать правильный ответ. А если тебе попадается десятичная дробь, то вместо запятой используй точку.", /*2*/"Когда ты приходишь в спортивный зал, результат от тренировки не виден сразу — но он есть. Я согласен, что в эпоху умных машин в самих по себе квадратных корнях не много проку. Но навыки абстрактно мыслить, делать выводы и анализировать — бесценны.", /*3*/"Всё по началу трудно. Когда ты только появился на свет, тебе было трудно ходить или, допустим, держать в руках ложку. Но потом ты научился, и теперь делаешь это легко и не задумываясь. Или когда запускаешь незнакомую игру. Ты ещё не знаешь геймплей и вселенную, но с удовольствием осваиваешь их. Чтобы прийти туда, где не был, надо делать то, что ещё не делал. Развитие — это всегда выход из зоны комфорта. Но это и удовольствие.", /*4*/"У нас уже год не было дождей! Я и мои коллеги дни и ночи проводим в этой лаборатории, пытаемся понять, что происходит. Изучаем климат и растительность, но с каждым новым ответом появляется ещё больше загадок.", /*5*/"Решать задачи. Ещё несколько месяцев — и мы вовсе останемся без растительности.", /*6*/"Это точно. Но скоро Земля превратится в пустыню! Помоги нам разобраться.", /*7*/"Ходят слухи о Планете Вечнозелёных Садов. У них есть секрет Процветания, но открывают они его только тем, кто хорошо решает задачи. А я уже стар и не силён в математике.", /*8*/"Нужно отправиться в путешествие на ту планету и выведать их секрет. Ты поможешь мне?", /*9*/"Ты ищешь планету Вечнозелёных Садов? Ты очень смел. За 10 лет я ни разу не видела, чтобы кто-то оттуда вернулся, хотя желающих было много.", /*10*/"Если ты всё же хочешь продолжить поиски, то отправляйся на станцию Параллелепипеда. Её капитан укажет тебе дальнейший путь. Я помогу тебе добраться туда!", /*11*/"Вот эта станция! Она и правда походит на параллелепипед, верно?", /*12*/"Ох уж эти математики — дотошные душнилы!", /*13*/"Вон там рядом с иллюминатором стоит капитан, тебе нужно поговорить с ним.", /*14*/"На то они и приключения, чтобы быть странными и непривычными! Не бойся капитана — с виду он угрюмый и молчаливый, но внутри добрый и отзывчивый.", /*15*/"Чем могу быть полезен, молодой человек?", /*16*/"Ты смел и самонадеян, хаха. С чего ты взял, что Главный Садовник целой планеты будет разговаривать с каким-то мальчишкой с Земли? Мало ли у кого какие проблемы!.. Но раз ты здесь, не отступать же назад, верно? Через 5 минут на планету Вечнозелёных Садов как раз отправляется шаттл, я попрошу, чтобы тебя пустили на борт — дерзай!", /*17*/"Поторопись, шаттл уже готов к отправлению! Удачи!", /*18*/"Покажи им там всем! И привези на Землю секрет Процветания!", /*19*/"", /*20*/"", /*21*/"", /*22*/"", /*23*/"В моих владениях появился интересный новый гость! Чем могу вам помочь, молодой человек?", /*24*/"Молва обманчива, молодой человек! А уж если вы виделись с капитаном Параллелепипеда, то вообще нечему удивляться — он большой шутник. Некоторые гости задерживались у нас подольше, но любой сказке приходит конец — и нужно возвращаться к своим привычным делам.", /*25*/"Самый большой секрет Процветания в том, чтобы не мешать цветам цвести и растениям расти. Главное качество хорошего садовника — не мешать корням, дать всему идти своим чередом, терпеливо и с любовью наблюдать, как мудрая природа берёт своё. И если она запнулась — помочь ей подняться и продолжить путь.", /*26*/"Помочь росткам пробиться наружу — они хотят этого не меньше вас. Не переживай, я помогу вам. А сейчас иди отдохни, у тебя был длинный путь, и ты устал. Прогуляйся по нашей планете, наполнись впечатлениями, и не спеши. Завтра я приготовлю для специальный раствор, который тебе нужно будет передать профессору.", /*27*/"Та далёкая планета называется Сонный Гигант! Ходят слухи, что там живут существа, которые постоянно спят. Никто не знает, чем же они питаются и как умудряются выживать, хаха! Как тебе спалось?", /*28*/"Как я уже говорил, мы стараемся ей не мешать. Что же... вот держи склянку! Был рад знакомству, и прощай!", /*29*/"", /*30*/"", /*31*/"А ты крепче, чем я думал. Честно говоря, я не верил, что ты вернёшься. Ты стойкий малый. На той планете люди сходят с ума и погружаются в сон, который длится годами и никогда не заканчивается…", /*32*/"Не всё — то, чем кажется на первый взгляд. Но я горжусь тобой, ты — кремень. Зачем мне было пугать тебя ещё сильнее, ведь выбора у тебя не было — нужно было отправиться на планету. К тому же я увидел в твоих глазах, что ты справишься. Прощай! Заглядывай к нам ещё, теперь ты здесь желанный гость.", /*33*/"Не могу поверить, это дождь!", /*34*/"Видимо, дело не только в склянке. Сработали чары Садовника или твоё мужество!", /*35*/"Смотри, как всё быстро расцвело! Видимо, профессор расслабился и позволил природе сделать всё самой!", /*36*/"Вовсе нет! Если бы не ты, он бы ничего не понял сам! Тебе нужно подкрепиться!", /*37*/"Скоро наша планета станет похожа на планету Вечнозелёных Садов!", /*38*/"Да, было бы смешно, уйти от одной беды, нажив другую!", /*39*/"Уже третий день некогда присесть! Работа всё не заканчивается! Просто чудеса какие-то!", /*40*/"Не следует вам, молодой человек, слишком серьёзно относится к моей стариковской памяти! Но, по-моему, как только вы покинули Землю, климат резко сменился и пошли небывалые дожди.", /*41*/"Привет, мой дорогой! С возвращением!", /*42*/"Ох уж вы, мужчины, со своими вечными научными фокусами! Это правда, что уже три дня, как погода изменилась — с дня твоего отбытия! Но уверена, что профессор нет никакого умысла, и у него наверняка найдётся объяснение.", /*43*/"Но сначала выпей чаю, тебе нужно поесть!", /*44*/"Открою тебе секрет, её у меня всегда было очень много — и засуха её не коснулась.", /*45*/"Уж и не знаю, но я никогда ничего особенного от неё не хотела: она росла сама, сорняком.", /*46*/"Взгляни на эту галерею. Кажется, она выглядит так всю мою жизнь — с тех пор, как я была девчонкой. Так в чём же, по-твоему, секрет?", /*47*/"Да, мой друг, ты совершенно прав. Я послал тебя на планету Вечнозелёных Садов в искреннем отчаянии и уверенности, что только это нас спасёт. И в тот момент я расслабился, устал ломать голову, и просто позволил взять зелени своё. И, кажется, это и оказалось решением.", /*48*/"Ни в коем случае не зря! Без этого мы бы оба ничего не поняли.", /*49*/"Я тщательно изучил её в лаборатории. В растворе оказалась простая вода с маленьким зёрнышком сорной травы. Хаха!", /*50*/"Чтобы не дышать воздухом, который навевает сон. У них повсюду распылено специальное вещество, которое замедляет обмен веществ организмов и клонит их в сон. Этого факта я не знал, прости. Мне рассказал об этом капитан — сразу, как ты отправился со Станции домой.", /*51*/"Здорово у вас тут на Земле! Спасибо, что взял меня с собой!", /*52*/"И так много домов и людей!", /*53*/"Как красиво!", /*54*/"Какие?", /*55*/"А это что такое?! Как весело!", /*56*/"Это твоя заслуга!"];
        const hero_texts = [/*1*/"Математика — это скучно! Я не понимаю, какой толк решать эти задачи!", /*2*/"Но это трудно!", /*3*/"Ой, опять ты со своими нотациями! Классная у тебя лаборатория!",  /*4*/"Ладно, что ты предлагаешь мне делать?", /*5*/"Да уж... Не хочется жить в вечной пустыне.", /*6*/"Хорошо, помогу.", /*7*/"Вау! Звучит увлекательно!", /*8*/"Попробую сделать всё, что в моих силах!", /*9*/"Хм... Я думал, что это очень добрая планета... Может быть, им там было очень хорошо, и они не хотели возвращаться?", /*10*/"Спасибо! Я попробую найти эту планету, я обещал доктору помочь и не хочу нарушать обещание.", /*11*/"Скорее на цилиндр!", /*12*/"Иногда в мелочах и кроется вся суть.", /*13*/"Ух, не могу поверить, что ввязался в такое странное приключение!", /*14*/"Спасибо.", /*15*/"Капитан, привет! У нас на Земле затянувшаяся засуха. Мой друг профессор отправил меня найти планету Вечнозелёных Садов, чтобы узнать секрет процветания.", /*16*/"Спасибо, капитан!", /*17*/"Спасибо тебе за помощь!", /*18*/"Я обязательно вернусь, не сомневайся!", /*19*/"Ух ты, какая необычная планета! Неужели Земля тоже может быть такой!?", /*20*/"Какие тут причудливые пейзажи!", /*21*/"Вот уж и правда Планета Вечнозелёных Садов! Здесь так умиротворённо. Сомневаюсь, что кто-либо будет препятствовать моим поискам Главного Садовника.", /*22*/"Пойду к водопаду и по дороге разузнаю, где искать Садовника.", /*23*/"Добрый день! Странно... Мне рассказывали, что никто из туристов от вас ещё не возвращался! Но я вижу только спокойствие и доброжелательность. Ваши жители с радостью указали мне дорогу к вам!", /*24*/"Так в чём же секрет вашего Процветания?", /*25*/"Так что же делать нам на Земле, чтобы кончилась Засуха?", /*26*/"Спасибо, вы очень гостеприимны!", /*27*/"Прекрасно! Я весь вечер гулял. Ваша планета утопает в зелени!", /*28*/"Спасибо вам большое! Вы от меня просто так не отделаетесь! Если будут проблемы, я прилечу к вам снова!", /*29*/"Что же, пора снова отправляться на Станцию. Но на этой планете так хорошо… Вот бы ещё остаться здесь на пару дней… Ведь два-три дня ничего особенно не решат… И так хочется спать… Присесть под деревом и помечтать… Стоп! Мне нужно довести дело до конца, а отдыхать буду потом!", /*30*/"Всё-таки что-то не договаривает этот Садовник, какие-то чары сковывают мою волю… Есть тут какая-то усыпляющая сила… Надо поскорее выбираться. Поскорее бы пришёл шаттл...", /*31*/"Но Садовник и обитатели планеты показались мне милыми и приятными людьми! Почему же ты позволил мне отправиться туда, зная, чем я рискую?", /*32*/"Спасибо, капитан! Рад знакомству — и прощай!", /*33*/"Но я ведь ещё не передал склянку профессору… Ничего не понимаю!", /*34*/"Как странно!", /*35*/"Удивительно, выходит, я путешествовал зря…", /*36*/"Да, два дня мне кусок в горло не лез…", /*37*/"Надеюсь, мы здесь не уснём на годы, хаха!", /*38*/"Вот именно.", /*39*/"Третий? Но с момента, как я побывал на планете Вечнозелёных Садов, прошло всего два дня!", /*40*/"Выходит профессору вовсе не нужен был секрет планеты Вечнозелёных Садов? Зачем же он отправил меня на такой риск?", /*41*/"Бабушка! Что же это происходит?! Садовник сказал мне, что как только я улетел с Земли, погода резко изменилась… Выходит, я зря проделал такой долгий и опасный путь? Профессор обманул меня! Он знал секрет заранее!", /*42*/"Пойду, узнаю у него лично.", /*43*/"Хорошо. Как у тебя тут уютно! И сколько зелени!", /*44*/"Как же так?", /*45*/"Кажется, я начинаю понимать секрет профессора.", /*46*/"Кажется, садовник был прав: главный секрет в том, чтобы не мешать зелени расти. А склянка с раствором — для отвода глаз, просто театр.", /*47*/"Выходит, всё-таки я улетел не зря.", /*48*/"Да, интересно получилось. И всё же я привёз тебе склянку Садовника. Интересно, что в ней.", /*49*/"А Садовник шутник… Почему же на собственной планете он всё время в скафандре?", /*50*/"К счастью, всё обошлось.", /*51*/"Я рад, что тебе понравилось! Помимо зелени и сна у нас есть много интересных и увлекательных вещей!", /*52*/"Да, бодрствующих людей, хаха!", /*53*/"Да, кроме красоты природы, у нас есть и другие виды красоты!", /*54*/"Красота культуры, цивилизации и науки.", /*55*/"Это карнавал в честь окончания Засухи!", /*56*/"Спасибо, но я так не думаю! Каждый сыграл свою роль в этой истории. Теперь можно насладиться результатом своих трудов и отдохнуть! Пойдём!"];

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const hero = document.getElementById("hero");
        const person = document.getElementById("person");
        const hero_face = document.getElementById("hero_face");

        let squareXStart;
        let squareYStart;
        let squareXEnd;
        let squareYEnd;
        let scene = 0;
        let start_flag = true;

        function startGame(){
            start_flag = false;
            document.getElementById("start-container").style.display = "none";
            person.style.background = "none";
            hero_face.style.background = "none";
            if (scene !== 56){
                canvas.style.background = `url(${pics[scene]})`;
                canvas.style.backgroundRepeat = 'no-repeat';
                canvas.style.backgroundSize = 'cover';

                makeScene(scene, person_texts[scene], hero_texts[scene]);

                set_random_rect();
                document.addEventListener('mousemove', hero_search);
            }
        }

        function makeScene(person_id, person_text, hero_text){
            person.style.background = `url(${heroes[person_id]})`;
            person.style.backgroundRepeat = 'no-repeat';
            person.style.backgroundSize = 'cover';

            if (scene == 0 || scene == 1){
                hero_face.style.background = "none";
            }
            else {
                hero_face.style.background = `url(${heroes[56]})`;
            }
            if (scene == 6 || scene == 7){
                hero_face.style.left = "59%";
                hero_face.style.top = "67%";
                hero_face.style.width = "4%";
                hero_face.style.height = "16%";
                person.style.left = "43%";
                person.style.top = "68%";
                person.style.width = "4%";
                person.style.height = "16%";
            }
            else if (scene == 8 || scene == 9){
                hero_face.style.left = "48%";
                hero_face.style.top = "40%";
                person.style.top = "47%";
                person.style.left = "31%";
                hero_face.style.width = "14%";
                hero_face.style.height = "55%";
                person.style.width = "14%";
                person.style.height = "47%";
            }
            else if (scene == 14 || scene == 15){
                hero_face.style.left = "48%";
                hero_face.style.top = "31%";
                person.style.top = "36%";
                person.style.left = "17%";
                person.style.width = "27%";
                person.style.height = "50%";
            }
            else if (scene == 18 || scene == 19){
                hero_face.style.top = "70%";
                hero_face.style.width = "4.5%";
                hero_face.style.height = "18%";
            }
            else if (scene == 20 || scene == 21){
                hero_face.style.top = "54%";
                hero_face.style.left = "47%";
                hero_face.style.width = "4.5%";
                hero_face.style.height = "18%";
            }
            else if (scene == 24 || scene == 25){
                hero_face.style.top = "38%";
                hero_face.style.left = "78%";
                hero_face.style.width = "12%";
                hero_face.style.height = "46%";
            }
            else if (scene == 26 || scene == 27){
                hero_face.style.top = "24%";
                hero_face.style.left = "80%";
                person.style.top = "47%";
                person.style.left = "26%";
                hero_face.style.width = "12%";
                hero_face.style.height = "46%";
            }
            else if (scene == 30 || scene == 31){
                hero_face.style.left = "48%";
                hero_face.style.top = "31%";
                person.style.top = "36%";
                person.style.left = "17%";
                person.style.width = "27%";
                person.style.height = "50%";
            }
            else if (scene == 38 || scene == 39){
                hero_face.style.top = "44%";
                hero_face.style.left = "68%";
                person.style.top = "44%";
                person.style.left = "33%";
                person.style.width = "17%";
                person.style.height = "55%";
            }
            else if (scene == 40 || scene == 41){
                hero_face.style.top = "42%";
                hero_face.style.left = "74%";
                hero_face.style.width = "12%";
                hero_face.style.height = "46%";
                person.style.top = "50%";
                person.style.left = "24%";
                person.style.width = "12%";
                person.style.height = "41%";
            }
            else if (scene == 42 || scene == 43){
                hero_face.style.top = "37%";
                hero_face.style.left = "74%";
                person.style.top = "43%";
                person.style.left = "12%";
                person.style.width = "17%";
                person.style.height = "56%";
                hero_face.style.width = "17%";
                hero_face.style.height = "61%";
            }
            else if (scene == 46 || scene == 47){
                hero_face.style.top = "42%";
                hero_face.style.left = "58%";
            }
            else if (scene == 48 || scene == 49){
                hero_face.style.top = "40%";
                hero_face.style.left = "58%";
            }
            else if (scene == 50 || scene == 51){
                hero_face.style.top = "80%";
                hero_face.style.left = "54%";
                person.style.top = "80%";
                person.style.left = "44%";
                hero_face.style.width = "4.5%";
                hero_face.style.height = "18%";
                person.style.width = "4%";
                person.style.height = "16%";
            }
            else if (scene == 52 || scene == 53){
                hero_face.style.top = "58%";
                hero_face.style.left = "82%";
                person.style.top = "70%";
                person.style.left = "29%";
                hero_face.style.width = "4.5%";
                hero_face.style.height = "18%";
                person.style.width = "4%";
                person.style.height = "16%";
            }
            else if (scene == 54 || scene == 55){
                hero_face.style.top = "78%";
                hero_face.style.left = "59%";
                person.style.top = "80%";
                person.style.left = "48%";
                hero_face.style.width = "5%";
                hero_face.style.height = "20%";
                person.style.width = "4.5%";
                person.style.height = "18%";
            }
            else {
                hero_face.style.top = "40%";
                hero_face.style.left = "68%";
                person.style.top = "47%";
                person.style.left = "31%";
                hero_face.style.width = "14%";
                hero_face.style.height = "55%";
                person.style.width = "14%";
                person.style.height = "47%";
            }
            hero_face.style.backgroundRepeat = 'no-repeat';
            hero_face.style.backgroundSize = 'cover';

            if (person_text != ""){
            	const dialog = document.getElementById("dialog");
            	dialog.textContent = person_text;
            	dialog.style.display = "block";
        	}
            const dialog_hero = document.getElementById("dialog_hero");
            dialog_hero.textContent = hero_text;
            dialog_hero.style.display = "block";
        }

        function set_random_rect(){
            const gameContainer = document.getElementById("game-container");
            const width = gameContainer.clientWidth;
            const height = gameContainer.clientHeight;

            const squareSize = 0.1; // 10% от width и height
            const squareWidth = squareSize * width;
            const squareHeight = squareSize * height;

            // Генерируем случайные координаты для начала квадрата
            squareXStart = Math.random() * (width - squareWidth) + 30;
            squareYStart = Math.random() * (height - squareHeight) + 70;

            squareXEnd = squareXStart + squareWidth;
            squareYEnd = squareYStart + squareHeight;

            ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

            ctx.fillRect(squareXStart, squareYStart, squareWidth, squareHeight);
            //ctx.fillRect(5, 5, 30, 30);
        }

        function hero_search(e){
            const gameContainer = document.getElementById("game-container");
            const rect = gameContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - hero.offsetWidth / 2;
            const y = e.clientY - rect.top - hero.offsetHeight / 2;

            hero.style.left = `${x}px`;
            hero.style.top = `${y}px`;

            if (x >= (squareXStart - 30) && x <= (squareXEnd + 30) && y >= (squareYStart - 70) && y <= squareYEnd) {
                document.removeEventListener('mousemove', hero_search);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                createMathProblem();
                createInputCanvas();
            }
        }

        function createMathProblem() {
            document.getElementById("dialog").style.display = "none";
            document.getElementById("dialog_hero").style.display = "none";
            if (!document.getElementById("mathCanvas")) {
                const mathCanvas = document.createElement("div");
                mathCanvas.id = "mathCanvas";
                mathCanvas.style.width = "50%";
                mathCanvas.style.height = "20%";
                mathCanvas.style.background = "white";
                mathCanvas.style.backgroundImage = `url(${tasks[scene]})`;
                mathCanvas.style.backgroundSize = "contain";
                mathCanvas.style.backgroundRepeat = "no-repeat";
                mathCanvas.style.backgroundPosition = "center";
                document.getElementById("game-container").appendChild(mathCanvas);
            }
        }

        function createInputCanvas() {
            if (!document.getElementById("inputCanvas")) {
                const inputCanvas = document.createElement("div");
                inputCanvas.id = "inputCanvas";
                inputCanvas.style.background = "blue";
                const answerInput = document.createElement("input");
                answerInput.id = "answerInput";
                answerInput.type = "number"; // Input type for numbers
                answerInput.placeholder = "Введи ответ";

                const submitButton = document.createElement("button");
                submitButton.innerText = "Подать ответ";
                submitButton.onclick = checkAnswer;

                inputCanvas.appendChild(answerInput);
                inputCanvas.appendChild(submitButton);
                document.getElementById("game-container").appendChild(inputCanvas);
            }
        }

        function checkAnswer() {
            const answerInput = document.getElementById("answerInput");
            const answer = parseFloat(answerInput.value, 10);

            if (answer === answers[scene]) {
                document.getElementById("mathCanvas").remove();
                document.getElementById("inputCanvas").remove();
                scene++;
                if (scene === 56){
                    person.style.background = "none";
                    hero_face.style.background = "none";

                    canvas.style.background = `url(${pics[scene-1]})`;
                    canvas.style.backgroundRepeat = 'no-repeat';
                    canvas.style.backgroundSize = 'cover';
                    if (!document.getElementById("mathCanvas")) {
                        const mathCanvas = document.createElement("div");
                        mathCanvas.id = "mathCanvas";
                        mathCanvas.style.width = "40%";
                        mathCanvas.style.height = "20%";
                        mathCanvas.style.backgroundPosition = "center";
                        mathCanvas.style.display = "flex";
                        mathCanvas.style.flexDirection = "column";
                        mathCanvas.style.alignItems = "center";
                        mathCanvas.style.justifyContent = "center";
                        mathCanvas.style.border = "1px solid #000";
                        mathCanvas.style.padding = "20px";
                        mathCanvas.style.background = "rgb(0, 0, 255, 0.5)";
                        const message = document.createElement("p");
                        message.textContent = "ТЫ ПОБЕДИЛ";
                        message.style.padding = "5%";
                        message.style.background = "rgb(199, 108, 105)";
                        mathCanvas.appendChild(message);

                        //const donateMessage = document.createElement("p");
                        //donateMessage.textContent = "Отправить донат";
                        //mathCanvas.appendChild(donateMessage);

                        const donateButton = document.createElement("button");
                        donateButton.textContent = "Отправить донат";
                        donateButton.onclick = function() {
                            window.location.href = "https://tips.yandex.ru/guest/payment/3057651";
                        };
                        mathCanvas.appendChild(donateButton);

                        const donateMessage = document.createElement("p");
                        donateMessage.textContent = "";
                        mathCanvas.appendChild(donateMessage);

                        const subscribeButton = document.createElement("button");
                        subscribeButton.textContent = "Подписаться на канал";
                        subscribeButton.onclick = function() {
                            window.location.href = "https://t.me/habaznya_math";
                        };
                        mathCanvas.appendChild(subscribeButton);

                        const emptyMessage = document.createElement("p");
                        emptyMessage.textContent = "";
                        mathCanvas.appendChild(emptyMessage);

                        document.getElementById("game-container").appendChild(mathCanvas);
                        }
                }
                startGame();
            } else {
                document.getElementById("mathCanvas").remove();
                document.getElementById("inputCanvas").remove();
                scene = 0;
                startGame();
            }
        }

        function resizeCanvas() {
            const gameContainer = document.getElementById("game-container");
            const size = Math.min(window.innerWidth, window.innerHeight);
            gameContainer.style.width = `${size}px`;
            gameContainer.style.height = `${size}px`;
            canvas.width = size;
            canvas.height = size;
            if (start_flag==false){
                set_random_rect();
            }
            
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        canvas.style.background = `url("Egame-ai-art/1_hall.png")`;
        canvas.style.backgroundRepeat = 'no-repeat';
        canvas.style.backgroundSize = 'cover';

        document.getElementById("start-button").addEventListener("click", startGame);
