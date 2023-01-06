var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = "";

function validarVitoria(){
    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == 'papel'){
        if(enemyOpt == 'pedra'){
            // vitoria
            vencedor.innerHTML = 'O player ganhou!';
        }else if(enemyOpt == 'papel'){
            // empate
            vencedor.innerHTML = 'O jogo ficou empatado!';
        }else if(enemyOpt == 'tesoura'){
            // derrota
            vencedor.innerHTML = 'O player perdeu. Vitória do bot!';
        }
    }

    if(playerOpt == 'pedra'){
        if(enemyOpt == 'tesoura'){
            // vitoria
            vencedor.innerHTML = 'O player ganhou!';
        }else if(enemyOpt == 'pedra'){
            // empate
            vencedor.innerHTML = 'O jogo ficou empatado!';
        }else if(enemyOpt == 'papel'){
            // derrota
            vencedor.innerHTML = 'O player perdeu. Vitória do bot!';
        }
    }

    if(playerOpt == 'tesoura'){
        if(enemyOpt == 'papel'){
            // vitoria
            vencedor.innerHTML = 'O player ganhou!';
        }else if(enemyOpt == 'tesoura'){
            // empate
            vencedor.innerHTML = 'O jogo ficou empatado!';
        }else if(enemyOpt == 'pedra'){
            // derrota
            vencedor.innerHTML = 'O player perdeu. Vitória do bot!';
        }
    }
}

function resetEnemy(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3; // childNodes no indice 0 para puxar as imagens da div;
    }
}

function enemyJogar(){
    let rand = Math.floor(Math.random()*3); // math.random dá um numero aleatorio entre 1 e 0; Math floor serve para arredondar o numero;

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetEnemy();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }
    validarVitoria();
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length ; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length ; i++){
    elementos[i].addEventListener('click',(t)=>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        enemyJogar();
    });
}

