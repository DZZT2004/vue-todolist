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
                done: false
            }
        ],
        newToDo: {
            text: "",
            done: false
        },
        contatore: 0,
    },
    methods: {
        creaToDo(){
            this.itemList.push({...this.newToDo})
        },
        eliminaToDo(index){
            this.itemList.splice(index, 1);
            
        },
        alzaContatore(){
            this.contatore++;
        }
    }
})