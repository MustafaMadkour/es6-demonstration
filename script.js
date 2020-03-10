class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Element {
    constructor(name, buildYear, trees, area) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
    }
    treeDen() {
        const density = this.trees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per km^2.`);
    }
}
class Street extends Element {
    constructor(name, buildYear, stLength, stSize = 3) {
        super(name, buildYear);
        this.stLength = stLength;
        this.stSize = stSize;
    }
    stClassify() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, was built in ${this.buildYear} and is classified as a ${classification.get(this.stSize)} street.`);     
    }
}
const allParks = [
    new Park('park_a', 1980, 904, 2.4),
    new Park('park-b', 1974, 1014, 3.5),
    new Park('park-c', 2012, 560, 1.5)
];
const allStreets = [
    new Street('st-a', 1970, 2.4, 5),
    new Street('st-b', 1990, 3.5, 2),
    new Street('st-c', 2011, 1.7),
    new Street('st-d', 2018, 2.2, 4)
];
function calc(arr) {
    const sum = arr.reduce((prev, cur) => prev+cur, 0);
    return [sum, sum/arr.length];
}
function parksReport(parks) {
    parks.forEach(cur => cur.treeDen());
    const ages = parks.map(cur => new Date().getFullYear() - cur.buildYear);
    const [ageAvg] = calc(ages);
    console.log(`Our ${parks.length} parks have an average of ${ageAvg} years.`);
};
function streetReport(streets) {
    const [lengthAvg] = calc(streets.map(cur => cur.length));
    console.log(`Our ${streets.length} streets have an average length of ${lengthAvg} km.`);
    streets.forEach(cur => cur.stClassify());
};
parksReport(allParks);
streetReport(allStreets);