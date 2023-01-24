import  { getData } from "./getData.js"
import {  makePercentage as makePercentage, roundOnlinePercent as roundOnlinePercent } from "./countPercent.js";

export function renderPublic(x) {
    let publicfile = 0;
    x.forEach(el => {
        publicfile++;
      });


      var elementBars =  document.querySelector('div.container-public');
      if (typeof(elementBars) != 'undefined' && elementBars != null)
      {
        let section = document.querySelector('div.container-public')
        section.insertAdjacentHTML('beforeend',
        `  
        <a href="serie.html">
        <progress id="file" value="${publicfile}" max="100"> ${publicfile}% </progress>
        <p>${publicfile} stukken in dit archief zijn niet openbaar</p>  
        <progress id="file" value="${roundOnlinePercent}" max="100"> ${roundOnlinePercent}% </progress>  
        <p>${roundOnlinePercent}% is online beschikbaar</p>  
       
          `
        )
      }

}

// <progress id="file" value="${roundOnlinePercent}" max="100"> ${roundOnlinePercent}% </progress> 