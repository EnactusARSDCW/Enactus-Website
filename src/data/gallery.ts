import type { GallerySection } from '../types';

// Gallery images await chapter photography. Each placeholder is labelled so
// management can drop real event photographs into /public/images/gallery/
// one-for-one without touching layout code.
export const gallerySections: GallerySection[] = [
  {
    title: 'Ennovate — Enactus Day',
    description: 'The chapter’s flagship yearly event: panel discussions, case-study competitions, a quiz and ad-enacting on campus.',
    images: [
      { caption: 'Ennovate main stage — photograph to be added' },
      { caption: 'Panel discussion — photograph to be added' },
      { caption: 'Case-study competition teams — photograph to be added' },
      { caption: 'Ad-enacting event — photograph to be added' },
    ],
  },
  {
    title: 'ENAC-TALK',
    description: 'Speaker sessions connecting students to founders and social-entrepreneurship journeys.',
    images: [
      { caption: 'ENAC-TALK 2023 session with Neelam Singh — photograph to be added' },
      { caption: 'Audience Q&A — photograph to be added' },
    ],
  },
  {
    title: 'Project fieldwork',
    description: 'Working days across projects — with artisans, gardeners, potters and community partners.',
    images: [
      { caption: 'Project Kalakaari — with artisans — photograph to be added' },
      { caption: 'Project Srijan — with gardeners and potters — photograph to be added' },
      { caption: 'Project Samvedna — community outreach — photograph to be added' },
      { caption: 'Project Niramaya — WeCare Kit assembly — photograph to be added' },
    ],
  },
  {
    title: 'Team life',
    description: 'Recruitment days, core-team moments and everyday campus presence.',
    images: [
      { caption: 'Recruitment drive — photograph to be added' },
      { caption: 'Core team 2024–25 — photograph to be added' },
    ],
  },
];
