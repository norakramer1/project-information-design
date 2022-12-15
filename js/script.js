console.log('hey')


//XMLHttpRequest() - has responseXML property in the response

document.addEventListener('DOMContentLoaded', ()=>{
    //fetch the data as soon as the page has loaded
    let url = "https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=ListRecords&set=2.01.27.01&metadataPrefix=oai_ead"
    //"https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=GetRecord&metadataPrefix=oai_ead&identifier=1.04.23";
            // https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=GetRecord&metadataPrefix=oai_ead&identifier=2.21.205.69
            // https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=ListRecords&set=1.04.23&metadataPrefix=oai_ead
    fetch(url)
    .then(response => response.text())
    .then(data => {
        //console.log(data);  //string
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        document.getElementById('output').textContent = data;
        let dao = xml.getElementsByTagName('c');
        console.log(dao)

      
          findLinks(dao)
        // buildHouseList(xml);
        // buildSwordList(xml);
    });
})

function findLinks(x) {
    console.log(x)
    x.forEach((item) => {
        let links = item[i].firstChild.nodeValue;
              console.log(links)
      });

}

// function buildHouseList(x){
//     let list = document.getElementById('houses');
//     let houses = x.getElementsByTagName('house');
//     for(let i=0; i<houses.length; i++){
//         let li = document.createElement('li');
//         let house = houses[i].firstChild.nodeValue;
//         li.textContent = house;
//         list.appendChild(li);
//     }
// }
