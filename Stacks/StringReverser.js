class StringReverser {
    reverse(str) {
        if (str === null) return;

        let output = "";
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            stack.push(str[i]);
        }
        for (let j = stack.length - 1; j >= 0; j--) {
            output += stack[j];
        }

        return output;
    }
}
export default StringReverser;