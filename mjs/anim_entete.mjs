export class anim_entete{
    constructor(elmEntete){
        this.elmEntete = elmEntete;
    }

anim(){
    console.log(this.elmEntete.tagName);
    let elmTitre = this.elmEntete.children[0];
    console.log(elmTitre);
    elmTitre.classList.add(`animEntete`);
}

}