function polindrom(str) {
 str === str.split('').reverse().join('') 
 ? console.log('полиндром')
 : console.log('не полиндром');      
}

polindrom('оноds')