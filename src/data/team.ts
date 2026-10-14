import type { Partition } from '../types';

// No team roster has been publicly published with names we could verify, so
// every member entry stays empty rather than inventing people. When the
// chapter supplies a roster, append entries here:
//   members: { name, role, image: '/images/team/<file>.jpg' | null }
export const partitions: Partition[] = [
  {
    slug: 'leadership',
    name: 'Leadership',
    description:
      'The core team leads strategy, projects, partnerships and events. The 2024–25 core team was announced on the chapter’s channels in October 2024.',
    members: [],
  },
  {
    slug: 'project-teams',
    name: 'Project teams',
    description:
      'Every project runs on a dedicated team — outreach, supply coordination, storytelling and operations for Kalakaari, Srijan, Samvedna and Niramaya.',
    members: [],
  },
  {
    slug: 'operations',
    name: 'Operations, design & reach',
    description:
      'Design, social media, documentation and events keep the chapter running day to day, from workshops to ENAC-TALK sessions.',
    members: [],
  },
];

// Associated bodies we can factually name as relationships of the chapter.
export const affiliations = [
  {
    name: 'Enactus Network',
    relationship: 'Part of the global Enactus network of student teams using entrepreneurial action.',
    verified: true,
  },
  {
    name: 'ARSD College',
    relationship: 'Enactus ARSD is a student society of Atma Ram Sanatan Dharma College, University of Delhi.',
    verified: true,
  },
];
