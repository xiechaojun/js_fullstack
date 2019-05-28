const words = (str,pattern = /[^a-zA-Z-]+/) => str.split(pattern) //^
console.log(words('I love javascript!!'));  //获取每个英文单词
