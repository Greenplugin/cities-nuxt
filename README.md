После клонирования поставить зависимости ```yarn install``` и можно запускать ```yarn dev```

Тот же самый Vuetify, конечно, значительно упростил бы проект, тут его нету.

Json взял с реальными городами и с реальной температурой (поэтому их там не 6 а 30), 
просто сконвертировал ответ от openweathermap.org, причем это заняло приблизительно столько же времени, 
сколько написание своего. Json залил на git и получаю к нему доступ через my-json-server.typicode.com, 
он доступен по адресу https://my-json-server.typicode.com/greenplugin/cities-with-weather-json/cities
 
 > При первой загрузки, перед рендерингом страницы - записать данные из data.json во Vuex и в дальнейшем работать через Vuex
 
 Тут я немного отошел от условия, загрузил Json на серверной части в хуке nuxtServerInit потому что 
 в этом приложении один и тот же json используется постоянно и делать проверку на то, загружен он или нет, 
 тут не вижу смысла. Если бы приложение реализовывало как минимум две каких-либо функции, например это был бы
 редактор городов и редактор пользователей, то в этом случае, логично было бы загружать данные тогда, когда 
 пользователь заходит на нужную страницу, можно было бы это делать в fetch и либо каждый раз загружать данные при 
 открытии компонента, либо загружать и кешировать их. все же nuxtServerInit предназначен для загрузки данных которые 
 использует все приложение и без которых оно работать нормально не может.
 
 Пагинация, как и остальные модули реализует только тот необъодимый минимум, который описан в задании.