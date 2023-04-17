
function addRSStoDOM(data) {
  let itemsContainer = document.createElement('DIV');
  for (let i = 0, t = data.items.length; i < t; ++i) {
    let item = data.items[i];  
    let itemContainer = document.createElement('DIV');
    let itemLinkElement = document.createElement('A');
    itemLinkElement.setAttribute('href', item.link);
    itemLinkElement.innerText = item.title;
    let itemTitleElement = document.createElement('H2');
    itemTitleElement.appendChild(itemLinkElement);
    let itemDescriptionElement = document.createElement('P');
    itemDescriptionElement.innerHTML = item.description;
    itemContainer.appendChild(itemTitleElement);
    itemContainer.appendChild(itemDescriptionElement);
    itemsContainer.appendChild(itemContainer);
  }
  let titleElement = document.createElement('H1');
  titleElement.innerText = data.feed.title;
  content.appendChild(titleElement);
  content.appendChild(itemsContainer);
}

let addFeedButton = document.getElementById("add-feed");
let newRSSInput = document.getElementById("rss-input");

function onAddRSSClicked(event) {
  let URL = newRSSInput.value;
  newRSSInput.value = "";

  xhr.open('GET', 'https://api.rss2json.com/v1/api.json?rss_url=' + URL);
  xhr.send();
}

addFeedButton.addEventListener('click', onAddRSSClicked);
