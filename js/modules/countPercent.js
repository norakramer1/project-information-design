


export function findLinkGroups(c) {
    for(let i=0; i< c.length; i++){
     fileGroup++;
    }
   // console.log(fileGroup)
    makePercentage(fileGroup)
}

export function findLinks(x) {
    for(let i=0; i< x.length; i++){
      let links = x[i].attributes.href.nodeValue;
          daoLinks++;
    }
    console.log(daoLinks)
    makePercentage(daoLinks)
}