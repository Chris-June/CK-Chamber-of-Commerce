import { TeamMember } from './TeamModal';

export const teamMembers: TeamMember[] = [
  {
    name: 'Rory Ring',
    role: 'CEO',
    headshot: '/assets/images/team/rory-ring.jpg', // Use a path relative to public folder
    whatIsGreatAboutCK: 'Chatham-Kent is a vibrant community with incredible potential, offering a unique blend of rural charm and economic opportunity. Our region\'s diverse industries, supportive business ecosystem, and strong sense of community make it an exceptional place to live, work, and grow.',
    keyMessage: 'At the Chatham-Kent Chamber of Commerce, we are committed to driving economic growth, supporting local businesses, and creating a thriving environment for entrepreneurs and established companies alike.',
    roleDetails: [
      'Provide strategic leadership for the Chamber',
      'Develop and implement long-term organizational goals',
      'Represent the Chamber in regional and provincial business networks',
      'Foster partnerships with local government and business leaders',
      'Drive economic development initiatives for Chatham-Kent'
    ]
  },
  {
    name: 'Sarah',
    role: 'Manager of Administration',
    headshot: '/assets/images/team/sarah.jpg', // Use a path relative to public folder
    whatIsGreatAboutCK: 'Chatham-Kent offers a perfect balance of community spirit, economic opportunities, and quality of life. Our region supports innovation, collaboration, and provides a welcoming environment for businesses of all sizes.',
    keyMessage: 'Our administrative team is dedicated to ensuring smooth operations, excellent member service, and providing the support necessary for businesses to thrive in Chatham-Kent.',
    roleDetails: [
      'Manage day-to-day administrative operations',
      'Coordinate membership services and communications',
      'Support event planning and execution',
      'Maintain organizational records and systems',
      'Assist in member engagement and retention efforts'
    ]
  }
];
