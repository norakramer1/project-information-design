import  {findLinkGroups}  from "./makeNumber.js";
import  {findLinks}  from "./findLinks.js";

// export let fileGroup = 0;
// export let daoLinks = 0;


export function getData() {
   //fetch the data as soon as the page has loaded
   let url = "https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=ListRecords&set=2.19.125&metadataPrefix=oai_ead"
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
       
      //LINK GROUP 
      let linkGroups = Array.from(xml.getElementsByTagName('c'));
       let filteredFiles = linkGroups.filter((file) => file.getAttribute('level') === 'file');
       //console.log(filteredFiles)
       // DAO LINK
       let dao = Array.from(xml.getElementsByTagName('dao'));
    

     findLinkGroups(filteredFiles)
      findLinks(dao)
   })
}





// export default {
//     getData: getData,
//     findLinkGroups: findLinkGroups,
//     findLinks: findLinks
// }