"use strict";
class Endereco {
    constructor(_cep, _logradouro, _bairro, _localidade, _uf) {
        this._cep = _cep;
        this._logradouro = _logradouro;
        this._bairro = _bairro;
        this._localidade = _localidade;
        this._uf = _uf;
    }
    get cep() {
        return this._cep;
    }
    get logradouro() {
        return this._logradouro;
    }
    get bairro() {
        return this._bairro;
    }
    get localidade() {
        return this._localidade;
    }
    get uf() {
        return this._uf;
    }
}
