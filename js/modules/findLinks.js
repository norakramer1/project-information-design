 import { makePercentage } from "./countPercent.js";

 export let daoLinks = 0;

 export function findLinks(x) {
     x.forEach(element => {
         let links = element.attributes.href.nodeValue;
         daoLinks++;

     })
     //console.log(daoLinks)
     return makePercentage(daoLinks)
 }