## FLOCSSスタイルガイド

- Foundation
- Layout
- Object
  - Component  
  - Project  
  - Utility  

### Foundation
resetやnormalize等のページ全体で使うbase.scss  
mixin、function、変数もFoundationに含める

### Layout
プレフィックス l-*  
ヘッダーやフッターなどのレイアウト系のSCSS  
l-header,l-footer,l-main等  
クラスには「コンテンツの性質をあらわす」という仕様があるため、特にスタイルをあてない場合でもクラスをつける  


### component
プレフィックス c-*
>再利用できるパターンとして、小さな単位のモジュールを定義します。  
>一般的によく使われるパターンであり、例えばBootstrapのComponentカテゴリなどに見られるbuttonなどが該当します。  
>出来る限り、最低限の機能を持ったものとして定義されるべきであり、それ自体が固有の幅や色などの特色を持つことは避けるのが望ましいです。  
> https://github.com/hiloki/flocss より抜粋

### project
プレフィックス p-*
>プロジェクト固有のパターンであり、いくつかのComponentと、それに該当しない要素によって構成されるものを定義します。  
> 例えば、記事一覧や、ユーザープロフィール、画像ギャラリーなどコンテンツを構成する要素などが該当します。  
> https://github.com/hiloki/flocss より抜粋


### utility
>ComponentとProjectレイヤーのObjectのモディファイアで解決することが難しい・適切では無い、わずかなスタイルの調整のための便利クラスなどを定義します。  
>Utilityは、Component、ProjectレイヤーのObjectを無尽蔵に増やしてしまうことを防いだり、またこれらのObject自体が持つべきではないmarginの代わりに.mbs { margin-bottom: 10px; }のようなUtility Objectを用いて、隣接するモジュールとの間隔をつくるといった役割を担います。
>またclearfixテクニックのためのルールセットが定義されているヘルパークラスも、このレイヤーに含めます。  
> https://github.com/hiloki/flocss より抜粋
##　命名規則

MindBEMding
Block,Element,Modifier
Block名にはアッパーキャメルケース
Blockのあとにアンダーバー２つでelement
```html
<div class="p-BlockName">
  <div class="p-BlockName__element">
  </div>
</div>
```

elementの入れ子は避ける
```html
/* NG */
<div class="p-BlockName">
  <div class="p-BlockName__element">
    <div class="p-BlockName__element__element">
    </div>
  </div>
</div>
```

Modifierはハイフン1つから始まるクラス名にする  
※ハイフン2つから始まるクラスはCSSの仕様で許容されていないため注意  
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