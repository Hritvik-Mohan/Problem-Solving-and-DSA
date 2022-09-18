var deleteDuplicates = function(head) {
    let temp = head;
    while(temp != null && temp.next != null) {
        // loop till we don't reach the tail or surpass the tail as there wont be any duplicates after the tail
        let nextNode = temp.next;
        while(nextNode != null && temp.val == nextNode.val) {
            temp.next = nextNode.next;
            nextNode.next = null;
            nextNode = temp.next;
        }
        if(temp == null) break;
        temp = temp.next;
    }
    return head;
}