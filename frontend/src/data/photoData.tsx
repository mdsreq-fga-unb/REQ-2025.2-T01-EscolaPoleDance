import joemalAbdon from '@/assets/img/about/joemalAbdon.jpg';

export type PhotoItem = {
  id: string;
  img: string | any;
  alt?: string;
  caption?: string;
};

export const photoData: PhotoItem[] = [
  {
    id: 'p1',
    img: "https://placehold.co/400x300/400a48/d883ef",
    alt: 'Joelma Abdon executando movimento de pole dance',
    caption: 'Joelma Abdon',
  },
  {
    id: 'p2',
    img: "https://placehold.co/400x400/400a48/d883ef",
    alt: 'Aula de pole dance em estúdio',
    caption: 'Aula em estúdio',
  },
  {
    id: 'p3',
    img: "https://placehold.co/500x400/400a48/d883ef",
    alt: 'Aluna praticando no pole',
    caption: 'Prática em grupo',
  },
  {
    id: 'p4',
    img: "https://placehold.co/400x400/400a48/d883ef",
    alt: 'Instrutora demonstrando movimento',
    caption: 'Demonstração',
  },
  {
    id: 'p5',
    img: "https://placehold.co/400x400/400a48/d883ef",
    alt: 'Classe em sessão',
    caption: 'Sessão em grupo',
  },
  {
    id: 'p6',
    img: "https://placehold.co/400x400/400a48/d883ef",
    alt: 'Detalhe do estúdio',
    caption: 'Detalhes do estúdio',
  },
];
