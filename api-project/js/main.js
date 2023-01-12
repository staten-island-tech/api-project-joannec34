import "../styles/style.css";

const catapi = `http://shibe.online/api/cats`;
const catfacts = `https://meowfacts.herokuapp.com/`;

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      if (url == catapi) {
        createImage(data);
      } else {
        createFact(data);
      }
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}

const createImage = function (data) {
  document
    .querySelector(".card")
    .insertAdjacentHTML(
      "beforeend",
      `<img id="api-images" src="${data}" alt="">`
    );
};

const createFact = function (data) {
  document
    .querySelector(".card")
    .insertAdjacentHTML("beforeend", `<p>Did you know? ${data.data}</p>`);
};

document.querySelector("#cat-btn").addEventListener("click", function () {
  getData(catapi);
  getData(catfacts);
});
