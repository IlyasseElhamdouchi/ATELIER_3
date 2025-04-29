const text = `
Anass
ilyasse
salame
inscription
javascript
`;
const lines = text.trim().split('\n');
const L = lines.map(line => line.toUpperCase()).filter(line => line.includes('I'));
L.forEach(line => console.log(line)); /* ILYASSE
                                         INSCRIPTION
                                         JAVASCRIPT  */
 