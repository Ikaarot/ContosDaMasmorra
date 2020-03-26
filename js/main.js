var d = new Date();
var poema = "";
var verso1 = "";
var verso2 = "";
var verso3 = "";
var verso4 = "";

class item{
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;       
      }
};
var itemlist = [];

var adjetivos_verso1 = ["agressivo", "ansioso", "antipático", "preguiçoso", "apático", "apressado", "malandro", "atrevido", "autoritário", "avarento", "birrento", "bisbilhoteiro","bruto", 
"falso", "impostor", "injusto", "nervoso", "orgulhoso", "amoroso", "bondoso", "corajoso", "curioso", "determinado", "extraordinário", "generoso", "maravilhoso", "preparado", 
"valoroso", "verdadeiro", "aplicado", "preocupado", "proativo", "pacato","assertivo", "afetivo", "criterioso"];

var sentimentos_verso2 = ["preocupado", "calmo", "confuso", "perdido", "confortável", "agradecido", "realista", "desesperançoso", "especial", "com calafrios","incompreendido"]

var verbos_verso3_1 = ["acordei", "apertei", "acusei", "beijei", "busquei", "batizei","chamei", "calei", "constrangi","destrui", "desafiei", "desconjurei","escondi", "entendi", "entreguei",
"firmei", "furtei", "furei","ganhei", "guardei", "guiei","honrei", "joguei", "levei","marquei","matei", "manifestei", "neguei", "ofereci","ouvi", "procurei","parti"];

var verbos_verso3_2 = ["enfraqueceu","inspirou","fez enxergar", "manteve seguro", "atacou", "cegou", "curou", "salvou", "aborreceu", "custou muito", 
"dava forças","emboscou","fascinou","golpeou","hipnotizou","iludiu","mordeu","nomeou","odiava","susurrou", "provocou"];

var verbos_verso4 = ["derrotei", "enfrentei","perdi para", "conquistei","destrui","roubei","escondi", "obliterei", "saqueei", "depositei"];

var flexao_genero = ["O", "um", "o", "A", "uma", "a"];  //utilizada para construir os versos posteriormente

//troca a flexão de gênero do array adjetivos
function trocarGenero(genero){
    if(genero === "F"){
        for(var x = 0; x < 36; x++)
            if(x == 14)
            adjetivos_verso1[x] = adjetivos_verso1[x] + "a";
            else
            adjetivos_verso1[x] = adjetivos_verso1[x].slice(0, -1) + "a";  
    }else if(genero === "M"){
        for(var x = 0; x < 36; x++)
        adjetivos_verso1[x] = adjetivos_verso1[x].slice(0, -1) + "o"; 
    }
}

//preenchendo o vetor itemlist
for(var index = 1; index <= 10; index++){
    var nome;
    switch(index) {
        case 1:
          nome = "livro";
          break;
        case 2:
          nome = "livro de feitiços";
          break;
        case 3:
            nome = "livro aberto";
          break;
        case 4:
            nome = "escudo";
          break;
        case 5:
            nome = "anel";
          break;
        case 6:
            nome = "pergaminho";
        break;
        case 7:
            nome = "poção de vida";
        break;
        case 8:
            nome = "poção de mana";
        break;
        case 9:
            nome = "poção vazia";
        break;
        case 10:
            nome = "elmo de bronze";
        break;
        default:
          console.log("Erro não esperado.");
      }

    itemlist.push(new item(index, nome));
}
console.log(itemlist);


//retorna um int entre 0 e max
function rand(max)
{
    return Math.floor(Math.random() * max);
}

//retorna url de um icone aleatório
function getrandItem(id){
    var url = "img/icons/";
    var r = (Math.floor(Math.random() * (10 - 1)) + 1);
    url += (r + ".png");
    document.getElementById(id).src = url;
    return r;
}

//retorna horario formatado hh:mm:ss dd/mm
function horarioFormatado(){
    if(d.getHours() < 10){
        horas = "0" + d.getHours().toString();
    }else{
        horas = d.getHours().toString();
    }

    if(d.getMinutes() < 10){
        minutos = "0" + d.getMinutes().toString();
    }else{
        minutos = d.getMinutes().toString();
    }

    if(d.getSeconds() < 10){
        segundos = "0" + d.getSeconds().toString();
    }else{
        segundos = d.getSeconds().toString();
    }
    
    data = d.getDate().toString() +"/"+ d.getMonth().toString();
    return horas + ":"+ minutos +":"+ segundos + "<br>" + data;
}

var itemnames =[];

//definindo os conteudo dos componentes
function init(){  
    //atribuindo 3 itens ao html
    for(var index = 1; index < 4; index++){
        var id = "icone";
        id += index;
        itemnames.push(itemlist[getrandItem(id) - 1].nome);
    }
    
    console.log(itemnames);
    
    //Construindo o primeiro verso do poema    
    verso1 = flexao_genero[0];  
    
    if(itemnames[0] === "poção de vida" || itemnames[0] === "poção de mana" || itemnames[0] === "poção vazia"){
        verso1 = flexao_genero[3]; 
        trocarGenero("F");     
    }
      
    verso1 += " " + itemnames[0] + " " ; 
    verso1 += adjetivos_verso1[rand(35)] + " estava em minha mão";

    //Construindo o segundo verso do poema
    verso2 = "\nMe senti " + sentimentos_verso2[rand(sentimentos_verso2.length)] + "," ;

    //Construindo o terceiro verso do poema
    verso3 = "\nentão " + verbos_verso3_1[rand(verbos_verso3_1.length)] + " ";
    
    if(itemnames[1] === "poção de vida" || itemnames[1] === "poção de mana" || itemnames[1] === "poção vazia")
        verso3 += flexao_genero[4];
    else
        verso3 += flexao_genero[1];

    verso3 += " " + itemnames[1] + " que me ";
    verso3 += verbos_verso3_2[rand(verbos_verso3_2.length)] + ",";

    //Construindo o quarto verso do poema
    verso4 = "\ne assim \n" + verbos_verso4[rand(verbos_verso4.length)] + " ";
    
    if(itemnames[2] === "poção de vida" || itemnames[2] === "poção de mana" || itemnames[2] === "poção vazia")
        verso4 += flexao_genero[5];
    else
        verso4 += flexao_genero[2];
    
    verso4 += " " + itemnames[2] + ".";
    
    poema = verso1 + "<br>" +  verso2 + "<br>" + verso3 + "<br>" + verso4;
    
    
    //inserindo o poema e data
    document.getElementById("poema").innerHTML = poema;
    document.getElementById("data").innerHTML =  horarioFormatado() + "/2020";
}


