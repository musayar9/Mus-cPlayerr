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
    new Musıc("Till I Die","Eminem","tıll2.jpg","tıll.mp3"),
    new Musıc("Dursun Zaman","Manga","mng2.jpg","manga.mp3"),
    new Musıc("Manzara","Hande Yener","hande.jpg","hande.mp3"),
    new Musıc("Öyle Bir Yerdeyimki","Selda Bağcan","selda.jpg","selda.mp3"),
    new Musıc("Doruklara Sevdalandım", "Ahmet Kaya", "ahmet.jpg","ahmet.mp3"),
    new Musıc("Her Halin Aklımda", "Kofn", "kofn.jpg", "kofn.mp3" ),
    new Musıc("Neyim Var Ki", "Ceza/Sagopa","ceza.jpg","ceza.mp3"),
    new Musıc("Lose Yourself","Emınem","em.jpeg","emınem.mp3"),
    new Musıc("In The Clup","50 Cent","50.jpg","cent.mp3"),
    new Musıc("Mad Mad World","Shaggy","mad.jpg","shaggy.mp3"),
    new Musıc("In The End","Linkin Park","lınkın.jpg","lınkın.mp3"),
    new Musıc("Crawling","Linkin Park","craw.jpg","craw.mp3"),
    new Musıc("Unutulacak Dünler","Gazapizm","unt.jpg","gazap.mp3"),
    new Musıc("Otherside","Red Hot Chili Peppers","red.jpg","red.mp3"),
    new Musıc("Merhabalar","Emre Fel","merh.jpg","merh.mp3"),
    new Musıc("Jedi Mind Tricks","Vinnie Paz","jedı.jpg","jedı.mp3"),
    new Musıc("Kadınım","Kolpa","kolpa.jpg","kadınım.mp3"),
    new Musıc("Dile Kolay Kalbe Değil","Zakkum","gök.jpg","kolay.mp3"),
    new Musıc("Gidiyorum Yolcue Et","Zakkum","gökyüzü.jpg","yolcu.mp3"),
    new Musıc("Ben Ne Yangınlar Gördüm","Zakkum","zakkum.jpg","zakkum.mp3"),
    new Musıc("Gökyüzünde","Zakkum","zakkum2.jpg","gökyüzü.mp3"),
    new Musıc("Hatıran Yeter","Zakkum","hatıra.jpg","hatıra.mp3"),
    new Musıc("Anason","Zakkum","zakkum3.jpg","anason.mp3"),
    new Musıc("Tutsak","Sezen Aksu","sezen1.jpg","tutsak.mp3"),
    new Musıc("Yansın","Sezen Aksu","sezen8.jpg","yansın.mp3"),
    new Musıc("Vay","Sezen Aksu","sezen3.jpg","vay.mp3"),
    new Musıc("Gülümse","Sezen Aksu","sezen4.jpg","gülümse.mp3"),
    new Musıc("Tutuklu","Sezen Aksu","sezen5.jpg","tutkulu.mp3"),
    new Musıc("Geirdön","Sezen Aksu","sezen6.jpg","geridon.mp3"),
    new Musıc("Belalım","Sezen Aksu","sezen7.jpg","belalım.mp3"),
    new Musıc("Firuze","Sezen Aksu","sezen2.jpg","firuze.mp3"),
    new Musıc("Yatağın Soğuk Tarafı","Kolpaa","kolpa.jpg","yatak.mp3"),
    new Musıc("Son Nefesim","Kolpa","kolpa1.jpg","kolpason.mp3"),
    new Musıc("Nasıl Öğrendin Unutmayı","Kolpaa","kolpa2.jpg","nasılogren.mp3"),
    new Musıc("Yatağın Soğuk Tarafı","Kolpaa","kolpa3.jpg","yatak.mp3"),
    new Musıc("Sensiz Olmaz","Pera","pera.jpg","pera.mp3"),
    new Musıc("Unutmadım","Kıvırcık Ali","kıvırcık.jpg","unutamadım.mp3"),
    new Musıc("Aybükem","Kıvırcık Ali","kıvırcık3.jpg","aybukem.mp3"),
    new Musıc("Gül Tükendi","Kıvırcık Ali","kıvırcık2.jpg","gültukendi.mp3"),
    new Musıc("Unutursun","Sertap Erener","sertab.jpg","unutursun.mp3"),
    new Musıc("Sevdam AĞlıyor","Sertap Erener","sertab2.jpg","sertab.mp3"),
    new Musıc("Bu Böyle","Sertap Erener","sertab3.jpg","böyle.mp3"),
    new Musıc("Belki Üstümüzden Bir Kuş Geçer","Yüksek Sadakat","yüksek.jpg","kuş.mp3"),
    new Musıc("Ölürüm Hasretinle","Grup Seksendört","seksen1.jpg","hasretinle.mp3"),
    new Musıc("Kal Ölene Kadar","Grup Seksendört","seksen2.jpg","kalölen.mp3"),
    new Musıc("Sarhoş Gibiyim","Grup Seksendört","seksen3.jpg","sarhoş.mp3"),
    new Musıc("Sarı Laleler","MFÖ","mfö.jpg","sarılale.mp3"),
    new Musıc("Sen Afftesen Ben Affetmem","Saqopa Bergen","bersag.jpg","sbergen.mp3"),
    new Musıc("Seni Yazdım","Müslüm Gürses","müslüm.jpg","seniyazdım.mp3"),
    new Musıc("Mutlu Ol Yeter","Müslüm Gürses","müslüm2.jpg","mutluolyeter.mp3"),
    new Musıc("Bir Kadın Çizeceksin","Manga","birkadın.jpg","birkadın.mp3"),
]