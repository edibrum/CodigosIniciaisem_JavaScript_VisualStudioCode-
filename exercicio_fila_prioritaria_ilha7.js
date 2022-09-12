// exercicio_fila_prioritaria

/* Em uma farmácia, existem duas filas. Uma normal e outra preferencial. Ambas as filas chamam os clientes para atendimento. Quando um cliente chega na farmácia, ele é direcionado para uma das filas.
Construa um algoritmo com funções que:

Receba novos clientes por nome; ************************************************ DONE
Direcione o cliente para a fila (normal ou prioritária); *********************** DONE
Exiba o total de clientes para as filas; *************************************** DONE
Chame um cliente para atendimento (preferencial ou prioritário); *************** DONE
Guarde um log de clientes que já foram atendimentos; *************************** DONE
Exiba na tela o total de clientes que já foram atendidos; ********************** DONE
Exiba os nomes dos clientes atendidos; ***************************************** DONE
*/

// *******************************************************************************
// 00 - VARIÁVEIS:
let cont_normal = 0;
let cont_prioridade = 0;
let opcao = 0;
let CLIENTES_PRIORIDADE = [];
let CLIENTES_NORMAL = [];
let atendidos = [];

// *******************************************************************************
// 01 - MOSTRA O MENU DE AÇÕES:

function mostraMenu(){
	opcao=prompt("Digite a opcao desejada\n\n"+
  	"1 - Cadastrar cliente na fila\n"+
    "2 - Chamar atendimento normal\n"+
    "3 - Chamar atendimento prioritaio\n"+
    "4 - Exibe o total de clientes em cada fila\n" +
    "5 - Exibir os clientes ja atendidos\n"+
    "6 - Sair")
    return opcao;
};

// *******************************************************************************
// 02 - CAPTA OS CLIENTES E DIRECIONA PARA A FILA IDEAL
function capta () {

    let nome = prompt("Infome o nome:");
    let prioridade = confirm("É prioridade?");
  
    if(prioridade)
  		CLIENTES_PRIORIDADE.push(nome); 
  
    else
  	    CLIENTES_NORMAL.push(nome);
};

// *******************************************************************************
// 03 - MOSTRA / ATUALIZA O TOTAL DE CLINETES PARA AS FILAS:
function total_fila () {
    alert("Total de clientes em fila: \n NORMAL = " + CLIENTES_NORMAL.length + "\n PRIORITARIO = " + CLIENTES_PRIORIDADE.length + "\n");
};

// *******************************************************************************
// 04 - EXECUTA AS AÇÕES D0 MENU:
do {

    mostraMenu();
    
    switch (opcao){
        case "1":
        {
            capta();
            break;
        }  
        case "2":
        {
            atendidos.push(CLIENTES_NORMAL.shift());
            cont_normal++;
            break;
        }
        case "3":
        {
            atendidos.push(CLIENTES_PRIORIDADE.shift());
            cont_prioridade++;
            break;
        }
        case "4":
        {
            total_fila();
            break;
        }
        case "5":
        {
            if (atendidos.length==0)
                alert("Nenhum cliente foi atendido até agora.");
            else
                alert("Os cliente já atendidos sao: "+atendidos+" totalizando " +(cont_normal+cont_prioridade)+ " clientes.");
            break; 
        }    
        case "6":
            alert("Você Saiu!");
    }

}while(opcao!=6);

// *******************************************************************************
// FIM !
