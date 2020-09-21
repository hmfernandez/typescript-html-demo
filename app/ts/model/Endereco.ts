class Endereco {

    constructor(
        private _cep: string,
        private _logradouro: string,
        private _bairro: string,
        private _localidade: string,
        private _uf: string) {}

    
    public get cep() : string {
        return this._cep;
    }

    public get logradouro() : string {
        return this._logradouro;
    }

    public get bairro() : string {
        return this._bairro;
    }

    public get localidade() : string {
        return this._localidade;
    }

    public get uf() : string {
        return this._uf;
    }

}