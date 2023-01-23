
import  { fileGroup, findLinkGroups } from "./makeNumber.js"
import  { daoLinks, findLinks } from "./findLinks.js"

 export function makePercentage() {

  //console.log('dit zijn de waardes:')
    
       let notOnline = fileGroup - daoLinks;
       let notOnlinePercent = notOnline / fileGroup * 100;
       let onlinePercent = daoLinks / fileGroup * 100;
  
    //   console.log(notOnline)
      // console.log(notOnlinePercent)
    //  console.log(onlinePercent)

   let roundOnlinePercent = Math.round(onlinePercent);
   let roundOfflinePercent = Math.round(notOnlinePercent);

    if(div.container) {
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
    

      // <label for="file">Digitaal</label>
//   // <h3>${roundOnlinePercent}%</h3>   
      // <h2>${roundOfflinePercent}%</h2>
      // <h3> van dit archief is niet beschikbaar online</h3>
     }