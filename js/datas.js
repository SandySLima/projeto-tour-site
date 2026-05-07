/* 1º Criar os objetos para os elementos que serão manipulados:  */

const array_botoes_ingresso = document.querySelectorAll('.botao_ingresso');
const obj_form = document.querySelector('.formulario_ingresso');
obj_form.style.display = 'none';

const obj_botao_fechar_formulario = document.querySelector('.botao_fechar_formulario');

const obj_formulario = document.querySelector('.formulario_ingresso');

const obj_qtd_ingressos = document.getElementById('qtd_ingressos');
const obj_tipo_ingresso = document.getElementsByName('ingresso');

const obj_valor_unitario = document.getElementById('valor_unitario');
const obj_valor_total = document.getElementById('valor_total');

/* 2º Adicionar os eventos para chamar as funções: */

for (const obj_botao_ingresso of array_botoes_ingresso) {
    obj_botao_ingresso.addEventListener('click', function () {
        funExibeModalFormulario(this.parentElement.querySelector('h3').innerText);
    });
}

obj_botao_fechar_formulario.addEventListener('click', funFechaModalFormulario);

obj_formulario.addEventListener('submit', funSimulaEnvioCompra);

obj_qtd_ingressos.addEventListener('input', funAtualizaValores);
for (const ingresso of obj_tipo_ingresso) {
    ingresso.addEventListener('change', funAtualizaValores);
}

/* 3º Declarar as funções para executar as ações: */ 

// Scroll de forma mais suave até o formulário
function funRolarParaFormulario() {
    obj_form.scrollIntoView({ behavior: 'smooth' });
}

// Exibir formulário e selecionar cidade após click no botão
function funExibeModalFormulario(par_h3) {
    obj_form.style.display = 'block';

    const selectCidade = document.getElementById('cidade');

    if (par_h3.includes("Los Angeles")) {
        selectCidade.value = "Los Angeles";
    } else if (par_h3.includes("Paris")) {
        selectCidade.value = "Paris";
    } else if (par_h3.includes("Jacarta")) {
        selectCidade.value = "Jacarta";
    } else if (par_h3.includes("Tóquio")) {
        selectCidade.value = "Tóquio";
    } else {
        selectCidade.value = "";
    }

    funRolarParaFormulario();
}

// Fechar o formulário
function funFechaModalFormulario() {
    obj_form.style.display = 'none';
}

// Simular envio da compra
function funSimulaEnvioCompra(event) {
    event.preventDefault(); // p/ impedir envio real

    alert('Compra efetuada com sucesso!\nUm e-mail será enviado com a confirmação. Obrigada por comprar o ingresso para a Reverie Tour!');
    obj_form.reset();
    obj_form.style.display = 'none';
}

// atualizar os valores de acordo com as escolhas do usuário
function funAtualizaValores() {
    let preco = 0;
    const qtd = Number(obj_qtd_ingressos.value) || 0;
    let tipoSelecionado = null;

    for (const ingresso of obj_tipo_ingresso) {
        if (ingresso.checked) {
            tipoSelecionado = ingresso.value;
            break;
        }
    }

    // obs: switch case de acordo com base ensinada na aula de Algoritmos
    switch (tipoSelecionado) {
        case 'plateia':
            preco = 207;
            break;
        case 'vip':
            preco = 1207.50;
            break;
        case 'camarote':
            preco = 430;
            break;
        case 'pista':
            preco = 320;
            break;
        default:
            preco = 0;
    }

    // preço reajustado com vírgula para facilitar a leitura do usuário
    obj_valor_unitario.textContent = `Valor por ingresso: R$ ${preco.toFixed(2).replace('.', ',')}`;
    const total = preco * qtd;
    obj_valor_total.textContent = `Total a pagar: R$ ${total.toFixed(2).replace('.', ',')}`;
}




