import { ProductItem, StockMovement, FaqItem } from '../types';

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: '1',
    name: 'Detergente 500ml',
    quantity: 42,
    category: 'Limpeza Geral',
    minStock: 15,
    status: 'in_stock',
    lastMovement: 'Hoje, 14:20'
  },
  {
    id: '2',
    name: 'Sabão em pó 1kg',
    quantity: 18,
    category: 'Lavanderia',
    minStock: 10,
    status: 'in_stock',
    lastMovement: 'Hoje, 11:05'
  },
  {
    id: '3',
    name: 'Desinfetante 2L',
    quantity: 5,
    category: 'Limpeza Geral',
    minStock: 8,
    status: 'low_stock',
    lastMovement: 'Ontem, 16:45'
  },
  {
    id: '4',
    name: 'Esponja multiuso',
    quantity: 64,
    category: 'Utensílios',
    minStock: 20,
    status: 'in_stock',
    lastMovement: 'Hoje, 09:12'
  },
  {
    id: '5',
    name: 'Água sanitária 1L',
    quantity: 2,
    category: 'Desinfecção',
    minStock: 10,
    status: 'critical',
    lastMovement: 'Hoje, 15:30'
  }
];

export const INITIAL_MOVEMENTS: StockMovement[] = [
  {
    id: 'm1',
    productName: 'Detergente 500ml',
    type: 'out',
    quantity: 3,
    date: 'Hoje, 15:42'
  },
  {
    id: 'm2',
    productName: 'Sabão em pó 1kg',
    type: 'in',
    quantity: 10,
    date: 'Hoje, 11:05'
  },
  {
    id: 'm3',
    productName: 'Esponja multiuso',
    type: 'out',
    quantity: 6,
    date: 'Hoje, 09:12'
  },
  {
    id: 'm4',
    productName: 'Água sanitária 1L',
    type: 'out',
    quantity: 5,
    date: 'Ontem, 17:10'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'O sistema é gratuito?',
    answer: 'Sim, você pode começar a utilizar com a versão gratuita e ter acesso às ferramentas essenciais para organizar seu estoque.'
  },
  {
    question: 'Posso usar pelo celular?',
    answer: 'Sim. Você pode acessar pelo aplicativo mobile para fazer consultas e registrar movimentações de onde estiver.'
  },
  {
    question: 'Posso acessar pelo computador?',
    answer: 'Sim. O produto conta com uma versão web que pode ser acessada diretamente pelo seu navegador no computador.'
  },
  {
    question: 'Preciso instalar alguma coisa no computador?',
    answer: 'Não. A versão web funciona diretamente pelo navegador de internet (como Chrome, Edge, Firefox ou Safari), sem necessidade de instalação.'
  },
  {
    question: 'Posso cadastrar vários produtos?',
    answer: 'Sim, você pode cadastrar os produtos do seu negócio, informando nome e quantidade para manter tudo organizado.'
  },
  {
    question: 'Posso registrar entradas e saídas?',
    answer: 'Sim. Você registra cada entrada de reposição ou saída de venda de forma rápida em poucos cliques.'
  },
  {
    question: 'Consigo consultar o histórico?',
    answer: 'Sim. Você tem acesso ao histórico de movimentações para saber exatamente o que aconteceu com o seu estoque.'
  },
  {
    question: 'Preciso entender de tecnologia?',
    answer: 'Não. A interface foi pensada para ser simples, direta e intuitiva, para que qualquer pessoa consiga usar sem complicação.'
  }
];
