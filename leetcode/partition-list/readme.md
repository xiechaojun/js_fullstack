[26] 链表的概念 LinkedList 指针 

- 算法 
- 数据结构 链表 
- webpack 跑起来 
给定一个链表(实现一个)， 和一个特定值x，对链表进行分隔 使所有小于x的节点都在大于或等于X的节点之前 保证原来的顺序 
LinkedList (n)LinkedLisNode
相对于数组的好处就是存储数据可以不连续 
头指针 head -> next -> node1 -> ..node -> tail -> next = null 

head = 1->4->3->2->5->2 x=3  
1->2->2->4->3->5 
1. 一分为二 结点：val后跟着next属性 
  分为两个链表 next 小的链表 next -> 大链表的头结点 
  怎么在组成链表的过程之中 
  lowerHeader
  lowerTail 
  highHeader
  HighTail

  lowerHeader = head 
  4? 跳过 1->next 放开 1->4断开 1结点,next为null 
  1-> lowerHeader->next 2->2  ->
  4-> highHeader->...->5
  while 一下就可以 
  
