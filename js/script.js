


let fileGroup = 0;
let daoLinks = 0;

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
        let linkGroups = xml.getElementsByTagName('c');
        let dao = xml.getElementsByTagName('dao');
        
       // console.log(dao)

      findLinkGroups(linkGroups)
       findLinks(dao)
    });
})

function findLinkGroups(c) {
      for(let i=0; i< c.length; i++){
       fileGroup++;
      }
      console.log(fileGroup)
      makePercentage(fileGroup)
 }

function findLinks(x) {
      for(let i=0; i< x.length; i++){
                 let links = x[i].attributes.href.nodeValue;
               daoLinks++;
      }
      //console.log(daoLinks)
      makePercentage(daoLinks)
 }

 console.log(daoLinks)
 function makePercentage(hi) {
  //console.log(hi)
   let notOnline = fileGroup - daoLinks;
   let notOnlinePercent = notOnline / fileGroup * 100;
   let onlinePercent = daoLinks / fileGroup * 100;

//    console.log(notOnline)
//    console.log(notOnlinePercent)
//    console.log(onlinePercent)
 }

 makePercentage();
