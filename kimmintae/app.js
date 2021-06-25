const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

ajax.open("GET", NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);

const ul = document.createElement("ul");
let tmp = "";
for (let i = 0; i < newsFeed.length; i++) {
  /*const li = document.createElement("li");
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);*/
  tmp += `<li>${newsFeed[i].title}</li>`;
}
ul.innerHTML = tmp;

document.getElementById("root").appendChild(ul);
