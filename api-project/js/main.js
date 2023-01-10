import "../styles/style.css";

const shibaapi = `http://shibe.online/api/shibes`;
const catapi = `http://shibe.online/api/cats`;
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

const createImage = function (data) {
  document
    .getElementById("api-response")
    .insertAdjacentHTML(
      "beforeend",
      `<img id="api-images" src="${data}" alt="">`
    );
};

document.querySelector("#shiba-btn").addEventListener("click", function () {
  getData(shibaapi);
});

document.querySelector("#cat-btn").addEventListener("click", function () {
  getData(catapi);
});

document.querySelector("#bird-btn").addEventListener("click", function () {
  getData(birdapi);
});
