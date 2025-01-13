export interface BoardDirector {
  id: string;
  name: string;
  role: string;
  organization: string;
  personalMessage: string;
  chamberImportance: string;
  imageUrl?: string;
  email?: string;
  phoneNumber?: string;
  headshot?: string;
  whatIsGreatAboutCK?: string;
  keyMessage?: string;
  roleDetails?: string[];
}

export const boardDirectors: BoardDirector[] = [
  {
    id: '1',
    name: 'Todd Bennett',
    role: 'Board Member',
    organization: 'Chatham Honda',
    personalMessage: 'Committed to driving business growth and community development in Chatham-Kent.',
    chamberImportance: 'Supporting local businesses and fostering economic opportunities.',
    imageUrl: '/path/to/todd-bennett.jpg',
    headshot: '/path/to/todd-bennett.jpg',
    whatIsGreatAboutCK: 'The strong sense of community and entrepreneurial spirit',
    keyMessage: 'Together, we can drive Chatham-Kent forward',
    roleDetails: ['Business Development', 'Community Engagement']
  },
  {
    id: '2',
    name: 'Jonathan Quaglia',
    role: 'Board Member',
    organization: 'J. Quaglia Law Office',
    personalMessage: 'Dedicated to providing legal expertise and supporting local business initiatives.',
    chamberImportance: 'Offering legal insights and strategic guidance to the chamber.',
    imageUrl: '/path/to/jonathan-quaglia.jpg',
    headshot: '/path/to/jonathan-quaglia.jpg',
    whatIsGreatAboutCK: 'The collaborative legal and business ecosystem',
    keyMessage: 'Legal expertise driving community success',
    roleDetails: ['Legal Advisory', 'Strategic Planning']
  },
  {
    id: '3',
    name: 'Adrian Van Dyk',
    role: 'Board Member',
    organization: 'AGRIS Co-operative Ltd.',
    personalMessage: 'Passionate about agricultural innovation and community economic development.',
    chamberImportance: 'Representing agricultural sector interests and promoting local agribusiness.',
    imageUrl: '/path/to/adrian-van-dyk.jpg',
    headshot: '/path/to/adrian-van-dyk.jpg',
    whatIsGreatAboutCK: 'The rich agricultural heritage and innovative spirit',
    keyMessage: 'Growing a stronger Chatham-Kent through agriculture',
    roleDetails: ['Agricultural Development', 'Community Partnerships']
  },
  {
    id: '4',
    name: 'Michael Verhoeven',
    role: 'Board Member',
    organization: 'RBC Dominion Securities Inc.',
    personalMessage: 'Committed to financial excellence and supporting local business growth.',
    chamberImportance: 'Providing financial expertise and strategic financial insights.',
    imageUrl: '/path/to/michael-verhoeven.jpg',
    headshot: '/path/to/michael-verhoeven.jpg',
    whatIsGreatAboutCK: 'The strong financial sector and business opportunities',
    keyMessage: 'Financial expertise driving business success',
    roleDetails: ['Financial Advisory', 'Investment Strategies']
  },
  {
    id: '5',
    name: 'Scott Currie',
    role: 'Board Member',
    organization: 'Chatham-Kent Barnstormers',
    personalMessage: 'Dedicated to promoting local sports and community engagement.',
    chamberImportance: 'Bringing community spirit and recreational insights to chamber initiatives.',
    imageUrl: '/path/to/scott-currie.jpg',
    headshot: '/path/to/scott-currie.jpg',
    whatIsGreatAboutCK: 'The vibrant sports culture and community spirit',
    keyMessage: 'Sports and recreation driving community engagement',
    roleDetails: ['Sports Development', 'Community Events']
  },
  {
    id: '6',
    name: 'Dibesh Regmi',
    role: 'Board Member',
    organization: 'Everest Convention Centre',
    personalMessage: 'Passionate about hospitality and creating spaces for community connection.',
    chamberImportance: 'Supporting local event and hospitality industries.',
    imageUrl: '/path/to/dibesh-regmi.jpg',
    headshot: '/path/to/dibesh-regmi.jpg',
    whatIsGreatAboutCK: 'The diverse cultural heritage and hospitality sector',
    keyMessage: 'Creating spaces for community connection and growth',
    roleDetails: ['Hospitality Management', 'Event Planning']
  },
  {
    id: '7',
    name: 'Sarah Apers',
    role: 'Board Member',
    organization: 'Farm Credit Canada',
    personalMessage: 'Committed to supporting agricultural businesses and rural economic development.',
    chamberImportance: 'Providing agricultural financial expertise and community support.',
    imageUrl: '/path/to/sarah-apers.jpg',
    headshot: '/path/to/sarah-apers.jpg',
    whatIsGreatAboutCK: 'The strong agricultural sector and rural community',
    keyMessage: 'Supporting agricultural growth and rural development',
    roleDetails: ['Agricultural Finance', 'Rural Development']
  },
  {
    id: '8',
    name: 'Tracey Walker',
    role: 'Past Chair',
    organization: 'CIBC',
    personalMessage: 'Bringing continuity and strategic leadership to the chamber\'s vision.',
    chamberImportance: 'Offering historical perspective and supporting leadership transition.',
    imageUrl: '/path/to/tracey-walker.jpg',
    headshot: '/path/to/tracey-walker.jpg',
    whatIsGreatAboutCK: 'The collaborative business community and chamber leadership',
    keyMessage: 'Leading the way for a stronger Chatham-Kent',
    roleDetails: ['Strategic Leadership', 'Community Development']
  }
];
