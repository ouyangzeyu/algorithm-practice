/**
 * @二叉树 是一种特殊的树，它的子节点个数不超过两个。
 * 可以高效的实现插入、查找和删除数据
 * 
 * @二叉查找树 一种特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。这一特性使得 查找的效率很高，对于数值型和非数值型的数据，
 */

// 节点对象的构造函数
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;

    function show() {
        return this.data;
    }
}

/**
 * 实现二叉查找树
 * (1) 设根节点为当前节点。
 * (2)  如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点；反 之，执行第 4 步。
 * (3)  如果当前节点的左节点为 null，就将新的节点插入这个位置，退出循环；反之，继续 执行下一次循环。 
 * (4)  设新的当前节点为原节点的右节点。 
 * (5)  如果当前节点的右节点为 null，就将新的节点插入这个位置，退出循环；反之，继续 执行下一次循环。
 */
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;

    // 插入节点方法
    function insert(data) {
        let n = new Node(data, null, null);
        if (this.root == null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    //  中序遍历
    function inOrder(node) {
        if (!(node == null)) {
            inOrder(node.left);
            console.log(node.show());
            inOrder(node.right);
        }
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.inOrder(nums.root);
