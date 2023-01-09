import "../styles/style.css";

const shibaapi = `http://shibe.online/api/shibes`;

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      document
        .getElementById("api-response")
        .insertAdjacentHTML(
          "afterbegin",
          `<img id="shiba-img" src="${data}" alt="">`
        );
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}

getData(shibaapi);
