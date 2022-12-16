

export function getData() {
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

}