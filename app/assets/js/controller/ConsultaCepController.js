"use strict";
class ConsultaCepController {
    constructor() {
        this._inputCep = document.querySelector('#zip');
        this._service = new CepService(this._inputCep.value.replace(/-/g, ''));
    }
    async consultarCep() {
        try {
            const isOk = (res) => {
                if (res.ok) {
                    return res;
                }
                else {
                    throw new Error(res.statusText);
                }
            };
            const endereco = await this._service.consultarCep(res => isOk(res));
            this.atualizarView(endereco);
        }
        catch (error) {
            console.log(error);
            this.exibirMensagem(error.message);
        }
    }
    atualizarView(endereco) {
        jQuery('#cep').html(endereco.cep);
        jQuery('#logradouro').html(endereco.logradouro);
        jQuery('#bairro').html(endereco.bairro);
        jQuery('#localidade').html(endereco.localidade);
        jQuery('#uf').html(endereco.uf);
    }
    exibirMensagem(msg) {
        jQuery('#mensagem').html(`
            \<strong\>Atenção!\<\/strong\> ${msg}
        `);
        jQuery('#mensagem').removeClass('sr-only');
    }
}
