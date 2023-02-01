import "../styles/style.css";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      createCard(data.data);
      addRows(data.data);
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}
//getData("https://valorant-api.com/v1/weapons");

function create(uuid) {
  const api = `https://valorant-api.com/v1/weapons/${uuid}`;
  getData(api);
}

const createCard = function (weap) {
  document.querySelector(".api-response").innerHTML = `<div class="card-col1">
      <h3>${weap.displayName}</h3>
       <h4>${weap.shopData.categoryText}</h4>
       <h4>${weap.shopData.cost} credits</h4>
          <ul class="weapon-stats">
            <li>fire rate: ${weap.weaponStats.fireRate} rds/sec</li>
        <li>equip speed: ${weap.weaponStats.equipTimeSeconds} sec</li>
        <li>first shot accuracy: ${weap.weaponStats.firstBulletAccuracy} deg</li>
        <li>magazine size: ${weap.weaponStats.magazineSize} rds</li>
        <li>reload speed: ${weap.weaponStats.reloadTimeSeconds} sec</li>
          <ul>
    </div>
    <div class="card-col2">
      <img class="images" src="${weap.displayIcon}" alt="image of the weapon "${weap.displayName}" from VALORANT">

      <table class="dmg-table">
        <tr class="row1">
          <td>range</td>
          <td>headshot</td>
          <td>bodyshot</td>
          <td>legshot</td>
        </tr>
        <tr>
           <td>${weap.weaponStats.damageRanges[0].rangeStartMeters} - ${weap.weaponStats.damageRanges[0].rangeEndMeters} m</td>
            <td>${weap.weaponStats.damageRanges[0].headDamage} DMG</td>
           <td>${weap.weaponStats.damageRanges[0].bodyDamage} DMG</td>
           <td>${weap.weaponStats.damageRanges[0].legDamage} DMG</td>
        </tr>
      </table>
    </div>`;
};

function addRows(weap) {
  let array = weap.weaponStats.damageRanges;
  let table = document.querySelector(".dmg-table");
  if (array.length == 2) {
    console.log("2");
    table.insertAdjacentHTML(
      "beforeend",
      `<tr>
    <td>${weap.weaponStats.damageRanges[1].rangeStartMeters} - ${weap.weaponStats.damageRanges[1].rangeEndMeters} m</td>
    <td>${weap.weaponStats.damageRanges[1].headDamage} DMG</td>
    <td>${weap.weaponStats.damageRanges[1].bodyDamage} DMG</td>
    <td>${weap.weaponStats.damageRanges[1].legDamage} DMG</td>
  </tr>`
    );
  } else if (array.length == 3) {
    console.log("3");
    table.insertAdjacentHTML(
      "beforeend",
      `<tr>
    <td>${weap.weaponStats.damageRanges[1].rangeStartMeters} - ${weap.weaponStats.damageRanges[1].rangeEndMeters} m</td>
    <td>${weap.weaponStats.damageRanges[1].headDamage} DMG</td>
    <td>${weap.weaponStats.damageRanges[1].bodyDamage} DMG</td>
    <td>${weap.weaponStats.damageRanges[1].legDamage} DMG</td>
  </tr>
  <tr>
    <td>${weap.weaponStats.damageRanges[2].rangeStartMeters} - ${weap.weaponStats.damageRanges[2].rangeEndMeters} m</td>
    <td>${weap.weaponStats.damageRanges[2].headDamage} DMG</td>
    <td>${weap.weaponStats.damageRanges[2].bodyDamage} DMG</td>
    <td>${weap.weaponStats.damageRanges[2].legDamage} DMG</td>
  </tr>`
    );
  } else {
    console.log("1");
  }
}

document.querySelector("#classic").addEventListener("click", function () {
  create("29a0cfab-485b-f5d5-779a-b59f85e204a8");
});

document.querySelector("#shorty").addEventListener("click", function () {
  create("42da8ccc-40d5-affc-beec-15aa47b42eda");
});

document.querySelector("#frenzy").addEventListener("click", function () {
  create("44d4e95c-4157-0037-81b2-17841bf2e8e3");
});

document.querySelector("#ghost").addEventListener("click", function () {
  create("1baa85b4-4c70-1284-64bb-6481dfc3bb4e");
});

document.querySelector("#sheriff").addEventListener("click", function () {
  create("e336c6b8-418d-9340-d77f-7a9e4cfe0702");
});

document.querySelector("#stinger").addEventListener("click", function () {
  create("f7e1b454-4ad4-1063-ec0a-159e56b58941");
});

document.querySelector("#spectre").addEventListener("click", function () {
  create("462080d1-4035-2937-7c09-27aa2a5c27a7");
});

document.querySelector("#bucky").addEventListener("click", function () {
  create("910be174-449b-c412-ab22-d0873436b21b");
});

document.querySelector("#judge").addEventListener("click", function () {
  create("ec845bf4-4f79-ddda-a3da-0db3774b2794");
});

document.querySelector("#bulldog").addEventListener("click", function () {
  create("ae3de142-4d85-2547-dd26-4e90bed35cf7");
});

document.querySelector("#guardian").addEventListener("click", function () {
  create("4ade7faa-4cf1-8376-95ef-39884480959b");
});

document.querySelector("#phantom").addEventListener("click", function () {
  create("ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a");
});

document.querySelector("#vandal").addEventListener("click", function () {
  create("9c82e19d-4575-0200-1a81-3eacf00cf872");
});

document.querySelector("#marshal").addEventListener("click", function () {
  create("c4883e50-4494-202c-3ec3-6b8a9284f00b");
});

document.querySelector("#operator").addEventListener("click", function () {
  create("a03b24d3-4319-996d-0f8c-94bbfba1dfc7");
});

document.querySelector("#ares").addEventListener("click", function () {
  create("55d8a0f4-4274-ca67-fe2c-06ab45efdf58");
});

document.querySelector("#odin").addEventListener("click", function () {
  create("63e6c2b6-4a8e-869c-3d4c-e38355226584");
});
