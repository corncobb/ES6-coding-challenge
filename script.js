/* ES6 Coding Challenge */

class Town {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;

    }
}

class Park extends Town {
    constructor(name, buildYear, numTrees, area) {
        super(name, buildYear);
        this.numTrees = numTrees;
        this.area = area;
    }

    treeDensity() {
        return this.numTrees / this.area;
    }
}

class Street extends Town {
    constructor(name, buildYear, length, sizeClass = 'unknown') {
        super(name, buildYear);
        this.length = length;
        this.sizeClass = sizeClass;
    }
}

function streetAvgLength() {
    var totalLength = 0
    //return Array.from(arguments).reduce((a, b) => a + b, 0) / Array.from(arguments).length;
    Array.from(arguments).forEach(street => { totalLength += street.length})

    return [totalLength, totalLength / Array.from(arguments).length];
}
function parkAvgAge() {
    var age = 0
    var currentYear = new Date().getFullYear()
    //return Array.from(arguments).reduce((a, b) => a + b, 0) / Array.from(arguments).length;
    Array.from(arguments).forEach(park => { age += currentYear - park.buildYear })

    return age / Array.from(arguments).length;
}

function highestNumTrees() {
    var parks = [];
    Array.from(arguments).forEach(park => {
        if (park.numTrees >= 1000) {
            parks.push(park.name)
        }
    })
    return parks;
}
function parkReport() {
    console.log("-----PARK REPORT-----");
    console.log(`Our ${Array.from(arguments).length} parks have an average age of ${parkAvgAge(...arguments)} years.`);
    Array.from(arguments).forEach(park => {
        console.log(`${park.name} has a tree density of ${park.treeDensity()} per square km`);
    });
    console.log(`${highestNumTrees(...arguments)} have/has more than 1000 trees`);
}

function streetReport() {
    console.log("-----STREET REPORT-----");
    var [length, avg] = streetAvgLength(...arguments);
    console.log(`Our ${Array.from(arguments).length} streets have total length of ${length} km, and an average length of ${parkAvgAge(...arguments)} km.`);
    Array.from(arguments).forEach(street => {
        console.log(`${street.name}, built in ${street.buildYear}, is a ${street.sizeClass} street.`);
    });

}


const GreenPark = new Park('Green Park', 1990, 1500, 10);
const NationalPark = new Park('National Park', 1981, 10000, 200);
const OakPark = new Park('Oak Park', 2010, 100, 5);

const OceanAve = new Street('Ocean Avenue', 1999, 10, 'big');
const EvergreenSt = new Street('Evergreen Street', 2008, 20, 'small');
const FourthSt = new Street('4th Street', 2015, 15, 'normal');
const SunSetBld = new Street('Sunset Boulevard', 1982, 30, 'huge');

arrParks = [GreenPark, NationalPark, OakPark]

arrStreets = [OceanAve, EvergreenSt, FourthSt, SunSetBld]

parkReport(...arrParks);
streetReport(...arrStreets);

