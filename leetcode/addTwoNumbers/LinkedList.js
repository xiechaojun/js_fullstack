// 将数字的每一位变成一个ListNode的实例
// 既不是字符串也不是数值，而是采用了线性表数据结构
function ListNode(val){
    this.val = val;
    // 指针
    this.next = null;
}

let number = 1234567890;
let n1 = new ListNode(1);
console.log(n1);
let n2 = new ListNode(2);
n1.next = n2;
let n3 = new ListNode(3);
n2.next = n3;
let n4 = new ListNode(4);
n3.next = n4;
let n5 = new ListNode(5);
n4.next = n5;
let n6 = new ListNode(6);
n5.next = n6;
let n7 = new ListNode(7);
n6.next = n7;
let n8 = new ListNode(8);
n7.next = n8;
let n9 = new ListNode(9);
n8.next = n9;
let n0 = new ListNode(0);
n9.next = n0;

// 遍历链表，travel一下
let node = n1;
while(node){
    console.log(node.val);
    node = node.next;
}
