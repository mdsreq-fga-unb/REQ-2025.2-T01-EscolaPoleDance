export type PhotoItem = {
  id: string;
  img: string | any;
  alt?: string;
  caption?: string;
};

// Importando as imagens
import photo1 from '@/assets/img/photo/1.svg';
import photo2 from '@/assets/img/photo/2.svg';
import photo3 from '@/assets/img/photo/3.svg';
import photo4 from '@/assets/img/photo/4.svg';
import photo5 from '@/assets/img/photo/5.svg';
import photo6 from '@/assets/img/photo/6.svg';
import photo7 from '@/assets/img/photo/7.svg';
import photo8 from '@/assets/img/photo/8.svg';
import photo9 from '@/assets/img/photo/9.svg';
import photo10 from '@/assets/img/photo/10.svg';
import photo11 from '@/assets/img/photo/11.svg';
import photo12 from '@/assets/img/photo/12.svg';

export const photoDataTop: PhotoItem[] = [
  {
    id: 'p1',
    img: photo1,
    alt: 'Joelma Abdon e aluna segurando copo de evento',
    caption: 'Joelma Abdon e alunas',
  },
  {
    id: 'p2',
    img: photo2,
    alt: 'Confraternização de 6 anos de escola',
    caption: 'Confraternização',
  },
  {
    id: 'p3',
    img: photo3,
    alt: 'Aluna praticando no pole',
    caption: 'Prática em grupo',
  },
  {
    id: 'p4',
    img: photo4,
    alt: 'Confraternização de 2 anos de escola',
    caption: 'Confraternização',
  },
  {
    id: 'p5',
    img: photo5,
    alt: 'Aluna praticando no pole',
    caption: 'Prática em individual',
  },
  {
    id: 'p6',
    img: photo6,
    alt: 'Aluna praticando no pole',
    caption: 'Prática em grupo',
  },
];

export const photoDataBottom: PhotoItem[] = [
  {
    id: 'p7',
    img: photo7,
    alt: 'Confraternização',
    caption: 'Confraternização',
  },
  {
    id: 'p8',
    img: photo8,
    alt: 'Aluna praticando no pole',
    caption: 'Prática em individual',
  },
  {
    id: 'p9',
    img: photo9,
    alt: 'Confraternização de 1 anos de escola',
    caption: 'Confraternização',
  },
  {
    id: 'p10',
    img: photo10,
    alt: 'Aluna praticando no pole',
    caption: 'Prática em grupo',
  },
  {
    id: 'p11',
    img: photo11,
    alt: 'Aluna praticando no pole',
    caption: 'Prática em grupo',
  },
  {
    id: 'p12',
    img: photo12,
    alt: 'Classe em sessão',
    caption: 'Sessão em grupo',
  },
];