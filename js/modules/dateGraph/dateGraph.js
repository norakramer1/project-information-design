

export function dateGraph(dates) {
    let dateArr = dates.textContent;
    var answers = [];
    // Loop through them and save their text content into an array
    let something = dates.forEach(el => {
    //   console.log(el)
      answers.push(el.textContent)



    })
    console.log(answers)

    const regex = new RegExp(/^([0-9]{4})?$/);
const str = "oudste stuk - jongste stuk: 1594-1603";
   // console.log(regex)
  
   let newStr = str.replace(/\D/g,'');
    const matches = answers.map(answer => answer.replace(/\D/g,''));
   //const matches = answers.match(regex);
    console.log(matches);
    
   // console.log(something)

}

// REGEX: 