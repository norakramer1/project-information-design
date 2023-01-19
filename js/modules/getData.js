import { findLinkGroups } from "./makeNumber.js";
import { findLinks } from "./findLinks.js";
import { renderPublic } from "./publicFiles.js";
import { findDate } from "./dateGraph/dateGraph.js";
import { makeBars } from "./D3/barChart.js";






export function getData() {
   let url = "https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=ListRecords&set=1.04.01&metadataPrefix=oai_ead"

 //  const promises = archiveEntries.map(p =>
   //fetch the data as soon as the page has loaded
   //"https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=GetRecord&metadataPrefix=oai_ead&identifier=1.04.23";
   // https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=GetRecord&metadataPrefix=oai_ead&identifier=2.21.205.69
   // https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=ListRecords&set=1.04.23&metadataPrefix=oai_ead
   fetch(url)
      .then(response => response.text())
      .then(data => {
         //console.log(data);
         let parser = new DOMParser();
         let xml = parser.parseFromString(data, "application/xml");
         // PRINT XML FILE ON PAGE
         document.getElementById('output').textContent = data;

         //LINK GROUP 
         let linkGroups = Array.from(xml.getElementsByTagName('c'));
         let filteredFiles = linkGroups.filter((file) => file.getAttribute('level') === 'file');
         let publicFiles = Array.from(xml.getElementsByTagName('phystech'));
         let dates = Array.from(xml.getElementsByTagName('unitdate'));
   

         let testFilter = xml.querySelectorAll('c[level="file"] did')

         let objects = [];

         testFilter.forEach(item => {
            if (!item.querySelector('unitdate')) {return false };
            let recordObject = {};
            recordObject.online = item.querySelector('dao') ? 1 : 0;
            recordObject.offline = item.querySelector('dao') ? 0 : 1;
            recordObject.year = findDate(item.querySelector('unitdate').textContent);
            objects.push(recordObject);
 
            //console.log("record", recordObject);
         })
         let pivot = d3.rollups(objects, v => d3.sum(v, d => d.online), d => d.year)
         console.log("pivot", pivot)


         var result = [];
         objects.reduce(function(res, value) {
           if (!res[value.year]) {
             res[value.year] = { year: value.year, online: 0, offline: 0  };
             result.push(res[value.year])
           }
           res[value.year].online += value.online;
           res[value.year].offline += value.offline;
           return res;
         }, {});
         
         //console.log('result is: ', result)

         // DAO LINK
         let dao = Array.from(xml.getElementsByTagName('dao'));


         findLinkGroups(filteredFiles)
         findLinks(dao)
         renderPublic(publicFiles)
         makeBars(result)
      })
 //  )
   // Promise.all(promises).then(products => {
   //    // products is Product[]. The actual value we need
   //    console.log('works')
   //  })
}

