$(document).ready(function () {
  function limpa_formulário_cep() {
    $("#endereco").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#municipio").val("");
  }

  $("#cep").blur(function () {
    const cep = $(this).val().replace(/\D/g, "");

    if (cep != "") {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        $("#endereco").val("Procurando...");
        $("#bairro").val("Procurando...");
        $("#cidade").val("Procurando...");
        $("#municipio").val("Procurando...");

        $.getJSON(
          "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
          function (dados) {
            if (!("erro" in dados)) {
              $("#endereco").val(dados.logradouro);
              $("#bairro").val(dados.bairro);
              $("#cidade").val(dados.localidade);
              $("#municipio").val(dados.uf);
            } else {
              limpa_formulário_cep();
              alert("CEP não encontrado.");
            }
          }
        );
      } else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } else {
      limpa_formulário_cep();
    }
  });
});
