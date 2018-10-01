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
http://localhost:3000/

## bs-reload
ローカル環境をリロード

## default
ローカル環境を起動  

pug,sass,jsファイルが変更されたら  
それぞれのタスクを実行してコンパイルして、  
自動リロードする

## ディレクトリ構成
```
├ dist/ 
│   ├ index.html  
│   └ assets/     
│           ├ js/  
│           ├ css/  
│           └ img/   
├ src/  
│   ├ pug   
│   │   ├ include/  
│   │   ├ _config.pug   
│   │   ├ _layout.pug  
│   │   └ index.pug  
│   ├ sass 
│   │   ├ foundation/  
│   │   │    ├ function/  
│   │   │    │    └ _rem.scss
│   │   │    ├ mixin  
│   │   │    │    ├ _mq-max.scss
│   │   │    │    └ _mq-min.scss
│   │   │    ├ variable 
│   │   │    │    ├ _breakpoint.scss
│   │   │    │    ├ _color.scss
│   │   │    │    ├ _global.scss
│   │   │    │    └ _path.scss
│   │   │    ├ _base.scc  
│   │   │    ├ _normalize.scss   
│   │   │    └ _reset.scss
│   │   ├ layout/  
│   │   ├ object/  
│   │   │    ├ component/
│   │   │    ├ project/
│   │   │    └ utility/
│   │   └ common.scss  
│   └ es6  
│       └ scripts.js
├ gulpfile.js
├ .csscomb.json
├ .babelrc
├ README.md
├ package.json
└ package-lock.json
```

## pug
### config
パス、meta等を指定  
/include/_config.pug  
```pug
- const image_path = '/assets/img/'
- const css_path = '/assets/css/'
- const js_path = '/assets/js/'
- const domain = 'https://example.com/'
- const jquery = false
- const vue = true
-
    const pages = {
        top : {
        url : 'index.html',
        name : 'トップページ',
        title : 'トップページ',
        description : 'トップページです',
        keywords : 'トップページ',
        image : 'assets/img/ogp.jpg'
        }
    }
```

パスの指定
```pug
img(src=image_path +"icon.png")
link(rel="stylesheet", href=css_path+"common.css")
script(src=js_path+"scripts.js")
```
↓
```html
<img src="/assets/img/icon.png">
<link rel="stylesheet" href="/assets/css/common.css">
<script src="/assets/js/scripts.js"></script>
```

### include
各includeファイル
- /include/_head.pug
- /include/_header.pug
- /include/_nav.pug
- /include/_footer.pug
- /include/_script.pug


