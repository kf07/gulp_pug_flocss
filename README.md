# gulp-template

## インストール
```
npm i
```

## gulpタスク一覧

### html
htmlの整形

### pug
pugをhtmlにコンパイル

### imagemin
画像ファイルを圧縮

### sass
sassをcssにコンパイル  
autoprefixerでIE11,android4.4以上用のベンダープレフィックス付与
grid用のベンダープレフィックス有効化

### babel
es6記法をes5に変換

### minify-css
cssをminify

### minify-js
jsをminify

### minify-html
htmlをminify

### browser-sync
ローカル環境を起動

## bs-reload
ローカル環境をリロード

## default
ローカル環境を起動  

pug,sass,jsファイルが変更されたら  
それぞれのタスクを実行してコンパイルして、  
ローカル環境をリロードする

## ディレクトリ構成
```
├ dist/ 
│   ├ index.html  
│   └ assets/     
│           ├ js/  
│           ├ css/  
│           └ img/   
├ src/  
│   └ pug   
│       ├ include/  
│       ├ _config.pug   
│       ├ _layout.pug  
│       └ index.pug  
│   └ sass 
│       ├ foundation/  
│       │    ├ function/  
│       │    │    └ _rem.scss

│       │    ├ mixin  
│       │    │    ├ _mq-max.scss
│       │    │    └ _mq-min.scss
│       │    ├ variable 
│       │    │    ├ _breakpoint.scss
│       │    │    ├ _color.scss
│       │    │    ├ _global.scss
│       │    │    └ _path.scss
│       │    ├ _base.scc  
│       │    ├ _normalize.scss   
│       │    └ _reset.scss
│       ├ layout/  
│       ├ object/  
│       │    ├ component/
│       │    ├ project/
│       │    └ utility/
│       └ common.scss  
│ 
│ 
│ 
│   └ es6  
│  
├── README.md  
└── package.json  
```


 
