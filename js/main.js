Vue.config.devtools = true;

const app = new Vue (
    {
        el: "#root",
        data: {
            testo: "",
            consegne: [],
            classi: ["red","green"]
        },
        methods: {
            aggiungi () {
                if (this.testo!= "")
                this.consegne.push({
                    consegna: this.testo,
                    fatto: false
                });
                this.testo = "";
            },
            rimuovi (index) {
                this.consegne.splice(index,1);
            },
            toggle (index) {
                this.consegne[index].fatto = !this.consegne[index].fatto;
            }
        }
    }
)