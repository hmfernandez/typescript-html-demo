"use strict";
class CepService {
    constructor(_cep) {
        this._cep = _cep;
    }
    async consultarCep(handler) {
        let requestURI = `https://viacep.com.br/ws/${this._cep}/json/`;
        try {
            const res = await fetch(requestURI);
            const dados = await handler(res).json();
            if (dados.erro) {
                throw new Error('Falha ao obter os dados. Verifique o CEP informado.');
            }
            return new Endereco(dados.cep, dados.logradouro, dados.bairro, dados.localidade, dados.uf);
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
}
