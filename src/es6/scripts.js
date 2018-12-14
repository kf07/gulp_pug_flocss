const app = new Vue({
  el: '#app',
  data: {
    activeClass: false,
    NumItem: ['item1','item2','item3','item4','item5','item6','item7','item8','item9'],
    Num: [1,2,3,4,5,6,7,8,9],
    isActive: true,
    aaa: 'red'
  },
  methods: {
    handleClick: function handleClick() {
      const min = 1;
      const max = 9;
      const beforeNum =[].concat(this.Num);
      this.Num = [];
      this.NumItem = [];
      for (let i = 0; i < 9; i++){
        let random = Math.floor(Math.random() * (max + 1 - min) + min);
        while(this.Num.indexOf(random) >= 0 && random !== beforeNum[i]){
          random = Math.floor(Math.random() * (max + 1 - min) + min);
        }
        const randomItem = 'item' + random;
        this.Num.push(random);
        console.log(random,beforeNum[i]);
        this.NumItem.push(randomItem);
      }
    }
  }
});
