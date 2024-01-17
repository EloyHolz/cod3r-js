// Aprendendo sobre LET
    
    // LET tem um escopo mais reduzido e controlado que o var, por isso que nao afetam todos, apenas os presentes no escopo em foco
        // tem escopo - Global, de função, de bloco

    var numero = 1
    {
        let numero = 2
        console.log ('dentro =', numero)
    }
    console.log('fora = ', numero)

    // LET em Loop
        //  so fica visivel no blocof

    for (let a = 0; a <= 10; a++){
        console.log (a)
    }

    

// Aprendendo sobre VAR

    {{{{var sera = "Será??"}}}}
    console.log(sera)

    // dentro de um bloco de codigo, desde que nao seja uma função, o var continuará visível, independente da quatidade e para todos fora do bloco -> escopo visivel fora 
        // o escopo na função é limitada a ela
        // tem escopo - global, de funçao

    function teste() {
         var local = 123
         console.log(local)
    }

    teste()
     var numero = 1
     {
         var numero= 2
         console.log ("dentro = ", numero)
     }
     console.log ('fora = ', numero)
     

    //  Var em Loop

     for (var i = 0; i <=10; i++){
        console.log(i)
     }
     console.log ("i=", i)
    //  o i que apareceu apos o loop é pq ele tornou falso o mesmo e por isso saiu (estava maior q 10)









