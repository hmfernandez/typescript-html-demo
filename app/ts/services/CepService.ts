class CepService {

    constructor(private _cep:string) {}

    async consultarCep(handler: HandlerFunction): Promise<Endereco> {
        
        let requestURI = `https://viacep.com.br/ws/${this._cep}/json/`;

        try {
            const res = await fetch(requestURI);
            const dados:EnderecoEsperado = await handler(res).json();

            if (dados.erro) {
                throw new Error('Falha ao obter os dados. Verifique o CEP informado.');
            }


            return new Endereco(dados.cep, dados.logradouro, dados.bairro, dados.localidade, dados.uf);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

interface HandlerFunction {
    (res: Response): Response
}

interface EnderecoEsperado {
    cep : string,
    logradouro : string,
    bairro : string,
    localidade : string,
    uf : string,
    erro: string
}