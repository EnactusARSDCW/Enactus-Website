// Site-wide configuration: exactly what is publicly verifiable, nothing more.
export const site = {
  name: 'Enactus ARSD',
  fullName: 'Enactus ARSD, Atma Ram Sanatan Dharma College',
  institution: 'Atma Ram Sanatan Dharma College, University of Delhi',
  tagline: 'Entrepreneurial action for people and planet',
  description:
    'Enactus ARSD is the student-led Enactus chapter of Atma Ram Sanatan Dharma College, University of Delhi. We use entrepreneurial action to create livelihoods, dignity and well-being in the communities around our campus.',
  email: 'enactusarsdchapter@gmail.com',
  address: 'Atma Ram Sanatan Dharma College, University of Delhi',
  social: [
    { label: 'Instagram', url: 'https://www.instagram.com/enac.arsd/' },
    { label: 'LinkedIn', url: 'https://in.linkedin.com/company/arsdcenactus' },
    { label: 'Linktree', url: 'https://linktr.ee/enactusarsd1' },
  ],
} as const;

export const nav = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/about' },
  { label: 'Projects', url: '/projects' },
  { label: 'Shop', url: '/shop' },
  { label: 'Stories', url: '/stories' },
  { label: 'Our Team', url: '/team' },
  { label: 'Gallery', url: '/gallery' },
] as const;
