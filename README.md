# Leticia — Presença
Landing page informativa criada para o projeto de extensão PEC IV. Versão escolhida pela cliente na reunião, com foco em concierge de ingressos, atendimento pessoal e rosa.

## Entrega acadêmica — 09/10/2026

Projeto em HTML, CSS e JavaScript, sem instalação de dependências. Consulte [AVALIACAO.md](AVALIACAO.md) para os requisitos e o roteiro da apresentação, e [VALIDACAO.md](VALIDACAO.md) para os testes realizados.

**Pendência conhecida:** a cliente ainda não forneceu o WhatsApp comercial. O campo está vazio por solicitação do responsável; os botões mostram esse aviso. Nenhum dado de contato foi inventado.

## Abrir
Abra `index.html` no navegador. Não requer instalação ou compilação.
Alternativa: execute `python3 -m http.server 8000` nesta pasta e acesse http://localhost:8000.

## Arquivos
- `index.html`: conteúdo completo da landing page; funciona para leitura mesmo sem JavaScript.
- `style.css`: layout responsivo e paleta rosa.
- `app.js`: botões de contato e modal de demonstração.
- `config.js`: número comercial do WhatsApp.
- `event.jpg`: fotografia ilustrativa.
- `CREDITOS.txt`: autoria e licença da fotografia.

## Conectar o WhatsApp
Em `config.js`, preencha `whatsapp` com código do país + DDD + número, somente dígitos.
Enquanto o campo estiver vazio, os botões abrem a indicação de demonstração.
Com número válido, encaminham para o WhatsApp com mensagens específicas para organizadores, compra ou suporte.
Não existe pagamento, emissão automática de ingressos, catálogo de eventos ou formulário enviando dados.

## Identidade visual
- Rosa principal: #a82b63.
- Fundo rosa claro: #fff3f8.
- Bloco de processo: #f9ddea.
- Texto principal: #57233c.
- Tipografia: Playfair Display para títulos; DM Sans e Manrope para texto e marca.
As fontes são carregadas pelo Google Fonts e precisam de internet; há fontes de sistema como alternativa.

## Publicação e histórico
Este pacote é independente e não inclui credenciais ou dependências de hospedagem.
Pode ser publicado em hospedagem de sites estáticos.
Os três protótipos originais foram preservados localmente no histórico do projeto; este repositório contém apenas a versão escolhida.
Esta versão rosa foi salva localmente; o endereço publicado anteriormente não foi alterado.

## Pendências
Confirmar WhatsApp comercial, disponibilidade/escopo dos serviços e fotografia definitiva.
A fotografia é ilustrativa e não representa evento atendido por Leticia.
