グリッドプロパティ一覧  

IE対応 autoprefixer対応
- grid-template-columns  
- grid-template-rows  
- grid-template-areas  
- grid-template  
- grid-row-start
- grid-column-start
- grid-row-end
- grid-column-end
- grid-row
- grid-column
- grid-area
- grid-row-gap
- grid-column-gap
- grid-gap
- grid-gap(gap)（IE対応はgrid-areaで指定した場合のみ）

非対応
- grid-auto-columns
- grid-auto-rows
- grid-auto-flow
- grid  
　grid-template（grid-template-rows・ grid-template-columns・ grid-template-areasのショートハンド）  
　grid-auto-rows  
　grid-auto-columns  
　grid-template-areas  
　grid-auto-flow 　をまとめて指定

flex,gridで使えるプロパティ(IE対応 autoprefixer対応)
- align-content
- align-self
- align-items
- justify-content
- justify-content
- justify-self
- place-content
- order


グリッドで使えるCSS関数
- repeat
  - min-content
  - max-content
  - auto-fill
  - auto-fit
- fit-content
- minmax
  - min-content
  - max-content

### grid-template-columns,gird-template-rows
grid-template-columns: グリッドの横方向のサイズを指定
gird-template-rows：グリッドの縦方向のサイズを指定

指定できる値
- px
- fr
- %
- max-content
- min-content
- minmax
- fit-content

```html:
<div class="grid">
  <div class="grid__item1"></div>
  <div class="grid__item2"></div>
  <div class="grid__item3"></div>
  <div class="grid__item4"></div>
</div>
```

display: gridは省略  

pxでの指定
```scss:
.grid {
  grid-template-columns: 500px 300px 200px;
  grid-template-rows: 300px 200px 150px;
}
```


frでの指定  
frは全体を等分割した値  
1fr 1fr 1fr　だと　1/3ずつ  
2fr 1fr 1fr だと　最初のグリッドが全体の1/2になり、2,3番目のグリッドが残りの1/2を等分割した大きさになる  
（2/4, 1/4,1/4になる）  
```scss:
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height:600px; //グリッドアイテムがないとグリッドの高さがなく等分割できないので仮に600pxを指定
}

```

px,frを組み合わせた指定  
600px 1fr 1fr　だと最初のグリッドに600pxが割り当てられ、残りのグリッドを2つに等分割する

```scss:
.grid {
  grid-template-columns: 600px 1fr 1fr;
  grid-template-rows: 150px 1fr 1fr;
  height:600px; //グリッドアイテムがないとグリッドの高さがなく等分割できないので仮に600pxを指定
}
```

#### repeat
repeatを使うことで短く記述できる  
repeat(繰り返す数,サイズ指定)  

1fr 1fr 1frの場合
```scss:
.grid {
  grid-template-columns: repeat(3, 1fr);
}
```

repeatは途中に入れたり、何回も記述できるので以下のような書き方もできる

pxとfrのくみあわせ（600px 1fr 1fr)
```scss:
.grid {
  grid-template-columns: 600px repeat(2, 1fr);
}
```

repeatを複数（1fr 1fr 1fr 2fr 2fr 2fr）
```scss:
.grid {
  grid-template-columns: repeat(3, 1fr) repeat(3, 2fr);
}
```

途中にrepeat(1fr 2fr 2fr 300px)
```scss:
.grid {
  grid-template-columns: 1fr repeat(2, 2fr) 300px;
}
```

max-content,min-content,minmax,fit-content等も指定できる  
長くなるのであとで


## grid-column,grid-row
grid-template-columns,gird-template-rowsでグリッドを作成できたのでグリッドアイテムを配置してみる
(位置を指定しなくてもIE以外は左上から自動配置してくれます)
```html
<div class="grid">
  <div class="grid__item1"></div>
  <div class="grid__item2"></div>
  <div class="grid__item3"></div>
  <div class="grid__item4"></div>
</div>
```

```scss:
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

//グリッドアイテムが高さを持っていないため指定
.grid div {
  height: 200px;
}
```

位置の指定
grid-column,grid-rowを使って位置を指定していきます  
この時に重要なのがグリッドラインです
グリッドには以下のようにgrid-columnのグリッドラインが左から1,2,3,4...、
grid-rowのグリッドラインが上から1,2,3,4となっています


grid-row、grid-columnは　開始のグリッドライン/終わりのグリッドラインで指定します
左から2番目、上から2番目の位置に指定するとしたら以下のように記述します

```scss:
.grid__item1 {
  grid-column: 2/3;
  grid-row: 2/3;
}
```

2つ以上のグリッドにまたがってグリッドアイテムを配置することもできます
以下のように記述することで、左から２、3番目にまたがって配置できます
```scss:
.grid__item1 {
  grid-column: 2/4;
  grid-row: 2/3;
}
```

また
grid-column、grid-rowはショートハンドでの指定方法のため、
開始位置、終了位置をそれぞれ別で指定することもできます
- grid-column-start: grid-columnの開始位置
- grid-column-end: grid-columnの終了位置
- grid-row-start: grid-rowの開始位置
- grid-row-end: grid-rowの終了位置

```scss:
.grid__item1 {
  grid-column: 2/3;
  grid-row: 2/3;
}

//別々で指定
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
```

spanでの指定  
grid-column、grid-rowではそれぞれ開始位置、終了位置を指定しましたが、
開始位置だけ指定して、開始位置からどこのグリッドまで伸ばすか指定することもできます。


```scss:
.grid__item1 {
  grid-column: 1/3;
  grid-row: 1/2;
}

.grid__item1 {
  grid-column: 1 / span 2; //グリッドライン1から2つ先のグリッドラインまで
  grid-row: 1 / span 1;　//グリッドライン1から1つ先のグリッドラインまで
  
}
```
### grid-template-areas  
ここまでは何番目から何番目まで〜という感じで指定してきましたが、もっとわかりやすく指定することができます  
それがgrid-template-areasです  
grid-template-areasではそれぞれのグリッドに名前をつけて指定することができます
gird-template-columnsとgrid-template-rowsは今までと同じように指定します
grid-template-areaの指定が他のCSSにはない書き方なので見慣れないかもしれないです。
以下の指定の場合は

上から1番目、左から1番目〜2番目のグリッドをitem1  
上から1番目、左から3番目のグリッドをitem2  
上から2番目、左から１番目のグリッドをitem3  
上から2番目、左から2番目、3番目のグリッドをitem4  
とそれぞれのグリッドに名前をつけています
```scss:
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 
    "item1 item1 item2";
    "item3 item4 item4"
}
```

そして名前をつけたグリッドにグリッドアイテムを配置していきます
grid-area: 配置したい箇所の名前
で指定します

```scss:
.grid__item1 {
  background-color: blue;
  grid-area: item1; //grid-template-areaで指定したitem1に配置
}

.grid__item2 {
  background-color: red;
  grid-area: item2; //grid-template-areaで指定したitem2に配置
}

.grid__item3 {
  background-color: pink;
  grid-area: item3; //grid-template-areaで指定したitem3に配置
}

.grid__item4 {
  background-color: gold;
  grid-area: item4; //grid-template-areaで指定したitem4に配置
}

```

grid-gapのautoprefixerでのIE対応はgrid-template-areaでの配置じゃないと効かないので
grid-gapを使う場合はgrid-template-areaでの指定が必須になります

### grid-template
grid-template-areas,gird-template-columns,gird-template-rowsをまとめて指定
grid-templateではより視覚的に記述することができます  
視覚的に記述並んでいるためrepeat関数を使うことができません
```scss:
  //それぞれ別で指定
.grid {
  display: grid;
  grid-template-columns: 150px 350px 500px;
  grid-template-rows: 200px 400px;
  grid-template-areas:
    'item1 item1 item2'
    'item3 item4 item4';
}


///まとめて指定
.grid {
  display: grid;
  grid-template:
    'item1 item1 item2' 200px //areasの後にその行の高さ(rows)を指定
    'item3 item4 item4' 400px //areasの後にその行の高さ(rows)を指定
    / 150px 350px 500px;
    // その列の幅(columns)を指定　一番左から150px,350px,500px
}
```

### gap(grid-gap)
gapを指定することでgridの間に余白を作ることができます   
row-gapでは縦のみ、column-gapで横のみ指定することもできます  
当初はgrid-gap,grid-row-gap,grid-column-gapだったが、grid-接頭語なしに変更された  
grid-接頭語があっても動作する



### flex,gridの位置調整プロパティ

#### align-items
親要素に指定  
グリッド内で要素の縦位置をどこに揃えるか指定  
flexで指定した時と同じようにグリッドの高さと同じに揃えるのが無効になる

#### align-self
子要素に指定  
指定した要素だけ親要素のalign-itemsを上書きして配置する

#### align-content
親要素に指定  
グリッド全体をどこに寄せるか指定



#### justify-content
親要素に指定
グリッドのセルの横の間隔を調整


#### justify-items
親要素に指定  
グリッド内で要素の横位置をどこに揃えるか指定  
指定しない場合グリッドアイテムはグリッドセルと同じ幅まで広がるが、
指定した場合はそれが無効になる

#### justify-self
子要素に指定
指定した要素だけ親要素のjustify-itemsを上書きして配置する


#### place-content
justify-contentとalign-itemsを一括指定  
最初の値がalign-contentの値、二番目の値がjustify-content の値



#### order
一つずつ位置を指定する場合は必要ないが、自動配置の時に順番を変えることができる


#### minmax
grid-template-columnsに指定して最小の値、最大の値を指定できる
minmax(最小の値,最大の値)で指定  
指定できる値
- px
- %
- fr
- min-content
- max-content


```scss:
.grid {
  display: grid;
  //最初のセルが200px 最後のセルが300p　間のセルが
  grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
}
```

#### fit-content
fit-content(最大の値)で指定  
fit-content(300px)の場合は最大で300pxまで広がる  
要素がそれより小さい場合はそれに応じて小さくなる

