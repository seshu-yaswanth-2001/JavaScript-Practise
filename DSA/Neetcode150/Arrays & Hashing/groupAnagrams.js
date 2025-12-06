function groupAnagram(str) {
    let result = {};

    for(let s of str) {
        const sorted = s.split("").sort().join("");
        
        if(!result[sorted]) {
            result[sorted] = [];
        }
        result[sorted].push(s);
    }
    return Object.values(result);
}

const result = groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]);
console.log(result);

function groupAna(strs) {
    const res = {};
    for(let str of strs) {
        const count = new Array(26).fill(0);
        for(let ch of str) {
            count[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }

        const key = count.join(",");
        if(!res[key]) {
            res[key] = [];
        }

        res[key].push(str);
    }
    return Object.values(res);
}

const result2 = groupAna(["act", "pots", "tops", "cat", "stop", "hat"]);
console.log(result2);