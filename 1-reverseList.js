/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */
function ReverseList( head ) {
    // write code here
    if(!head) return null
    let root = null
    let nodeCur = head
    while(nodeCur){
        let nodeTemp = nodeCur.next
        nodeCur.next = root
        root = nodeCur
        nodeCur = nodeTemp
    }

    return root
}

module.exports = {
    ReverseList : ReverseList
};