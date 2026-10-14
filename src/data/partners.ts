// Only partner bodies factually linked to the chapter appear here. Logos will
// be added as image files when the chapter supplies approved artwork.

export const partners = [
  {
    name: 'ARSD College, University of Delhi',
    detail: 'Home institution — Enactus ARSD is an official student society of the college.',
    logo: null,
    url: 'https://www.arsdcollege.ac.in',
  },
] as const satisfies readonly { name: string; detail: string; logo: string | null; url: string | null }[];

// Placeholder slots for partnerships to be confirmed with the chapter.
export const partnerSlots = [
  'KPMG India — grant supporter (2020, chapter-reported)',
  'Earth Saviours Foundation — donation partner (chapter-reported)',
  'Enactus Network India',
];
