
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

    
      let section = document.querySelector('section.percentages')
      section.insertAdjacentHTML('beforeend',
      `  
      <h2>${roundOnlinePercent}%</h2>    
      <h3> van dit archief is beschikbaar online</h3>
        `
      )

      // <h2>${roundOfflinePercent}%</h2>
      // <h3> van dit archief is niet beschikbaar online</h3>
     }