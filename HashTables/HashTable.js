class HashTable{

    findFirstNonRepeatedChar(str) {
        let string = str.replace(/\s/g, "");
        var map = new Map();

        for (let i = 0; i < string.length; i++) {
            if (map.has(string[i])) {
                map.set(string[i], map.get(string[i]) + 1);
            } else {
                map.set(string[i], 1);
            }
        }

        for (let [key, value] of map) {
            if (value == 1) {
                return key;
            }
        }
    }

    findFirstRepeatedChar(str) {
        let string = str.replace(/\s/g, '');

        for (let i = 0; i < string.length; i++) {
            let count = 0;
            for (let j = 0; j < string.length; j++) {
                if (string[i] == string[j]) count++;
                if(count > 1) return string[i];
            }
        }
    }
}
export default HashTable;