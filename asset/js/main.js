// Descrizione
// Partendo da un array di immagini, realizziamo uno slider con Vue.js 
// come da mockup
// Al click delle freccette "sinistra" e "destra" lo slider cambierà 
// l'immagine visibile passando alla successiva oppure alla precedente.
// Consigli
// Ricordiamoci come visualizzare un singolo elemento alla volta di un array
// Attenzione
// Quando le immagini terminano, lo slider ricomincerà dalla prima
// Bonus
// applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine 
// automaticamente ( riguardare la documentazione su i lifecycle hooks )
// Al click su un pallino verrà visualizzata l'immagine di riferimento 
// associata ( il terzo pallino sarà associato alla terza immagine e così via..)

var app = new Vue (
    {
        el: '#root',

        data: {

            photos: [
                './asset/img/Ferrari_F1.jpg',
                './asset/img/Red_Bull_F1.jpg',
                './asset/img/McLaren_F1.jpg'
            ],

            counterPhoto: 0
                        
        },

        created(){
            this.nextPhotoTiming();
        },

        methods: {

            // funzione per la freccia dx faccio andare foto in avanti
            nextPhoto: function(){                
                if ( this.counterPhoto >= (this.photos.length - 1) ) {
                    this.counterPhoto = 0;
                } else {
                    this.counterPhoto += 1;
                }
            },

            // funzione per la freccia sx faccio andare foto indietro
            prevPhoto: function(){                
                if ( this.counterPhoto != 0 ) {
                    this.counterPhoto -= 1;                                        
                } else {
                    this.counterPhoto = this.photos.length - 1;
                }
            },

            // funzione per associare dots alla posizione delle foto
            clickDots: function(index){
                console.log(index);
                this.counterPhoto = index;
            },

            // funzione del timer slide foto
            nextPhotoTiming: function(){
                setInterval(() => {
                    this.nextPhoto();
                }, 3000 );

            }

        }

    }

);