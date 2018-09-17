const App = new Vue({
    el: '#app',
    data: {
        isActive: '1'
    },
    methods: {
        isSelect: function (num) {
            this.isActive = num;
        }
    }
});
