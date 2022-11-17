const app = new Vue({
    el: '.root',
    data: {
        itemList: [
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Fare i compiti',
                done: false,
            },
            {
                text: 'Andare in palestra',
                done: false,
            }
        ],
        contatore: 0,
    },
    methods: {
        creaToDo(){

        },
        eliminaToDo(){

        }
    }
})