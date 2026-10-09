# Validação — 09/10/2026

Verificação em navegador Chromium via Playwright, com servidor HTTP local.

- Larguras: 320, 375, 390, 768 e 1440 pixels. A largura do documento correspondeu à janela em todas; sem rolagem horizontal.
- Imagem carregada nas cinco larguras. Capturas completas de celular (390 px) e computador (1440 px) inspecionadas.
- Destinos dos links internos presentes.
- Os cinco botões de contato abriram o aviso de número ainda não informado. Escape fechou o diálogo em todos os casos.
- Botão “Voltar à página” fechou o diálogo; link para pular ao conteúdo com foco por teclado.
- Sintaxe de app.js e config.js verificada com node --check.

## Limites

Não foi testado envio real ao WhatsApp, pois o número não foi fornecido. A verificação de responsividade foi feita por simulação de janela, sem aparelho físico. Fontes externas dependem de internet; há fontes locais de fallback. A nota final é atribuída pelo professor.
