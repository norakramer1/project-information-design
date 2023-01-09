


// // import { getData } from "./getData.js"


// //  let daoLinks = 0;
// //  let fileGroup = 0;

// function findLinkGroups(linkGroups) {
// console.log(linkGroups)
//     let daoLinks = findLinks();
//     for(let i=0; i< linkGroups.length; i++){
//      fileGroup++;
//     }
// return fileGroup;
//     //console.log(fileGroup)
//     //makePercentage(fileGroup)
// }

// function findLinks(dao) {
//     for(let i=0; i< dao.length; i++){
//       let links = dao[i].attributes.href.nodeValue;
//           daoLinks++;
//     }
//     console.log(daoLinks)
//     return daoLinks;
  
//  //makePercentage(daoLinks)
// }

// export default {
//     findLinkGroups: findLinkGroups,
//     findLinks: findLinks
// }


//import { findLinkGroups } from "./getData"
import  { fileGroup, findLinkGroups } from "./makeNumber.js"
import  { daoLinks, findLinks } from "./findLinks.js"



 //console.log(daoLinks)
 export function makePercentage() {


  console.log('dit zijn de waardes:')
       console.log(fileGroup)
       console.log(daoLinks)
       let notOnline = fileGroup - daoLinks;
       let notOnlinePercent = notOnline / fileGroup * 100;
       let onlinePercent = daoLinks / fileGroup * 100;
    
    //   console.log(notOnline)
       console.log(notOnlinePercent)
    //  console.log(onlinePercent)
    
      let section = document.querySelector('section.percentages')
      section.insertAdjacentHTML('beforeend',
      `       <h2>${notOnlinePercent}% van dit archief is niet beschikbaar online</h2>
      <h2>${onlinePercent}% van dit archief is beschikbaar online</h2>
        `
      )
     }