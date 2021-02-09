const App = {
    data(){
        return{
            title: 'Note list',
            PH: 'Enter the name of note',
            inputValue: '',
            notes: ['note1', 'note2', 'note3'],
            add: 'Add some notes!',
            myHtml: '<hr>'
        } 
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value;
        },
        newNoteHandler(){
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        removeNote(idx){
            this.notes.splice(idx, 1);
        }
    }
}

Vue.createApp(App).mount('#top')