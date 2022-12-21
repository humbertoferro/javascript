let prova1, prova2, media, situacao;
        prova1 = 7;
        prova2 = 3;
        media = (prova1 + prova2) / 2;
        if (media >= 7) {
            situacao = "Aprovado";
        }else if (media >= 5){
                situacao = "Recuperação";
            }
        else {situacao = "Reprovado";}    
        
        console.log("Prova 1:" + prova1);
        console.log("Prova 2:" + prova2);
        console.log("Media:" + media);
        console.log("Situação:" + situacao);
        //Operadores de comparação:
        let valorA = 1;
        let valorB = "1"; //sempre quando um valor está em aspas ele é uma string
        let valorC = 3;
        let valorD = 3.0; //tipo float

        console.log (valorA==valorB);
        console.log (valorB!=valorC); //esse símbolo é de diferente
        console.log (valorA===valorB);

        let itemA = 0;
        let itemB = "";
        let itemC = 1;
        let itemD = "teste";

        if (!itemB!=""){ //Colocando uma exclamação no incio eu inverto o resultado
            console.log ("Verdadeiro");
        }else{
            console.log("Falso")
        }