import "../styles/style.css";

const catapi = `http://shibe.online/api/cats`;
const catfacts = `https://meowfacts.herokuapp.com/`;

const shibaapi = `http://shibe.online/api/shibes`;
const birdapi = `http://shibe.online/api/birds`;

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      createImage(data);
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}

getData(catfacts);

const createImage = function (data) {
  document.querySelector(".gallery").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <img id="api-images" src="${data}" alt="">
      </div>
      `
  );
};

document.querySelector("#cat-btn").addEventListener("click", function () {
  getData(catapi);
});

/* document.querySelector("#shiba-btn").addEventListener("click", function () {
  getData(shibaapi);
});

document.querySelector("#bird-btn").addEventListener("click", function () {
  getData(birdapi);
});
 */
