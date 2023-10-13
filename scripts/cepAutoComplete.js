$(document).ready(function () {
  function limpa_formulário_cep() {
    $("#endereco").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#municipio").val("");
  }
  const addFluigToast = (title, type, timeout) => {
    FLUIGC.toast({
      title: `${title}`,
      message: "",
      type: `${type}`,
      timeout: `${timeout}`,
    });
  };
  
  $("#cep").blur(function () {
    const cep = $(this).val().replace(/\D/g, "");

    if (cep != "") {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        $("#endereco").val("Procurando...");
        $("#bairro").val("Procurando...");
        $("#cidade").val("Procurando...");
        $("#estado").val("Procurando...");

        $.getJSON(
          "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
          function (dados) {
            if (!("erro" in dados)) {
              $("#endereco").val(dados.logradouro);
              $("#bairro").val(dados.bairro);
              $("#cidade").val(dados.localidade);
              $("#estado").val(dados.uf);
            } else {
              limpa_formulário_cep();
              addFluigToast('CEP não encontrado', 'warning', 'fast');
            }
          }
        );
      } else {
        limpa_formulário_cep();
        addFluigToast('formato de cep invalido, tente novamente', 'warning', 'fast');
      }
    } else {
      limpa_formulário_cep();
    }
  });
});
