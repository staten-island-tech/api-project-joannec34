import "../styles/style.css";

const dom = {
  form: document.querySelector("#form"),
  removebtn: document.querySelector("#remove-btn"),
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
  document.querySelector(".gallery").insertAdjacentHTML(
    "beforeend",
    `<div class="cards">
    <img class="images" src="${data.url}" alt="${data.id}">
    <button class="btns" id="fav-btn">☆</button>
    </div>`
  );
};

dom.form.addEventListener("submit", function (event) {
  let catnumber = dom.numberinput.value;
  const catapi = `https://api.thecatapi.com/v1/images/search?limit=${catnumber}`;
  event.preventDefault();
  getData(catapi);
});

dom.removebtn.addEventListener("click", function () {
  document.querySelectorAll(".gallery").forEach((card) => {
    card.textContent = ``;
  });
});
