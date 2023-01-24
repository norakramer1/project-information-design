 import { makePercentage } from "./countPercent.js";

// find and count the links to other xml files
 export let daoLinks = 0;

 export function findLinks(x) {
     x.forEach(element => {
         let links = element.attributes.href.nodeValue;
         daoLinks++;

     })
     //console.log(daoLinks)
     return makePercentage(daoLinks)
 }