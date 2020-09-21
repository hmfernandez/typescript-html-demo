# typescript-html-demo

Exemplo simples de uso do **HTML** e **TYPESCRIPT**.
Por se tratar de um exemplo para fins educativos - e para melhorar o entendimento - essa demonstração foca apenas no basico para a integração Typescript com HTML e, portanto, abstrai alguns conceitos e praticas, possui muito comentários, etc.

## Pré-requitos

- Node.js , pois precisaremos do modulo ``npm``. Instale o Node.js nas versões **pares** pois versões ímpares não são **LTS!**
	> ubuntu : ``` sudo apt-get install -y nodejs ```

	> windows : baixe o instalador da página do [Node.js](https://nodejs.org/). Durante a instalação, basta seguir o assistente e não alterar a pasta padrão.

- Typescript
	Após baixar o Nodejs execute o comando abaixo para baixar o modulo Typescript de forma global, dessa forma você poderá executar o comando `tsc` em qualquer lugar através do seu terminal.

	>  ``` npm install -g typescript ```

## Preparando o ambiente

1. Abra a IDE de sua preferência. Minha sugestão é utilizar do [Visual Studio Code](https://code.visualstudio.com/download) que é um editor gratuito e multiplataforma (Mac, Linux e Windows) que se integra muito bem com o TypeScript com zero esforço por parte do desenvolvedor.  

2. Crie uma pasta com o nome do seu projeto, vá até o seu terminal no diretório criado e execute os comandos:

	- Comando para criação do 'package.json' , onde '-y' instrui que iremos aceitar todas as sugestões inciais:

		>  ``` npm init -y ```

	- Comando para criar o arquivo de configurações do typescript:

		>  ``` tsc --init ```

## Instalação
Baixe os fontes para seu ambiente local (``git clone``), abra o terminal e vá até a pasta **typescript-html-demo**. Por fim, execute o comando abaixo para que todas as dependências do projeto sejam resolvidas:

>  ``` npm install ```

A partir daqui, caso tenha alguma duvida, pasta verificar os comentários incluídos nos fontes (inclusive nos arquivos de configurações).

## Contributing
Fork it!

## License
MIT

## Keywords
- [TypeScript](https://www.npmjs.com/search?q=keywords:TypeScript)

- HTML