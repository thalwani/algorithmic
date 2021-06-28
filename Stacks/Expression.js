class Expression {
    isBalanced(str) {
        if (str === null) return false;
        
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] == "(" || str[i] == "[" || str[i] == "<") {
              stack.push(str[i]);
            }
            if (str[i] == ")" || str[i] == "]" || str[i] == ">") {
                let lastChar = stack.pop(str[i]);
                
                if (str[i] == ")" && lastChar != "(") return false;
                if (str[i] == "]" && lastChar != "[") return false;
                if (str[i] == ">" && lastChar != "<") return false;
            }
        }

        return true;
    }
}
export default Expression;