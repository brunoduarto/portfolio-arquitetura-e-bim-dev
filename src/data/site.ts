// Contact details and links shared by the header, footer, contact page and
// WhatsApp button. Change them here and every page follows.

export const site = {
  name: 'Bruno Duarte',
  role: 'Arquiteto e Urbanista',
  city: 'Belo Horizonte, MG',
  email: 'contato@bruno.arq.br',
  whatsapp: '5531987760114',
  whatsappMessage: 'Oi, Bruno! Vi seu site e quero conversar sobre um projeto.',
  instagram: 'https://www.instagram.com/bruno.arq.br/',
  linkedin: 'https://www.linkedin.com/in/bruno-duarte-deoliveira/',
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const navLinks = [
  { href: '/projects', label: 'Projetos' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/about', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contato' },
];
