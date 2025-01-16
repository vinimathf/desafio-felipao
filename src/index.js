// Desafio Classificador de nível de Herói
let Heroi = ["Minato", 2.001] // variável para armazenar o nome e a quantidade de experiência (XP) de um herói
let Nivel = "" // variável nivel

if(Heroi[1] < 1.000){                               // Se XP for menor do que 1.000 = Ferro
    Nivel = "Ferro"                                 // variável nivel = Ferro
}else if(Heroi[1] >= 1.001 && Heroi[1] <= 2.000){   // Se XP for entre 1.001 e 2.000 = Bronze
    Nivel = "Bronze"                                // variável nivel = Bronze
}else if(Heroi[1] >= 2.001 && Heroi[1] <= 5.000){   // Se XP for entre 2.001 e 5.000 = Prata
    Nivel = "Prata"                                 // variável nivel = Prata
}else if(Heroi[1] >- 5.001 && Heroi[1] <= 7.000){   // Se XP for entre 5.001 e 7.000 = Ouro
    Nivel = "Ouro"                                  // variável nivel = Ouro
}else if(Heroi[1] >= 7.001 && Heroi[1] <= 8.000){   // Se XP for entre 7.001 e 8.000 = Platina
    Nivel = "Platina"                               // variável nivel = Platina
}else if(Heroi[1] >= 8.001 && Heroi[1] <= 9.000){   // Se XP for entre 8.001 e 9.000 = Ascendente
    Nivel = "Ascendente"                            // variável nivel = Ascendente
}else if(Heroi[1] >= 9.001 && Heroi[1] <= 10.000){  // Se XP for entre 9.001 e 10.000= Imortal
    Nivel = "Imortal"                               // variável nivel = Imortal
}else if(Heroi[1] >= 10.001){                       // Se XP for maior ou igual a 10.001 = Radiante
    Nivel = "Radiante"                              // variável nivel = Radiante
}else{												// Se não para caso o campo XP esteja em branco
    Nivel = "não possui XP"							// Caso Heroi[1] esteja em branco
}
console.log("O Herói de nome " + Heroi[0] + " está no nível de " + Nivel)