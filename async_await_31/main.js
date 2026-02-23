// #1 За допомогою ajax-запиту вивести погоду
//
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
// q=XXX - місто, для якого показати погоду

// Вводимо в інпут назву міста, натискаємо кнопку Погода
// Якщо таке місто не існує (404), виводимо напис, що таке місце не знайдено
// Якщо місто існує, виводимо наступну інформацію:
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки (виводимо картинку з таким урлом, як нам повернувся)
// http://openweathermap.org/img/w/10d.png

const inputCity = document.getElementById("inputCity");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", async () => {
  const cityName = inputCity.value;
  const data = await getWeather(cityName);
  if (data.cod === 200) {
    result.innerHTML = `city: ${data.name}<br>
    Temp: ${data.main.temp} °C<br>
    Pressure: ${data.main.pressure} hPa<br>
    Description: ${data.weather[0].description}<br>
    Humidity: ${data.main.humidity}%<br>
    Speed: ${data.wind.speed} m/s, deg ${data.wind.deg}°<br>
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"> `;
  } else if (!data || data.cod === "404") {
    result.innerHTML = "City is not found";
  } else {
    result.innerHTML = "Something went wrong";
  }
});

async function getWeather(name) {
  const cityName = name.toUpperCase();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

// За бажанням:
// #2 Використовуючи API https://jsonplaceholder.typicode.com/ зробити отримання поста за ід.
// На сторінку вивести інпут та кнопку Пошук
// Ід поста має бути введений в інпут (валідація: ід від 1 до 100)
// Якщо знайдено пост, то вивести на сторінку нижче блок з постом і зробити кнопку для отримання коментарів до посту.
// По клику на кнопку коментарі має бути виведені нижче під постом коментарі до цього посту
// Якщо зробити Пошук нового поста, старий пост та коментарі видаляються зі сторінки
// Зробити завдання використовуючи проміси, перехопити помилки.

const inputSearch = document.getElementById("inputSearch");
const searchButton = document.getElementById("searchButton");
const searchResult = document.getElementById("searchResult");

searchButton.addEventListener("click", () => {
  const infoSearch = parseInt(inputSearch.value);

  if (isNaN(infoSearch)) {
    searchResult.innerHTML = `Enter a number`;
  } else if (infoSearch < 1 || infoSearch > 100) {
    searchResult.innerHTML = `Enter a number from 1 to 100`;
  } else if (infoSearch >= 1 && infoSearch <= 100) {
    search(infoSearch);
  }
});

async function search(num) {
  searchResult.innerHTML = "";
  const searchPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${num}`,
  );
  const datasearchPost = await searchPost.json();
  searchResult.innerHTML = `<h3>${datasearchPost.title}</h3><br>
  <p>${datasearchPost.body}</p><br>
  <button id="commentsButton">Show comments</button>`;

  const commentsButton = document.getElementById("commentsButton");
  commentsButton.addEventListener("click", async () => {
    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${num}/comments`,
    );
    const comments = await commentsResponse.json();
    searchResult.innerHTML += "<h4>Comments:</h4>";
    comments.forEach((comment) => {
      searchResult.innerHTML += `<p>${comment.email}: ${comment.body}</p>`;
    });
  });
}
