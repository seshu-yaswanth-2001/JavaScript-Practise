function isAnagram(s, t) {
    if(s.length !== t.length) return false;

    const map = new Map();

    for(let ch of s) {
        if(map.has(ch)) {
            map.get(ch) + 1;
        }
        map.set(ch, 0);
    }

    for(let ch of t) {
        if(!map.has(ch)) return false;
        map.get(ch)-1;
    }
    return true;
}

const result = isAnagram("racecar", "carrace");
console.log(result);

// second way using - hash table

function isAna(s, t) {
    if(s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for(let i = 0; i <= s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }

    return count.every((val) => val === 0);
}


const result2 = isAna("racecar", "carace");
console.log(result2);