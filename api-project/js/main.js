import "../styles/style.css";

const dom = {
  gallery: document.querySelector(".gallery"),
  favgallery: document.querySelector(".fav-gallery"),
  form: document.querySelector("#form"),
  removeallbtn: document.querySelector("#removeall-btn"),
  numberinput: document.querySelector("#numberinput"),
};

const apikey =
  "live_xiXRiLpizUwPBdLWpw9miwbyUjWdKECZjiGDjhaGRA1FsdiLQRUOUfUgfmbtZRqj";

async function getData(url) {
  try {
    const response = await fetch(url, { headers: { "x-api-key": apikey } });
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      data.forEach((array) => {
        createImage(array);
      });
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}

const createImage = function (data) {
  dom.gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="cards">
    <img class="images" src="${data.url}" alt="random cat image generated from thecatapi, image data: ${data.id}">
    <button class="btns" class="pin-btn">☆</button>
    </div>`
  );
};

dom.form.addEventListener("submit", function (event) {
  let catnumber = dom.numberinput.value;
  const catapi = `https://api.thecatapi.com/v1/images/search?limit=${catnumber}`;
  event.preventDefault();
  getData(catapi);
});

dom.removeallbtn.addEventListener("click", function () {
  document.querySelectorAll(".gallery").forEach((card) => {
    card.textContent = ``;
  });
});

document.getElementsByClassName(".pin-btn").onclick = function () {
  dom.favgallery.insertAdjacentHTML("beforeend", `hello`);
};
