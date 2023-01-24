import { findLinkGroups } from "./makeNumber.js";
import { findLinks } from "./findLinks.js";
import { renderPublic } from "./publicFiles.js";
import { findDate } from "./dateGraph/dateGraph.js";
import { stackedBars } from "./D3/barChart.js";

export function getData() {
  // Change the series number (archive entry) after the 'set=' keyword: other options are (for example): 1.10.13, 1.10.31, 1.10.39, 1.10.46
// 1.10.48, 1.10.57, 1.10.59, 1.10.69, 1.10.8, 3.20.16, 3.20.52 
  let url = "https://service.archief.nl/gaf/oai/!open_oai.OAIHandler?verb=ListRecords&set=2.01.27.02&metadataPrefix=oai_ead"

  fetch(url)
    .then(response => response.text())
    .then(data => {
      //console.log(data);
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "application/xml");
      // PRINT XML FILE ON PAGE
      // document.getElementById('output').textContent = data;

      //LINK GROUPS: searches xml file for matching tags 
      // Finds all C tags: C tags are the links to other xml files, they show if the file is available online
      let linkGroups = Array.from(xml.getElementsByTagName('c'));
      // Filters all c tags to find only ones that have a level of file: means they are links to other documents and not an random link
      let filteredFiles = linkGroups.filter((file) => file.getAttribute('level') === 'file');
      // Finds all files phystech tags which means the file is public and everyone can see it
      let publicFiles = Array.from(xml.getElementsByTagName('phystech'));
      let dates = Array.from(xml.getElementsByTagName('unitdate'));
      // finds all c tags with a level of file and a did element
      let testFilter = xml.querySelectorAll('c[level="file"] did')
      let objects = [];

      // pushes files that contain a dao link into an array
      testFilter.forEach(item => {
        if (!item.querySelector('unitdate')) {
          return false
        };
        let recordObject = {};
        recordObject.online = item.querySelector('dao') ? 1 : 0;
        recordObject.offline = item.querySelector('dao') ? 0 : 1;
        recordObject.year = findDate(item.querySelector('unitdate').textContent);
        objects.push(recordObject);
      })

      // makes an array of objects that has a year extracted from the unitdate element and counts how many times this 
      // occurrs online (with phystech link) or offline (without)
      var result = [];
      objects.reduce(function (res, value) {
        if (!res[value.year]) {
          res[value.year] = {
            year: value.year,
            online: 0,
            offline: 0
          };
          result.push(res[value.year])
        }
        res[value.year].online += value.online;
        res[value.year].offline += value.offline;
        return res;
      }, {});

      // finds all dao links
      let dao = Array.from(xml.getElementsByTagName('dao'));

// gives the right data to future functions
      findLinkGroups(filteredFiles)
      findLinks(dao)
      renderPublic(publicFiles)
      stackedBars(result)
    })
}