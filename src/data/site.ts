// Contact details and links shared by the header, footer, contact page and
// WhatsApp button. Change them here and every page follows.

export const site = {
  studio: 'Estúdio duarq',
  name: 'Bruno Duarte',
  fullName: 'Bruno Duarte de Oliveira',
  role: 'Arquiteto e Urbanista',
  cau: 'A-3212610',
  city: 'Belo Horizonte, MG',
  github: 'https://github.com/brunoduarto',
  email: 'contato@bruno.arq.br',
  whatsapp: '5531987760114',
  whatsappMessage: 'Oi, Bruno! Vi seu site e quero conversar sobre um projeto.',
  instagram: 'https://www.instagram.com/bruno.arq.br/',
  linkedin: 'https://www.linkedin.com/in/bruno-duarte-deoliveira/',
  // Google Tag Manager container (GA4 is configured inside GTM)
  gtmId: 'GTM-KDHK6DJM',
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const navLinks = [
  { href: '/projects', label: 'Projetos' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/about', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contato' },
];
