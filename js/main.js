Vue.config.devtools = true;

const app = new Vue (
    {
        el: "#root",
        data: {
            consegna: "",
            consegne: [

            ]
        },
        methods: {
            aggiungi () {
                if (this.consegna!= "")
                this.consegne.push(this.consegna);
                this.consegna = "";
            },
            rimuovi (index) {
                this.consegne.splice(index,1);
            }
        }
    }
)