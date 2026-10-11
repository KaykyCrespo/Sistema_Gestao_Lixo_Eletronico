# E-Waste: Gestao de Lixo Eletronico

Projeto academico de uma aplicacao web para cadastrar residuos eletronicos,
organizar uma lista de itens e visualizar estimativas de peso em graficos.
O objetivo e apoiar o acompanhamento do lixo eletronico e a conscientizacao
sobre seu descarte.

## Funcionalidades

- Cadastro de tipo de lixo, quantidade e peso em gramas.
- Listagem, edicao e exclusao dos registros cadastrados.
- Adicao de registros a lista "Meu Lixo" e remocao de itens dessa lista.
- Graficos de barras e pizza com base nos itens da lista e em uma meta anual informada na tela.
- Pagina inicial com conteudo sobre lixo eletronico.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| Java 17 (JDK) | Linguagem e compilacao |
| Spring Boot 2.7.5 | Aplicacao web e configuracao |
| Spring Web / Spring MVC | Rotas e controladores |
| Spring Data JPA / Hibernate | Persistencia dos registros |
| MySQL | Banco de dados |
| Thymeleaf | Templates HTML renderizados no servidor |
| Bootstrap | Estilizacao das telas |
| JavaScript / Chart.js | Graficos no navegador |
| Maven Wrapper | Dependencias, compilacao e testes |

## Como Executar

### Pre-requisitos

- JDK 17 instalado, com `JAVA_HOME` apontando para o JDK e seu `bin` no `PATH`.
- Servidor MySQL em execucao e usuario com acesso ao banco da aplicacao.
- Acesso a internet para baixar dependencias e carregar recursos das telas via CDN.

Confirme o ambiente com `java -version` e `javac -version`. Um JRE isolado nao
e suficiente. Nao e necessario instalar o Maven: o wrapper esta no projeto.

### Banco de Dados

No cliente MySQL, conectado com uma conta autorizada, crie o banco:

```sql
CREATE DATABASE IF NOT EXISTS lixoEletronico CHARACTER SET utf8mb4;
```

Use preferencialmente um usuario dedicado, com permissoes apenas nesse banco.
O Hibernate cria ou atualiza as tabelas ao iniciar, pois a configuracao atual
utiliza `spring.jpa.hibernate.ddl-auto=update`.

### Configuracao e Inicializacao no Windows

Na raiz deste repositorio, abra o PowerShell e execute:

```powershell
Set-Location "Aps -Lixo Eletrônico CRUD/bookStore"
$env:DB_URL = "jdbc:mysql://localhost:3306/lixoEletronico"
$env:DB_USERNAME = Read-Host "Usuario do banco"
$senha = Read-Host "Senha do banco" -AsSecureString
$env:DB_PASSWORD = [System.Net.NetworkCredential]::new("", $senha).Password
Remove-Variable senha
.\mvnw.cmd spring-boot:run
```

Abra [http://localhost:8080](http://localhost:8080). Para parar, pressione
`Ctrl+C`. Ao terminar, remova a senha do ambiente do terminal:

```powershell
Remove-Item Env:DB_PASSWORD -ErrorAction SilentlyContinue
```

`DB_USERNAME` e `DB_PASSWORD` sao obrigatorias. `DB_URL` e opcional e assume
`jdbc:mysql://localhost:3306/lixoEletronico` quando nao informada.
O Spring Boot nao carrega arquivos `.env` automaticamente; configure as
variaveis no terminal ou na sua ferramenta de execucao.

### Testes

Na pasta do projeto, com o banco disponivel e as mesmas variaveis configuradas:

```powershell
.\mvnw.cmd test
```

O teste existente carrega o contexto do Spring Boot e depende da configuracao
do banco. Ele nao constitui cobertura completa das funcionalidades.

### Validacao Realizada

Em 2026-10-11, a compilacao com JDK 17 passou e a aplicacao foi executada
com MySQL 8.4 em um banco descartavel. Foram verificados pelo navegador:
cadastro, edicao sem perda dos demais campos, cancelamento, adicao e remocao
da lista, exclusao e graficos de peso. O cadastro tambem foi verificado
em uma tela de 390 x 844 pixels, sem rolagem horizontal.

O empacotamento e os testes automatizados nao foram concluidos neste ambiente:
o download de `net.bytebuddy:byte-buddy-agent:1.12.18` retornou HTTP 403.
A validacao funcional nao substitui a execucao da suite automatizada.

Capturas de tela ainda nao foram incluidas: o navegador integrado produziu
imagens incompletas e a politica corporativa bloqueou a captura por navegador
headless. Imagens cortadas ou sem conteudo foram descartadas.

## Organizacao

O projeto Maven esta em [Aps -Lixo Eletronico CRUD/bookStore](Aps%20-Lixo%20Eletrônico%20CRUD/bookStore).

| Pasta no projeto Maven | Conteudo |
| --- | --- |
| `src/main/java/com/bookStore/controller` | Rotas e controle das telas |
| `src/main/java/com/bookStore/entity` | Entidades persistidas |
| `src/main/java/com/bookStore/repository` | Acesso ao banco |
| `src/main/java/com/bookStore/service` | Servicos da aplicacao |
| `src/main/resources/templates` | Paginas Thymeleaf |
| `src/main/resources/static/photos` | Imagens utilizadas pelas telas |
| `src/test/java` | Testes |

Os identificadores internos `bookStore`, `Book` e as rotas com `book` sao
nomes legados e foram preservados para evitar alteracoes de comportamento.

## Limitacoes e Seguranca

- A aplicacao nao possui autenticacao nem isolamento da lista por usuario. "Meu Lixo" representa uma lista compartilhada, nao uma conta pessoal.
- O grafico de barras atribui o peso total ao mes atual; nao existe historico mensal de descartes. A meta informada e usada no navegador e nao e persistida.
- Quantidade e peso exigem valores numericos para os graficos; a validacao dos dados precisa ser aprimorada.
- O arquivo SQL em `db.migration` nao e executado automaticamente: nao ha Flyway configurado no projeto.
- A versao do Spring Boot e antiga. Revise dependencias e seguranca antes de qualquer implantacao publica; este projeto nao deve ser tratado como pronto para producao.
- Nunca publique senhas, tokens, arquivos de ambiente ou dados pessoais. Credenciais anteriormente publicadas devem ser trocadas, mesmo apos sua remocao dos arquivos atuais, pois podem permanecer no historico Git.

O historico alcancavel deste repositorio foi sanitizado nesta revisao, com
backup original preservado apenas localmente. Isso nao elimina copias externas,
caches ou forks. Ao utilizar uma copia anterior, alinhe-a ao historico novo
para nao reintroduzir a configuracao antiga. A troca das senhas e obrigatoria.

## Autoria e Licenca

Kayky Crespo dos Santos, conforme a autoria registrada na [licenca MIT](LICENSE).
Preserve os creditos e a licenca ao reutilizar este projeto.
