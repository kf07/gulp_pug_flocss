## FLOCSSスタイルガイド

### 状態（ステート）
主にjsで付与されるクラス  
SMACSSのようにis-**で定義する  
is-**単体にはスタイルはつけずに、以下のように別のクラスとの組み合わせで定義する

```scss
//NG
.is-open {
  display: block;
}

//OK
.modal.is-open {
  display: block;
}
```

### Modifier
Modifierはハイフン1つから始まるクラス名にする  
※ハイフン2つから始まるクラスはCSSの使用で許容されていないため注意  
元のクラスとの組み合わせでスタイルを定義する
```html
<div class="article"></div>
<div class="article -modifierA"></div>
```
```scss
.article {
  background-color: #000;
}

//NG
.-modifierA {
  background-color: #fff;
}

//OK
.article.-modifierA {
  background-color: #fff;
}
```

