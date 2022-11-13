class Musıc{
    constructor(title,singer,ımg,file){
        this.title=title;
        this.singer=singer;
        this.ımg=ımg;
        this.file=file;
    }
    getName(){
        return this.title + "-" + this.singer 
    }
}

const musıcList = [
    new Musıc("Dursun Zaman","Manga","mng2.jpg","manga.mp3"),
    new Musıc("Manzara","Hande Yener","hande.jpg","hande.mp3"),
    new Musıc("Öyle Bir Yerdeyimki","Selda Bağcan","selda.jpg","selda.mp3"),
    new Musıc("Doruklara Sevdalandım", "Ahmet Kaya", "ahmet.jpg","ahmet.mp3"),
    new Musıc("Her Halin Aklımda", "Kofn", "kofn.jpg", "kofn.mp3" ),
    new Musıc("Neyim Var Ki", "Ceza/Sagopa","ceza.jpg","ceza.mp3"),
    new Musıc("Lose Yourself","Emınem","em.jpeg","emınem.mp3"),
    new Musıc("In The Clup","50 Cent","50.jpg","cent.mp3"),
    new Musıc("Mad Mad World","Shaggy","mad.jpg","shaggy.mp3")
  
]