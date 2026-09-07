# Vortex Imóveis

Site premium de imobiliária de alto padrão, projetado com foco em hierarquia visual, tipografia refinada e experiência do usuário excepcional.

## 🏗️ Estrutura do Projeto

```
vortex/
├── index.html              # Página principal
├── property.html           # Página de detalhes do imóvel
├── thank-you.html          # Página de agradecimento
├── 404.html               # Página de erro 404
├── privacy.html           # Política de privacidade
├── terms.html             # Termos de uso
├── styles.css             # Estilos principais
├── script.js              # JavaScript principal
├── property-data.js       # Banco de dados de imóveis
├── property-detail.js     # JavaScript da página de detalhes
├── robots.txt             # Instruções para crawlers
├── llms.txt              # Instruções para LLMs
├── sitemap.xml           # Mapa do site
└── README.md             # Este arquivo
```

## ✨ Funcionalidades

### Página Principal
- **Hero Section** com busca avançada de imóveis
- **Filtros funcionais** por tipo de propriedade
- **Grid responsivo** de propriedades (3 → 2 → 1 coluna)
- **Seção sobre** com estatísticas da empresa
- **Formulário de contato** com validação
- **Cookie banner** com gestão de consentimento

### Páginas de Detalhes
- **Galeria de imagens** com thumbnails interativos
- **Especificações completas** do imóvel
- **Lista de características** e comodidades
- **Formulário de contato** contextual
- **Informações técnicas** (IPTU, condomínio, código)

### Páginas Legais
- Política de privacidade (LGPD compliant)
- Termos de uso
- Página 404 personalizada
- Página de agradecimento

### SEO e Acessibilidade
- Sitemap.xml para indexação
- robots.txt configurado
- llms.txt para LLMs
- Semântica HTML5
- ARIA labels
- Navegação por teclado

## 🎨 Princípios de Design

O projeto segue uma hierarquia visual rigorosa:

1. **Arquitetura e Composição** — Layout limpo, grid consistente, espaçamento generoso
2. **Tipografia** — Sistema de fontes nativo, escala tipográfica harmoniosa, letter-spacing negativo
3. **Fotografia** — Imagens de alta qualidade com transições suaves
4. **Espaçamento** — Sistema de tokens de 4px, ritmo vertical consistente
5. **Linhas e Divisores** — Uso minimal e intencional de bordas
6. **Interações** — Transições suaves, estados claros de hover
7. **Cor** — Paleta monocromática sofisticada, alto contraste

## 🎯 Experiência do Usuário

### Desktop (1280px+)
- Grid de 3 colunas para propriedades
- Navegação fixa com backdrop blur
- Tipografia grande e legível
- Espaçamento amplo

### Tablet (640-1024px)
- Grid de 2 colunas
- Menu mobile responsivo
- Busca empilhada
- Elementos otimizados

### Mobile (<640px)
- Grid de 1 coluna
- Navegação hamburger
- Formulários full-width
- Touch-friendly

## 🚀 Como Usar

1. Abra `index.html` em um navegador moderno
2. Navegue pelos imóveis disponíveis
3. Use os filtros para refinar a busca
4. Clique em "Ver detalhes" para ver informações completas
5. Preencha o formulário de contato para solicitar informações

## 📊 Banco de Dados de Imóveis

O arquivo `property-data.js` contém 6 propriedades fictícias:

1. Residencial Aurora (Jardins) - R$ 2.850.000
2. Villa Serenity (Alphaville) - R$ 4.200.000
3. Cobertura Horizon (Itaim Bibi) - R$ 5.600.000
4. Casa Magnólia (Morumbi) - R$ 3.950.000
5. Loft Urban (Vila Madalena) - R$ 1.680.000
6. Residência Ébano (Granja Viana) - R$ 6.400.000

Para adicionar novos imóveis, edite `property-data.js` seguindo a estrutura existente.

## 🍪 Gestão de Cookies

O cookie banner:
- Aparece após 1 segundo da carga da página
- Armazena a escolha do usuário no localStorage
- Não exibe novamente após a escolha
- Oferece opções de aceitar ou recusar

## 🔧 Customização

### Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --color-accent: #0a0a0a;
    --color-text-primary: #0a0a0a;
    /* ... */
}
```

### Tipografia
Modifique a escala tipográfica:
```css
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
/* ... */
```

### Espaçamento
Ajuste o sistema de tokens:
```css
--space-4: 1rem;
--space-8: 2rem;
/* ... */
```

## 📱 Compatibilidade

- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## 📄 Licença

© 2026 Vortex Imóveis. Todos os direitos reservados.

Este é um projeto demonstrativo para fins educacionais.

## 🤝 Contato

- **E-mail:** contato@vortex.com.br
- **Telefone:** (11) 3123-4567
- **Endereço:** Av. Brigadeiro Faria Lima, 3477 - São Paulo, SP

---

Desenvolvido com atenção aos detalhes e foco em design premium.
