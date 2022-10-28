function cadastraProduto() {

    var nome1 = document.getElementById("name").value;

    var email1 = document.getElementById("email").value;

    var number1 = document.getElementById("number").value;

    var sexo1 = document.getElementById("drop").value;

    var frequencia = document.getElementById("select").value;

    var out1 = document.getElementById("out1").value;

    var out2 = document.getElementById("out2").value;

    var out3 = document.getElementById("out3").value;

    var out4 = document.getElementById("out4").value;

    var out5 = document.getElementById("out5").value;

    var checkedValue1 = document.querySelector('#check1').checked;

    var checkedValue2 = document.querySelector('#check2').checked;

    var checkedValue3 = document.querySelector('#check3').checked;

    var checkedValue4 = document.querySelector('#check4').checked;

    var sugestao = document.getElementById("sugestao").value;


    var pessoa = {

        nome: nome1,
        email: email1,
        idade: number1,
        sexo: sexo1,
        frequencia: frequencia,
        QualVisual: out1,
        QualSonora: out2,
        QualTransmissão: out3,
        QualVideo: out4,
        QualInteração: out5,
        JogosInteresse: checkedValue1,
        LivesDivertidas: checkedValue2,
        HorarioLives: checkedValue3,
        Jogabilidade: checkedValue4,
        Sugestão: sugestao
    }


    localStorage.setItem("registro", JSON.stringify(pessoa));
    var registro = localStorage.getItem("registro");
    alert(JSON.parse(registro))


}