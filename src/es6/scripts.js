const app = new Vue({
  el: '#app',
  data: {
    order: false,
    list: [
      { id: 1, name: '01' },
      { id: 2, name: '02' },
      { id: 3, name: '03' },
      { id: 4, name: '04' },
      { id: 5, name: '05' },
      { id: 6, name: '06' },
      { id: 7, name: '07' },
      { id: 8, name: '08' },
      { id: 9, name: '09' }
    ]
  },
  computed: {
    sortedList: function() {
      return _.shuffle(this.list, 'id', this.order ? 'desc' : 'asc');
    }
  }
});
