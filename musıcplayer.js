class musıcPlayer{
    constructor(musıcList){
    this.musıcList=musıcList;
    this.index=0;
    }

    getMusıc(){
        return this.musıcList[this.index]
    }
    next(){
        if(this.index +1 < this.musıcList.length && ismixMusic === false){
            this.index++;
        }else if(this.index +1 < this.musıcList.length  && ismixMusic === true){
            let random_index = Math.floor(Math.random() * this.musıcList.length + 1)
            this.index = random_index;
        } 
        else{
            this.index=0
        }
    }

    prev(){
        if(this.index!=0){
            this.index--;

        }else{
            this.index=this.musıcList.length-1;
        }

    }

    replay(){
        if(this.index == this.musıcList.length)
        this.index;
    }

musicSayısıGöster(){
    musicSırası,toplamMusic
}
mixMusic(){
    this.index=Math.floor((Math.random()* musıcList.length + 1))
}
}

