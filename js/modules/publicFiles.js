import  { getData } from "./getData.js"

// export function findLinkGroups(c) {
    
//     c.forEach(el => {
//       fileGroup++;
//     });
   
//      //return makePercentage(fileGroup)
//    }

export function renderPublic(x) {
    let publicfile = 0;
    x.forEach(el => {
        publicfile++;
      });

      console.log('section')
    let section = document.querySelector('div.container')
    
    section.insertAdjacentHTML('beforeend',
    `  
    <h2>${publicfile}</h2>    
    <h3>documenten in dit archief zijn niet openbaar</h3>
      `
    )
}