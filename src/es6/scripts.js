// const array = [];
//
// let promise = new Promise((resolve, reject) => {
//   console.log('#1');
//   resolve('Hello ');
//   $('.swiper-slide').each(function() {
//     const width = $(this)
//       .find('img')
//       .innerWidth();
//     array.push(width);
//   });
// });
//
// promise
//   .then(msg => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('#2');
//         resolve(msg + "I'm ");
//       }, 0);
//       array.forEach(function(value, index) {
//         $('.swiper-slide')
//           .eq(index)
//           .css('width', value);
//       });
//     });
//   })
//   .then(msg => {
//     console.log('#3');
//     const galleryTop = new Swiper('.gallery-top', {
//       spaceBetween: 10,
//       loop: true,
//
//       slidesPerView: 'auto',
//       loopedSlides: 10,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//       }
//     });
//     galleryTop.on('slideChangeTransitionStart', function() {
//       const index = galleryTop.realIndex;
//       console.log(array[index]);
//       $('.gallery-top').css('width', array[index]);
//     });
//   })
//   .catch(() => {
//     console.error('Something wrong!');
//   });

function asyncProcess(value) {
  //valueがundefinedならreject（失敗）、そうでなければresolve（成功）が呼び出される
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //引数valueが未定義であるかによって成否を判定
      if (value) {
        resolve(`入力値：${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

//thenオブジェクトでresolve、rejectの結果を受け取る
//.then(success,failure)
//success,failureはそれぞれresolve/reject関数で指定された引数を受け取る
// asyncProcess('トクジロウ') //初回のasyncProcess関数を実行
//   .then(
//     //成功したときに実行される処理
//     response => {
//       console.log(response);
//       return asyncProcess('ニンサブロウ'); //2番目のasyncProcess関数を呼び出し
//     }
//   )
//   .then(
//     response => {
//       console.log(response);
//     },
//     //失敗したときに実行される処理
//     error => {
//       console.log(`エラー:${error}`);
//     }
//   );
// Promise.all([
//   asyncProcess('トクジロウ'),
//   asyncProcess('ニンザブロウ'),
//   asyncProcess('リンリン')
// ]).then(
//   response => {
//     console.log(response);
//   },
//   error => {
//     console.log(`エラー: ${error}`);
//   }
// );
//
// Promise.race([
//   asyncProcess(''),
//   asyncProcess('ニンザブロウ'),
//   asyncProcess('リンリン')
// ]).then(
//   response => {
//     console.log(response);
//   },
//   error => {
//     console.log(`エラー: ${error}`);
//   }
// );
// const Hoge = () => {
//   let msg = '#1';
//
//   setTimeout(() => {
//     msg = `${msg}#2`;
//   }, 10);
//
//   msg = `${msg}#3`;
//
//   console.log(msg);
// };
//
// Hoge();

// const func2 = new Promise((resolve, reject) => {
//   let msg = '#1';
//   resolve(msg);
// })
//   .then(msg => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         msg = `${msg}#2`;
//         resolve(msg);
//       }, 10);
//     });
//   })
//   .then(msg => {
//     msg = `${msg}#3`;
//     console.log(msg);
//   });

// const promise1 = value => {
//   return new Promise((resolve, reject) => {
//     if (value) {
//       //引数の値があるならresolveで引数を返す
//       resolve(value);
//     } else {
//       //引数が空ならrejectで'エラー'を返す
//       reject('エラー');
//     }
//   });
// };
//
// const promise2 = value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (value) {
//         //引数の値があるならresolveで引数を返す
//         resolve(value);
//       } else {
//         //引数が空ならrejectで'エラー'を返す
//         reject('エラー');
//       }
//     }, 200);
//   });
// };
//
// promise1()
//   .then(result => {
//     //promiseの結果がresolveの場合
//     console.log(result);
//     return promise1('#2');
//   })
//   .then(
//     result => {
//       console.log(result);
//     },
//
//     error => {
//       //promiseの結果がrejectの場合
//       console.log(error);
//     }
//   );
//
// Promise.all([promise1('#1'), promise1('#2'), promise1('#3')]).then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );
//
// Promise.race([promise2('#1'), promise1('#2'), promise1('#3')]).then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );

const func1 = new Promise((resolve, reject) => {
  let msg = 1;
  resolve(msg);
});

func1
  .then(msg => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        msg = `${msg}#2`;
        resolve(msg);
      }, 300);
    });
  })
  .then(msg => {
    return new Promise((resolve, reject) => {
      msg = `${msg}#3`;
      resolve(msg);
    });
  })
  .then(msg => {
    return new Promise((resolve, reject) => {
      console.log(msg);
    });
  });
