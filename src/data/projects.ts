import type { Project } from '../types';

// Facts below are drawn from the chapter's own public posts/pages:
//  - Wix chapter site (enactusarsdchapter.wixsite.com/enactus-arsd)
//  - Instagram profile @enac.arsd (lists Kalakaari, Niramaya, Samvedna, Srijan)
//  - LinkedIn profile "arsdcenactus"
// Claims are labelled as chapter-reported outcomes, not audited figures.
export const projects: Project[] = [
  {
    slug: 'kalakaari',
    name: 'Project Kalakaari',
    tagline: 'Livelihoods for artisan communities, everyday alternatives to plastic.',
    image: null,
    imageAlt: 'Project Kalakaari — artisan-made canvas bags. Project photograph to be added.',
    summary:
      'Kalakaari works with artisan communities to create and sell handmade canvas bags — a durable, eco-friendly alternative to plastic — while generating employment for underprivileged women.',
    category: 'Livelihoods',
    featured: true,
    problem: [
      'Single-use plastic bags remain a default choice for everyday shopping, adding to urban waste in Delhi.',
      'Artisan skills and the women who hold them often lack access to fair, steady income and organised markets.',
    ],
    approach: [
      'Partner with artisan communities to design and produce canvas bags as a practical alternative to plastic.',
      'Create a route to market through the chapter, with proceeds supporting the women who make the products.',
    ],
    activities: [
      {
        title: 'Artisan-made canvas bags',
        body: 'The project team works with artisans to produce canvas bags sold as a sustainable alternative to plastic bags.',
      },
      {
        title: 'Sustainable employment',
        body: 'The project is designed to generate steady employment for underprivileged women through the making and sale of products.',
      },
    ],
    outcomes: [
      {
        label: '20+ women empowered',
        detail:
          'The chapter reported in 2020 that Kalakaari had generated sustainable employment for over 20 underprivileged women.',
        source: 'https://enactusarsdchapter.wixsite.com/enactus-arsd/post/kpmg-grant',
      },
      {
        label: 'KPMG Business Ethics Grant',
        detail:
          'In 2020 the chapter received a ₹50,000 grant under the KPMG Business Ethics Grant supporting Kalakaari and Srijan.',
        source: 'https://enactusarsdchapter.wixsite.com/enactus-arsd/post/kpmg-grant',
      },
    ],
    externalLinks: [],
    relatedStories: ['kpmg-grant-2020', 'nationals-2022'],
    relatedProjects: ['srijan', 'samvedna'],
  },
  {
    slug: 'srijan',
    name: 'Project Srijan',
    tagline: 'Empowering gardeners and potters.',
    image: null,
    imageAlt: 'Project Srijan — potted plants prepared with local gardeners. Project photograph to be added.',
    summary:
      'Srijan supports local gardeners and potters by helping them reach buyers for their plants and handcrafted pots — from potted-plant combinations sold on campus to curated hampers.',
    category: 'Livelihoods',
    featured: true,
    problem: [
      'Nursery workers and potters sell through informal, unpredictable channels with little price visibility.',
      'Their craft rarely reaches younger, eco-conscious buyers directly.',
    ],
    approach: [
      'Work alongside gardeners and potters to identify products buyers actually want.',
      'Connect the makers to buyers through chapter-run sales and events.',
    ],
    activities: [
      {
        title: 'Potted-plant combinations',
        body: 'The team helps gardeners prepare and sell potted-plant combinations, including curated selections such as jade plants.',
      },
      {
        title: 'Supporting pottery craft',
        body: 'The project promotes the work of potters alongside gardeners, valuing both crafts as livelihoods worth sustaining.',
      },
    ],
    outcomes: [
      {
        label: 'Recognised platform for makers',
        detail:
          'Srijan products such as potted jade plants have been sold through the chapter’s own storefront, giving gardeners direct access to buyers.',
        source: 'https://enactusarsdchapter.wixsite.com/enactus-arsd/product-page/jade-plant',
      },
      {
        label: 'Dedicated project identity',
        detail: 'Srijan runs its own public presence, @project.srijan on Instagram.',
        source: 'https://www.instagram.com/project.srijan/',
      },
    ],
    externalLinks: [{ label: 'Project Srijan on Instagram', url: 'https://www.instagram.com/project.srijan/' }],
    relatedStories: ['kpmg-grant-2020', 'nationals-2022'],
    relatedProjects: ['kalakaari', 'niramaya'],
  },
  {
    slug: 'samvedna',
    name: 'Project Samvedna',
    tagline: 'Support, dignity and awareness around mental health.',
    image: null,
    imageAlt: 'Project Samvedna — community outreach session. Project photograph to be added.',
    summary:
      'Samvedna works with people facing mental and emotional challenges, providing emotional support and raising awareness of mental health — while extending reuse-based support to community foundations.',
    category: 'Community care',
    featured: false,
    problem: [
      'Mental and emotional challenges are still surrounded by stigma, making it hard for people to seek or receive support.',
      'Unwanted household goods often go to waste rather than serving communities that need them.',
    ],
    approach: [
      'Extend emotional support to mentally and emotionally challenged people through sustained engagement.',
      'Direct reusable donated items to communities that can put them to work.',
    ],
    activities: [
      {
        title: 'Emotional support programmes',
        body: 'The project ran sessions providing emotional support to mentally and emotionally challenged people.',
      },
      {
        title: 'Reuse donations',
        body: 'Items were collected for reuse and donated to the Earth Saviours Foundation community.',
      },
      {
        title: 'Mental-health awareness',
        body: 'The project works to raise mental-health awareness among students and the wider community.',
      },
    ],
    outcomes: [
      {
        label: 'Enactus Nationals 2022',
        detail:
          'The chapter competed at Enactus Nationals 2022 with Samvedna and Srijan, taking part across 24 June–2 July 2022, and won the “Most Voted Entry” category.',
        source: 'https://enactusarsdchapter.wixsite.com/enactus-arsd/post/enactus-nationals-2022',
      },
    ],
    externalLinks: [],
    relatedStories: ['nationals-2022'],
    relatedProjects: ['niramaya', 'kalakaari'],
  },
  {
    slug: 'niramaya',
    name: 'Project Niramaya',
    tagline: 'Health and well-being, born during a pandemic.',
    image: null,
    imageAlt: 'Project Niramaya — WeCare Kit drive. Project photograph to be added.',
    summary:
      'Niramaya began during the COVID-19 pandemic, combining practical hygiene support with education and awareness on mental, physical and emotional well-being.',
    category: 'Health awareness',
    featured: false,
    problem: [
      'The pandemic sharply intensified the need for hygiene awareness and structured well-being support.',
      'Everyday knowledge of mental, physical and emotional health remained limited, especially in student communities.',
    ],
    approach: [
      'Provide practical hygiene support in parallel with well-being education.',
      'Build awareness of mental, physical and emotional health through content and outreach.',
    ],
    activities: [
      {
        title: 'WeCare Kits',
        body: 'The project prepared and distributed WeCare Kits covering everyday hygiene needs.',
      },
      {
        title: 'Awareness and education',
        body: 'Educational content was produced to raise awareness of mental, physical and emotional well-being.',
      },
    ],
    outcomes: [],
    externalLinks: [],
    relatedStories: ['enac-talk-2023'],
    relatedProjects: ['samvedna', 'srijan'],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
