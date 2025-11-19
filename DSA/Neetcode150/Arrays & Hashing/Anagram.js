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

const result = isAnagram("racecar", "carracd");
console.log(result);