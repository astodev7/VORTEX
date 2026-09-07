// Property Database
const properties = {
    1: {
        title: "Residencial Aurora",
        location: "Jardins, São Paulo",
        price: "R$ 2.850.000",
        area: "180m²",
        rooms: "3",
        baths: "3",
        garage: "2",
        code: "VTX-2024-001",
        type: "Apartamento",
        status: "Disponível",
        tax: "R$ 8.400",
        condo: "R$ 2.100/mês",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop"
        ],
        description: `
            <p>Apartamento sofisticado no coração dos Jardins, um dos bairros mais nobres de São Paulo. Este imóvel combina elegância contemporânea com acabamentos de primeira linha.</p>
            <p>O projeto arquitetônico privilegia a amplitude dos espaços e a entrada de luz natural. Todos os ambientes são integrados de forma harmoniosa, criando uma atmosfera de conforto e refinamento.</p>
            <p>Localização privilegiada com fácil acesso a restaurantes, boutiques e áreas verdes. Ideal para quem busca qualidade de vida em um dos endereços mais desejados da cidade.</p>
        `,
        features: [
            "Varanda gourmet",
            "Piso em porcelanato",
            "Ar-condicionado central",
            "Cozinha planejada",
            "Armários embutidos",
            "Aquecimento a gás",
            "Sistema de segurança",
            "Portaria 24h",
            "Academia",
            "Piscina",
            "Salão de festas",
            "Espaço gourmet"
        ],
        locationDesc: "Localizado na região dos Jardins, próximo à Avenida Paulista e Parque Ibirapuera. A região oferece excelente infraestrutura com supermercados, farmácias, escolas e opções de lazer. Acesso facilitado às principais vias da cidade."
    },
    2: {
        title: "Villa Serenity",
        location: "Alphaville, Barueri",
        price: "R$ 4.200.000",
        area: "450m²",
        rooms: "4",
        baths: "5",
        garage: "4",
        code: "VTX-2024-002",
        type: "Casa",
        status: "Disponível",
        tax: "R$ 12.600",
        condo: "R$ 1.850/mês",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop"
        ],
        description: `
            <p>Casa moderna em condomínio fechado de alto padrão em Alphaville. Projeto arquitetônico assinado com linhas contemporâneas e acabamentos exclusivos.</p>
            <p>Amplos ambientes integrados, jardim paisagístico e área de lazer completa. A residência foi projetada para proporcionar máximo conforto e privacidade.</p>
            <p>Condomínio com infraestrutura completa incluindo quadras, piscinas, spa e segurança 24 horas. Ideal para famílias que buscam qualidade de vida.</p>
        `,
        features: [
            "Piscina privativa",
            "Jardim paisagístico",
            "Churrasqueira",
            "Home office",
            "Suíte master",
            "Closet",
            "Lavabo",
            "Despensa",
            "Área de serviço",
            "Aquecimento solar",
            "Sistema de automação",
            "Segurança completa"
        ],
        locationDesc: "Alphaville é reconhecida como uma das melhores regiões para se viver na Grande São Paulo. O condomínio oferece segurança, tranquilidade e proximidade com shoppings, escolas internacionais e centros empresariais."
    },
    3: {
        title: "Cobertura Horizon",
        location: "Itaim Bibi, São Paulo",
        price: "R$ 5.600.000",
        area: "320m²",
        rooms: "5",
        baths: "4",
        garage: "3",
        code: "VTX-2024-003",
        type: "Cobertura",
        status: "Destaque",
        tax: "R$ 18.200",
        condo: "R$ 3.400/mês",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop"
        ],
        description: `
            <p>Cobertura duplex excepcional no Itaim Bibi, com vista panorâmica da cidade. Este imóvel representa o mais alto padrão de luxo e sofisticação.</p>
            <p>Terraço amplo com piscina privativa, spa e espaço gourmet completo. Interiores projetados por renomado escritório de arquitetura com materiais importados.</p>
            <p>Prédio boutique com apenas 4 unidades por andar, garantindo exclusividade e privacidade. Localização estratégica próxima aos principais centros financeiros.</p>
        `,
        features: [
            "Piscina no terraço",
            "Spa privativo",
            "Adega climatizada",
            "Cinema particular",
            "Sauna",
            "Hidromassagem",
            "Vista panorâmica",
            "Acabamento premium",
            "Automação completa",
            "Elevador privativo",
            "Heliponto no prédio",
            "Concierge 24h"
        ],
        locationDesc: "Itaim Bibi é um dos bairros mais valorizados de São Paulo, concentrando escritórios corporativos, restaurantes renomados e sofisticadas opções de entretenimento. Excelente localização com acesso rápido às principais vias."
    },
    4: {
        title: "Casa Magnólia",
        location: "Morumbi, São Paulo",
        price: "R$ 3.950.000",
        area: "380m²",
        rooms: "4",
        baths: "4",
        garage: "3",
        code: "VTX-2024-004",
        type: "Casa",
        status: "Disponível",
        tax: "R$ 11.400",
        condo: "R$ 1.600/mês",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1564013434775-f71db0030976?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop"
        ],
        description: `
            <p>Residência contemporânea em condomínio fechado no Morumbi. Arquitetura moderna com amplos espaços e acabamentos refinados.</p>
            <p>A casa foi projetada para integrar os ambientes internos com a área externa, criando uma sensação de amplitude e conexão com a natureza.</p>
            <p>Localização privilegiada em uma das regiões mais nobres de São Paulo, próxima a escolas de excelência, clubes e áreas verdes.</p>
        `,
        features: [
            "Área de lazer completa",
            "Piscina aquecida",
            "Espaço gourmet",
            "Jardim amplo",
            "Home theater",
            "Escritório",
            "Suítes com closet",
            "Cozinha gourmet",
            "Lavabo social",
            "Dependências completas",
            "Aquecimento central",
            "Portaria remota"
        ],
        locationDesc: "Morumbi é conhecido por seus condomínios de alto padrão e qualidade de vida. A região oferece segurança, tranquilidade e proximidade com as melhores escolas, hospitais e opções de lazer da cidade."
    },
    5: {
        title: "Loft Urban",
        location: "Vila Madalena, São Paulo",
        price: "R$ 1.680.000",
        area: "120m²",
        rooms: "2",
        baths: "2",
        garage: "1",
        code: "VTX-2024-005",
        type: "Loft",
        status: "Disponível",
        tax: "R$ 4.800",
        condo: "R$ 950/mês",
        images: [
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600566753051-e64cd7d4d8b3?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop"
        ],
        description: `
            <p>Loft contemporâneo no coração da Vila Madalena, bairro boêmio e cultural de São Paulo. Projeto minimalista com aproveitamento inteligente dos espaços.</p>
            <p>Pé-direito alto, grandes janelas e decoração moderna criam um ambiente sofisticado e acolhedor. Ideal para profissionais jovens e casais.</p>
            <p>Localização excepcional com fácil acesso a bares, restaurantes, galerias de arte e metrô. Estilo de vida urbano e vibrante.</p>
        `,
        features: [
            "Pé-direito alto",
            "Conceito aberto",
            "Varanda integrada",
            "Iluminação LED",
            "Cozinha americana",
            "Acabamento moderno",
            "Bicicletário",
            "Pet place",
            "Coworking",
            "Roof top",
            "Churrasqueira coletiva",
            "Portaria eletrônica"
        ],
        locationDesc: "Vila Madalena é o bairro mais charmoso e cultural de São Paulo. Com vida noturna vibrante, arte de rua, cafés e restaurantes, é perfeito para quem busca estilo de vida urbano e cosmopolita."
    },
    6: {
        title: "Residência Ébano",
        location: "Granja Viana, Cotia",
        price: "R$ 6.400.000",
        area: "520m²",
        rooms: "5",
        baths: "6",
        garage: "4",
        code: "VTX-2024-006",
        type: "Casa",
        status: "Disponível",
        tax: "R$ 15.800",
        condo: "R$ 2.200/mês",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&h=800&fit=crop"
        ],
        description: `
            <p>Residência de luxo em condomínio fechado na Granja Viana, região reconhecida pela qualidade de vida e natureza preservada.</p>
            <p>Projeto arquitetônico sofisticado que integra design contemporâneo com sustentabilidade. Materiais nobres e tecnologia de ponta em todos os ambientes.</p>
            <p>Ampla área de lazer com piscina, quadra esportiva e bosque privativo. Ideal para famílias que valorizam espaço, conforto e contato com a natureza.</p>
        `,
        features: [
            "Piscina olímpica",
            "Quadra poliesportiva",
            "Bosque privativo",
            "Casa de hóspedes",
            "Adega subterrânea",
            "Academia privativa",
            "Spa completo",
            "Automação residencial",
            "Energia solar",
            "Sistema de captação de água",
            "Segurança integrada",
            "Heliponto"
        ],
        locationDesc: "Granja Viana é sinônimo de qualidade de vida na Grande São Paulo. Condomínios exclusivos cercados por natureza preservada, com infraestrutura completa de escolas, hospitais e shopping centers."
    }
};
