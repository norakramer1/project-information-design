

export function dateGraph(dates) {
    let dateArr = dates.textContent;
    var answers = [];
    // Loop through them and save their text content into an array
    let something = dates.forEach(el => {
    //   console.log(el)
      answers.push(el.textContent)
    })
    
    console.log(something)
    console.log(answers)
}