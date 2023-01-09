 import { makePercentage } from "./countPercent.js";
 
 
 export let daoLinks = 0;
 
 
 export function findLinks(x) {
  
    //let daoLinks = Array.from(x)
    x.forEach(element => {

    // for (links of x) {
     let links = element.attributes.href.nodeValue;
               daoLinks++;
    // });

    } )
    //console.log(daoLinks)
  return makePercentage(daoLinks)
}