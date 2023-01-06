import "../styles/style.css";

const catgifs = `https://cataas.com`;

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data;
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}

getData(catgifs);
