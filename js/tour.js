const obj_musicas_select = document.querySelector('.musicas_select');
const obj_reverie_album_iframe = document.querySelector('.reverie_album_iframe');
const obj_reverie_album_capa = document.querySelector('.reverie_album_capa');
let musicasSelecionaveis = ["Chocolate", "Elevator", "Lemonade", "Love Comes Back", "No Problem"];

obj_musicas_select.addEventListener('change', funEscolherMusicaSelect);

function funMostrarMusica() {
    if(obj_musicas_select.value !== 'default') {
    obj_reverie_album_capa.style.display = 'none';
    obj_reverie_album_iframe.style.display = 'block';
} else {
    obj_reverie_album_capa.style.display = 'block';
    obj_reverie_album_iframe.style.display = 'none';
}
}


function funEscolherMusicaSelect() {
    if(obj_musicas_select.value === musicasSelecionaveis[1]) {
        obj_reverie_album_iframe.setAttribute('src', 'https://www.youtube.com/embed/lg3r8-4yfDI');
    } else if (obj_musicas_select.value === musicasSelecionaveis[2]){
        obj_reverie_album_iframe.setAttribute('src', 'https://www.youtube.com/embed/l_01KXjxVr4');
    } else if (obj_musicas_select.value === musicasSelecionaveis[3]) {
        obj_reverie_album_iframe.setAttribute('src', 'https://www.youtube.com/embed/q1aQe24270M');
    } else if(obj_musicas_select.value === musicasSelecionaveis[4]) {
        obj_reverie_album_iframe.setAttribute('src', 'https://www.youtube.com/embed/7O9Dptl6Uy8');
    } else {
        obj_reverie_album_iframe.setAttribute('src', 'https://www.youtube.com/embed/2FOlnuEfNrU');
    }
     funMostrarMusica();
    }

