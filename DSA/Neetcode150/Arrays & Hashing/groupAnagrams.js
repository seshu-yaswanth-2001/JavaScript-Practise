function groupAnagram(str) {
    let result = {};

    for(let s of str) {
        const sorted = s.split("").sort().join("");
        
        if(!result[sorted]) {
            result[sorted] = [];
        }
        result[sorted].push(s);
    }
    console.log(result);
    return Object.values(result);
}

const result = groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]);
console.log(result);