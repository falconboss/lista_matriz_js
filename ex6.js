var mat = [];

const l = 20;
const c = 10;

for(var i=0;i<l;i++){
    mat[i] = [];
}
function cria(){
    var tabela = "<table>";
    for(var i = 0; i < l; i++){
        tabela += "<tr>";
        for(var j = 0; j < c; j++){
            tabela +=
                `<td>
                    <p>
                        <input type="number" id="l${i}c${j}">
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    document.body.innerHTML += tabela;
}
function calcula(){
    var vetorSoma = [];
    var soma = 0;
    for(j=0;j<c;j++){
        soma = 0;
        for(i=0;i<l;i++){
           mat[i][j] = document.getElementById("l"+i+"c"+j).value;
            soma = mat[i][j] + soma;
        vetorSoma.push(soma);
        }
    }

}
function cria(){
    var tabela = "<table>";
    for(var j = 0; j < c; j++){
        tabela += "<tr>";
        for(var i = 0; i < l; i++){
            tabela +=
                `<td>
                    <p>
                        ${mat[i][j]*vetorSoma[j]}
                </td>`;
        }
        tabela += "</tr>";
    }
    document.body.innerHTML += tabela;
}