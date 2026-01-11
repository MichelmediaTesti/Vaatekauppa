import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

export interface Product {
  id: string;
  image: string;
  brand: string;
  name: string;
  description: string;
  price: string;
  salePrice?: string;
  category: 'pumps' | 'sneakers' | 'boots' | 'sandals' | 'bags';
}

export const products: Product[] = [
  {
    id: '1',
    image: product1,
    brand: 'Ara',
    name: 'Klassinen avokaskenkä',
    description: 'Elegantti ja ajaton avokaskenkä, joka sopii arkeen ja juhlaan. Pehmeä nahkavuori ja mukava korko tekevät tästä täydellisen valinnan jokaiseen tilanteeseen.',
    price: '119,90 €',
    category: 'pumps',
  },
  {
    id: '2',
    image: product2,
    brand: 'Tamaris',
    name: 'Nahkanilkkuri',
    description: 'Laadukas nahkanilkkuri, jossa yhdistyvät tyyli ja mukavuus. Vetoketju sisäsivussa helpottaa pukemista. Täydellinen valinta syksyyn ja talveen.',
    price: '149,95 €',
    salePrice: '119,00 €',
    category: 'boots',
  },
  {
    id: '3',
    image: product3,
    brand: 'Hedgren',
    name: 'Premium nahkalaukku',
    description: 'Tyylikäs ja käytännöllinen nahkalaukku arkeen. Useita taskuja tavaroiden järjestämiseen. Säädettävä olkahihna ja laadukkaat metallisoljet.',
    price: '89,90 €',
    category: 'bags',
  },
  {
    id: '4',
    image: product4,
    brand: 'Caprice',
    name: 'Punainen ballerina',
    description: 'Ihastuttava punainen ballerinakenkä, joka tuo väriä asuusi. Pehmustettu pohjallinen takaa mukavuuden koko päiväksi.',
    price: '79,95 €',
    category: 'pumps',
  },
  // Additional products for category pages
  {
    id: '5',
    image: product1,
    brand: 'Rieker',
    name: 'Mukava kävelykenkä',
    description: 'Ergonominen kävelykenkä, joka tukee jalkaa ja tarjoaa erinomaisen iskunvaimennuksen. Ideaalinen pitkille kävelyille.',
    price: '99,95 €',
    category: 'sneakers',
  },
  {
    id: '6',
    image: product2,
    brand: 'Gabor',
    name: 'Nahkasandaali',
    description: 'Tyylikäs nahkasandaali kesäpäiviin. Säädettävät hihnat ja pehmustettu pohjallinen takaavat täydellisen istuvuuden.',
    price: '89,00 €',
    category: 'sandals',
  },
  {
    id: '7',
    image: product3,
    brand: 'Ilse Jacobsen',
    name: 'Kumisaappaat',
    description: 'Tyylikkäät kumisaappaat sateisiin päiviin. Vedenpitävät ja mukavat, lämmin vuori.',
    price: '129,00 €',
    category: 'boots',
  },
  {
    id: '8',
    image: product4,
    brand: 'Think!',
    name: 'Nahkatennarit',
    description: 'Laadukkaat nahkatennarit päivittäiseen käyttöön. Irrotettava pohjallinen ja hengittävä rakenne.',
    price: '159,00 €',
    category: 'sneakers',
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
