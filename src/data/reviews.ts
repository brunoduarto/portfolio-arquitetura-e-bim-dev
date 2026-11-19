// Google reviews shown in the "Sobre" section of the home page.
//
// HOW TO USE
// 1. Copy real reviews from the studio's Google Business Profile into `reviews`
//    (name, rating, date and text exactly as they appear on Google).
// 2. Set `reviewsAreReal` to true.
// 3. Optionally fill in `profileUrl` (the "Ver no Google" link) and `rating`/`total`
//    with the numbers Google shows.
//
// While `reviewsAreReal` is false, the section only renders on `npm run dev`, with a
// "sample" label, so placeholder text never reaches the live site.

export const reviewsAreReal = false;

export const googleSummary = {
  rating: 5.0,
  total: 0,
  profileUrl: '', // e.g. https://g.page/r/xxxxxxxx/review
};

export type Review = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // as Google shows it, e.g. "há 2 meses"
  text: string;
};

export const reviews: Review[] = [
  {
    name: 'Nome do cliente',
    rating: 5,
    date: 'há 1 mês',
    text: 'Exemplo de avaliação. Substitua pelo texto real copiado do Google.',
  },
  {
    name: 'Nome do cliente',
    rating: 5,
    date: 'há 3 meses',
    text: 'Exemplo de avaliação. Substitua pelo texto real copiado do Google.',
  },
  {
    name: 'Nome do cliente',
    rating: 5,
    date: 'há 6 meses',
    text: 'Exemplo de avaliação. Substitua pelo texto real copiado do Google.',
  },
];
