
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class Tree{

    constructor(){
        this.root = null
    }

    insert(val){

        if (this.root === null){
            this.root = new Node(val)
        }else {
            this.insert_recursive(this.root,val)
        }

        console.log(this.root)
    }

    insert_recursive(current_node,val){
        if(current_node === null){
            return
        }
        if (val < current_node.val){
            current_node.left = new Node(val)
        }else {
            current_node.right = new Node(val)
        }

    }

}
const obj = new Tree()

export function receieveInput(value){

    if (isNaN(value)){
        return alert("enter number")
    }else{
        obj.insert(value)
    }



}