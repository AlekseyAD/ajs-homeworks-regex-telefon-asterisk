export default function phoneFormat(phone) {
  return `+${phone
    .replace(/^8\s/, '7')
    .split(/[^\d]/)
    .join('')}`;
}

//  const test =  phoneFormat(`+860000000000`);
//  console.log(test);
//'(\+7|8)(/[^\d]+/g, '')'
//'(/^8\s/, '7')'