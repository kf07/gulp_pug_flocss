## 配列操作

### スプレッド演算子
配列やオブジェクトを展開する


配列の複製
```javascript
const ary = ['麦茶', '緑茶', '烏龍茶'];
const myAry = [...ary]; //['麦茶', '緑茶', '烏龍茶']
```

要素を追加して新しく配列を生成
```javascript
const ary = ['麦茶', '緑茶', '烏龍茶'];
const myAry = [...ary, 'ジャスミン茶', '爽健美茶']; //['麦茶', '緑茶', '烏龍茶', 'ジャスミン茶', '爽健美茶']
```

配列を分割
```javascript
const [data1, data2, ...other] = [1, 2, 3, 4, 5];
console.log(data1); //1
console.log(data2); //2
console.log(other); //[3,4,5]
```

文字列を配列にする
```javascript
const word = 'ECMAScript2015';
const split = [...word];   //["E", "C", "M", "A", "S", "c", "r", "i", "p", "t", "2", "0", "1", "5"]
```


スプレッド演算子で関数呼び出し
```javascript
const sum = (x, y, z) => {
  return x + y + z;
};
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //6
```


### map
与えられた関数を配列の全ての要素に対して呼び出して、その結果から新しい配列を生成
```javascript
const ary = [1, 4, 9, 16];
const map = ary.map(x => x * 2);
console.log(map); //[2, 8, 18, 32]
```
