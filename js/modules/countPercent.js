import { fileGroup, findLinkGroups } from "./makeNumber.js"
import { daoLinks, findLinks } from "./findLinks.js"
export let roundOnlinePercent;
export {
  makePercentage as makePercentage,
  roundOnlinePercent as variable,
};



function makePercentage() {
  let notOnline = fileGroup - daoLinks;
  let notOnlinePercent = notOnline / fileGroup * 100;
  let onlinePercent = daoLinks / fileGroup * 100;
  roundOnlinePercent = Math.round(onlinePercent);
  let roundOfflinePercent = Math.round(notOnlinePercent);


  let element = document.querySelector('div.container');
  if (typeof (element) != 'undefined' && element != null) {
    let section = document.querySelector('div.container')
    section.insertAdjacentHTML('beforeend',
      `  
  <a href="resultaat.html">
  <h2>Digitalisatie</h2>
  <hr class="solid">
  <h3 class="percent">${roundOnlinePercent}%</h3>  
<progress id="file" value="${roundOnlinePercent}" max="100"> ${roundOnlinePercent}% </progress>

  <p>Wij zijn druk bezig het archief te digitaliseren</p>
  </a>
    `
    )
  }

}