# Revisao dos Repositorios

Data da consulta: 2026-10-11. Conta: [KaykyCrespo](https://github.com/KaykyCrespo).

## Escopo

Inventario dos 10 repositorios publicos retornados pela
[API do GitHub](https://api.github.com/users/KaykyCrespo/repos?per_page=100&sort=updated).
Foram revisadas as arvores de arquivos dos projetos publicos e procurados
indicadores textuais de segredos em seus historicos locais. O arquivo RAR do
projeto legado foi extraido em uma pasta isolada, sem executar seu conteudo.
Essa busca nao garante ausencia de segredos, especialmente em binarios.

A revisao dos projetos privados foi registrada somente em um relatorio local
fora deste repositorio. Parte deles ficou inacessivel por Git e API; nenhum
nome, URL ou conteudo privado foi incluido neste documento publico.

## Inventario e Recomendacoes

| Repositorio atual | Tecnologia indicada pelo GitHub | Descricao atual | Acao recomendada |
| --- | --- | --- | --- |
| [PEDIDOS_JA_API](https://github.com/KaykyCrespo/PEDIDOS_JA_API) | Python / TypeScript | Atualizada | README extenso existente; confirmados FastAPI, PostgreSQL, React e Vite. Topicos adicionados. |
| [Assinaturas_Ed25519_versus_RSA-2048](https://github.com/KaykyCrespo/Assinaturas_Ed25519_versus_RSA-2048) | Python | Presente e explica a pesquisa | Manter; documentar reproducao do experimento. Considerar `benchmark-assinaturas-ed25519-rsa`. |
| [INICIACAO_CIENTIFICA-Analise-de-desempenho-em-VM-S-comparando-a-criptografia-RSA](https://github.com/KaykyCrespo/INICIACAO_CIENTIFICA-Analise-de-desempenho-em-VM-S-comparando-a-criptografia-RSA) | Python | Presente e explica a pesquisa | Manter; encurtar o nome, por exemplo `benchmark-criptografia-vms`, preservando o contexto academico no README. |
| [Iniciacao_Cientifica_2024-_RSA](https://github.com/KaykyCrespo/Iniciacao_Cientifica_2024-_RSA) | Python | Atualizada | Estudo de varios algoritmos criptograficos e interface web. Indicadores em SHA.py exigem contexto; nao foram classificados automaticamente como credenciais reais. |
| [APS-2024-2_TADS](https://github.com/KaykyCrespo/APS-2024-2_TADS) | Python / JavaScript | Presente; compara ordenacao de dados | Sem README na arvore revisada. Pastas de testes exploratorios misturadas ao projeto; preservar e documentar antes de reorganizar. |
| [sistema-gestao-lixo-eletronico](https://github.com/KaykyCrespo/sistema-gestao-lixo-eletronico) | Java / HTML / JavaScript | Atualizada | Renomeado a partir de Aps_Lixo_Eletronico-CRUD. README, configuracao e formulario revisados; remoto local atualizado. |
| [Aps---Lixo-Eletr-nico-JAVA-Spring-Boot-MySQL-Javascript-](https://github.com/KaykyCrespo/Aps---Lixo-Eletr-nico-JAVA-Spring-Boot-MySQL-Javascript-) | Java / HTML / JavaScript no RAR | Atualizada | Continha apenas um RAR com 142 entradas e duas configuracoes com senhas literais. Nao e duplicidade confirmada; autorizada a retirada do RAR publico com backup local e README de referencia. |
| [Python---Decis-o-Simples](https://github.com/KaykyCrespo/Python---Decis-o-Simples) | Python | Presente; exercicios | Preservar como estudo ou arquivar se encerrado. Considerar `python-exercicios-condicionais`. |
| [Programa-o-Sequencial---Python](https://github.com/KaykyCrespo/Programa-o-Sequencial---Python) | Python | Presente; exercicios | Preservar como estudo ou arquivar se encerrado. Considerar `python-exercicios-sequenciais`. |
| [Criptografia-RSA](https://github.com/KaykyCrespo/Criptografia-RSA) | Python / JavaScript | Presente | Confirmados arquivos Python, HTML, CSS e JavaScript. A descricao nao contradiz necessariamente a linguagem predominante do GitHub. |

Os dez repositorios publicos receberam topicos verificados e continuam ativos,
conforme a decisao do proprietario. Nenhum repositorio foi excluido ou arquivado.
As arvores consultadas nao estavam vazias; o projeto legado continha somente
um arquivo compactado. Projetos antigos nao devem ser excluidos por idade.
A linguagem predominante do GitHub nao representa necessariamente toda a stack:
o E-Waste, por exemplo, tem backend Java e templates HTML.

## Alteracoes Locais no E-Waste

- README revisado com objetivo, funcionalidades, tecnologias, configuracao, execucao, testes, autoria, licenca e limitacoes.
- Credenciais literais substituidas por `DB_USERNAME` e `DB_PASSWORD`; URL configuravel por `DB_URL`.
- Requisito Java padronizado em JDK 17, eliminando a divergencia entre Java 11 e 16.
- Nome e descricao de apresentacao no Maven alinhados ao E-Waste, sem renomear pacotes ou rotas.
- Regras de exclusao na raiz para arquivos locais, segredos comuns, logs e artefatos de compilacao.
- Configuracoes IntelliJ retiradas do indice Git, mantendo os arquivos locais.
- Formulario de edicao corrigido para preservar os valores existentes; cancelamento sem dependencia de uma porta fixa.
- Compilacao Java e fluxos de cadastro, edicao, cancelamento, lista, graficos e exclusao verificados com MySQL descartavel e registros ficticios.

## Pendencias em Ordem de Prioridade

- [ ] Trocar a senha de banco anteriormente exposta; se reutilizada, trocar tambem nos outros servicos. Nao registrar a nova senha em documentos ou mensagens.
- [x] Limpar os historicos do E-Waste e da copia RAR com backups locais. Ambos publicados com force-with-lease e referencias remotas verificadas; nenhuma senha literal de datasource encontrada nas referencias sanitizadas do E-Waste e nenhum RAR no historico alcancavel do legado.
- [x] Preparar JDK 17 e MySQL portateis, compilar o codigo principal e validar os fluxos reais no navegador.
- [ ] Executar a suite automatizada e o empacotamento: download de byte-buddy-agent:1.12.18 bloqueado com HTTP 403 neste ambiente. Nao desativar a validacao TLS nem remover testes para mascarar o bloqueio.
- [ ] Capturar telas legiveis: navegador integrado produziu imagens incompletas e captura headless foi bloqueada por politica corporativa. Nenhuma imagem invalida deve ser publicada.
- [x] Atualizar o About e os topicos do E-Waste e adicionar topicos aos demais projetos publicos com base nas tecnologias verificadas.
- [x] Renomear somente o E-Waste para sistema-gestao-lixo-eletronico e atualizar o remoto local, conforme aprovado.
- [ ] Completar a revisao dos projetos privados sem acesso Git/API; tratar os indicadores de segredos no relatorio local, sem publicar seu conteudo.
- [x] Comparar o material de lixo eletronico; manter todos os repositorios ativos e preservar o legado em backup, conforme aprovado.
- [x] Publicar as alteracoes locais revisadas com mensagens de commit descritivas, autoria antiga preservada e endereco noreply nos novos commits.

Os backups originais contem material sensivel e nao devem ser publicados nem
restaurados sobre os repositorios limpos. Copias antigas precisam ser alinhadas
ao historico novo para evitar reintroduzir os arquivos removidos. A limpeza de
referencias nao garante a exclusao de caches, forks ou objetos antigos mantidos
pelo provedor; se necessario, solicitar a remocao ao suporte do GitHub.

## Historico e Autoria

Preservar autoria, licencas e creditos das fontes utilizadas. Nao criar commits
artificiais, alterar datas ou reorganizar o historico apenas para aumentar
contribuicoes. Dividir mudancas reais em commits que expliquem o trabalho, como:

- `fix: substitui credenciais do banco por variaveis de ambiente`
- `build: padroniza compilacao em Java 17`
- `chore: remove configuracoes locais de IDE do versionamento`
- `docs: documenta o E-Waste e a revisao dos repositorios`

Somente o E-Waste foi renomeado. Descricoes necessarias e topicos dos dez projetos
publicos foram atualizados. Nenhum repositorio foi excluido ou arquivado.
Reescritas de historico foram autorizadas apenas para os dois projetos com as
configuracoes sensiveis confirmadas; backups originais ficam fora do repositorio.
