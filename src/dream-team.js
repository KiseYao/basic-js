module.exports = function createDreamTeam(members) { 
if (!Array.isArray(members)) return false;
var array = [];
  members.forEach(elements => {
    if (typeof elements === 'string') {
      array.push(elements.trim()[0].toUpperCase());
    }
  })
 var dreamTeam = array.sort().join('');
 return dreamTeam;

  
}
