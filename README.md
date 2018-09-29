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

├─ dist/  
│         └ assets/  
│                                    ├ js/  
│                                    ├ css/  
│                                    └ img/   
├── README.md  
└── package.json  

 
