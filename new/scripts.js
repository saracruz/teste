var cotacao = {
  USD: 0.3177,
  EUR:  0.29217,
  JPY: 36.176
};

var cotacaoAtiva = "USD";
var inputEntrada = document.querySelector("input");
var paragrafo = document.querySelector("p");

function alterarMoedaAtiva(moedaSelecionada)
{
  cotacaoAtiva = moedaSelecionada;
  console.log(moedaSelecionada);
}

function calcular()
{
  var valor = inputEntrada.value;

  var resultado = valor * cotacao[cotacaoAtiva];

  paragrafo.innerHTML = resultado;
}
