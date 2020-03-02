title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

console.log(title, name, surname 
    + '\n'+ 'ul.', street
    + '\n'+ city, zip
    + '\n' + country.toUpperCase());


console.log(`${title} ${name} ${surname}
ul. ${street}
${city} ${zip}
${country.toUpperCase()}`);