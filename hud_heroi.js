// Criação de uma variável com o nome do herói
const nomeHeroi = "Islan";

// Variável para o nível inicial do personagem
let nivelHeroi = 1;

//Variável Booleana para indicar se o herói usa magia
let possuiMagia = true;

//°Cálculo da Vida máxima do Herói
// - Ocálculo consiste na mutiplicação do nível atual por 10
let hp = nivelHeroi *10;

//Define a classe de acordo com a habilidade de utilizar magia
const classeHeroi = possuiMagia ? "Mago" : "Guerreiro";

//Define a mensagem sobre a classe relacionada ao uso de magia
const statusMagia = possuiMagia
? "Pode Usar Feitiços" : "Não Pode Usar Feitiços";

//Exibe todas as informações formatadas no console
console.log(
    `O Herói ${nomeHeroi} está no Nível ${nivelHeroi},
    é da Classe ${classeHeroi}, ${statusMagia}
    E possui HP ${hp} Pontos de HP.`
);