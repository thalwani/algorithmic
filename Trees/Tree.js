import Node from './Node.js'

class Tree{
    insert(value) {
        let current = this.root;
        let node = new Node(value);

        if (this.isEmpty()){
            this.root = node;
            return;
        }

        while (true) {
            if (value < current.value) {
                if (current.leftChild == null) {
                    current.leftChild = node;
                    break;
                }
                current = current.leftChild;
            } else {
                if (current.rightChild == null) {
                    current.rightChild = node;
                    break;
                }
                current = current.rightChild;
            }
        }
    }

    find(value) {
        if (this.isEmpty()) return false;

        let current = this.root;

        while (current !== null) {
            if (current.value == value) {
              return current;
            }

            if (value < current.value) {
                current = current.leftChild;
            } else {
                current = current.rightChild;
            }
        }

        return false;
    }

    isEmpty() {
        return this.root == null;
    }

    isLeaf(node) {
        return node.leftChild == null && node.rightChild == null;
    }

    // Tree traversal
    // Breadth First (Level Order)
    // 20, 10, 30, 6, 14, 24, 3, 8, 26
    
    // PRE ORDER root, left, right
    // 20, 10, 6, 3, 8, 14, 30, 24, 26
    publicTraversePreOrder() {
        this.traversePreOrder(this.root);
    }
    traversePreOrder(root) {
        if (root == null) return;
        console.log(root.value);
        this.traversePreOrder(root.leftChild);
        this.traversePreOrder(root.rightChild);
    }

    // IN ORDER left, root, right
    // 3, 6, 8, 10, 14, 20, 24, 26, 30
    publicTraverseInOrder() {
        this.traverseInOrder(this.root);
    }
    traverseInOrder(root) {
        if (root == null) return;
        this.traverseInOrder(root.leftChild);
        console.log(root.value);
        this.traverseInOrder(root.rightChild);
    }

    // POST ORDER right, left, root
    // 3, 6, 8, 14, 10, 26, 24, 30, 20
    publicTraversePostOrder() {
        this.traversePostOrder(this.root);
    }
    traversePostOrder(root) {
        if (root == null) return;
        this.traversePostOrder(root.leftChild);
        this.traversePostOrder(root.rightChild);
        console.log(root.value);
    }

    publicHeight() {
        return this.height(this.root);
    }
    height(root) {
        if (root == null) return -1;
        if (this.isLeaf(root)) return 0;
        return 1 + Math.max(this.height(root.leftChild), this.height(root.rightChild));
    }

    publicMin() {
        return this.min(this.root);
    }
    min(root) {
        if (root == null) return null;
        if (this.isLeaf(root)) return root.value;

        let left = this.min(root.leftChild);
        let right = this.min(root.rightChild);

        return Math.min(Math.min(left, right), root.value);
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s,t) {
        
        let tabS = s.split('').sort();
        let tabT = t.split('').sort();
        console.log(tabS);
        console.log(tabT);
        
        return JSON.stringify(tabS)==JSON.stringify(tabT);
    };
}
export default Tree;