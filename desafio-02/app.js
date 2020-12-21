new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('Teste')
        },
        trocarValue(e){
            this.valor = e.target.value
        }
    },
})