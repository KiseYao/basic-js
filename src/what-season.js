const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	
	if (!date) return 'Unable to determine the time of year!';
	 if (date.hasOwnProperty('getMonth')) throw Error;
	
    switch(date.getMonth()) {
        case 'jan':
        case 'january':
        case 0:
        case 'feb':
        case 'february':
        case 1:
              return 'winter';
        break;
        case 'mar':
        case 'march':
        case 2:
        case 'apr':
        case 'april':
        case 3:
        case 'may':
        case 4:
           return 'spring';
        break;
        case 'jun':
        case 'june':
        case  5:
        case 'jul':
        case 'july':
        case  6:
        case 'aug':
        case 'august':
        case  7:
          return 'summer';
        break;
        case 'sep':
        case 'september':
        case 8:
        case 'oct':
        case 'october':
        case 9:
        case 'nov':
        case 'november':
        case 10:
            return'fall';
        break;
		 case 'dec':
        case 'december':
		case 11:
		return 'winter'
		break;
    }
}
