 import { makePercentage } from "./countPercent.js";


export let fileGroup = 0;

export function findLinkGroups(c) {
    
  c.forEach(el => {
    fileGroup++;
  });
 
   return makePercentage(fileGroup)
 }