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
※defaultが動いてるとhtmlが変更されたら整形されるためdefault止めてから実行

### browser-sync
ローカル環境を起動  
http://localhost:3000/

### bs-reload
ローカル環境をリロード

### default
ローカル環境を起動  

pug,sass,jsファイルが変更されたら  
それぞれのタスクを実行してコンパイルして、  
自動リロードする

## ディレクトリ構成
srcのpug,sass,jsをコンパイル、imgを圧縮して
それぞれdist配下に出力
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
jquery,vueはtrueで_script.pugで読み込み
```pug
- const image_path = '/assets/img/'
- const css_path = '/assets/css/'
- const js_path = '/assets/js/'
- const domain = 'https://example.com/' //ドメイン
- const jquery = false
- const vue = true
-
    const pages = {
        top : {
        url : 'index.html',
        name : 'トップページ',
        //title,og.title
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


### layout
/_layout.pug  
それぞれをincludeしてページ全体のテンプレートを定義  
block contentsのところにページごとのコンテンツが入る
```pug
doctype html
block vars
html(lang="ja")
    head
        include ./include/_head.pug

    body(class=key)
        .l_contents
            include ./include/_header.pug
            include ./include/_nav
            main.main
                block contents
            include ./include/_footer.pug
        include ./include/_script
```

/_index.pug
```pug
//layoutを使用
extends _layout.pug

block vars
    include ./_config.pug
    //使用するconfig指定する
    - var key = "top"
    - var page = pages[key]

block contents
    #app
    //ここにコンテンツ書く
```

## Scss
CSS設計はFLOCSS  
https://github.com/hiloki/flocss
#### foundation  
reset.normalize等のリセット系のCSSと全体で使用するbase.scss
#### layout
ヘッダーやフッターなどのレイアウト系のscss
#### object
1.component  
2.project  
3.utility


### variable
ブレイクポイントを定義  
/foundation/variable/_breakpoint.scss  

colorを定義  
/foundation/variable/_color.scss 

htmlのfont-sizeを定義  
/foundation/variable/_global.scss 

画像のパスを定義  
/foundation/variable/_path.scss

```scss
.class {
  background-image: url(#{$path}icon.png);
}
```
↓
```css
.class {
	background-image: url(/assets/img/icon.png);
}
```

### function
/foundation/function/_rem.scss  
/foundation/variable/_global.scssで指定しているルートのfont-sizeからrem変換
```scss
// /foundation/variable/_global.scss  
/* ルートのfont-sizeを定義 */
$_font-size: (
        'sm': 15px,
        'md': 16px,
) !default;
```

```scss
// /foundation/function/_rem.scss  
@function _rem($px, $key: 'md') {
  $value: map-get($_font-size, $key);
  @return ($px / $value) * 1rem;
}
```

```scss
.class {
    font-size: _rem(24px);
}
```
↓
```css
.class {
    font-size: 1.5rem;
}
```

### mixin
メディアクエリ  
/foundation/variable/_breakpoint.scssで指定したbreakpointを使用  
引数なしだとmd  

/foundation/variable/_breakpoint.scss
```scss
$breakpointsMin: (
        'sm': 'screen and (min-width: 400px)',
        'md': 'screen and (min-width: 768px)',
        'lg': 'screen and (min-width: 1000px)',
        'xl': 'screen and (min-width: 1200px)',
) !default;

$breakpointsMax: (
        'sm': 'screen and (max-width: 360px)',
        'md': 'screen and (max-width: 767px)',
        'lg': 'screen and (max-width: 991px)',
        'xl': 'screen and (max-width: 1200px)',
) !default;
```  

foundation/mixin/_mq-max.scss
```scss
@mixin _mq-max($breakpoint: md) {
  @media #{map-get($breakpointsMax, $breakpoint)} {
    @content;
  }
}
```
foundation/mixin/_mq-min.scss
```scss
@mixin _mq-min($breakpoint: md) {
  @media #{map-get($breakpointsMin, $breakpoint)} {
    @content;
  }
}
```

```scss
.class {
  width: 50%;
  @include _mq-max(){
    width: 100%;
  }
}
```
↓
```css
.class {
	width: 50%;
}

@media screen and (max-width: 767px) {

	.class {
		width: 100%;
	}
}
```

### common.scssで各scssをimport
拡張子は省略可
foundation以外は**でそれぞれすべてimport
```scss
// ==========================================================================
// Foundation
// ==========================================================================

@import "foundation/_normalize";
@import "foundation/_base";

// ==========================================================================
// Layout
// ==========================================================================

@import "layout/**";

// ==========================================================================
// Object
// ==========================================================================

// -----------------------------------------------------------------
// Component
// -----------------------------------------------------------------

@import "object/component/**";

// -----------------------------------------------------------------
// Project
// -----------------------------------------------------------------

@import "object/project/**";


// -----------------------------------------------------------------
// Utility
// -----------------------------------------------------------------

@import "object/utility/**";
```
