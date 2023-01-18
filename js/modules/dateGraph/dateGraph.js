import { makeBars } from "../D3/barchart.js";


export function dateGraph(dates) {
    let dateArr = dates.textContent;
    var answers = [];
    // Loop through them and save their text content into an array
    let something = dates.forEach(el => {
    //   console.log(el)
      answers.push(el.textContent)



    })
    console.log(answers)

    const regex = new RegExp(/\D/g,'');
   // console.log(regex)
  
  
    const matches = answers.map(answer => answer.replace(/\D/g,''));
    

    const firstFour = matches.map(item => item.slice(0,4));
   //const matches = answers.match(regex);
    console.log(firstFour);

    // if (item.length < 1) {
    //   item . remove
    // } else {

    // }

    makeBars(firstFour)
    
   // console.log(something)

}

// REGEX: