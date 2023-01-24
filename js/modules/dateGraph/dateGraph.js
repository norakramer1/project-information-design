// Match all date strings and keep only the first consecutive numbers
export function findDate(i) {

  const match = i.replace(/\D/g,'');

  const firstFour = match.slice(0,4);

 return firstFour;
}


