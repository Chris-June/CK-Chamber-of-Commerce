export interface ExecutiveDirector {
  id: string;
  name: string;
  role: string;
  organization: string;
  personalMessage: string;
  chamberImportance: string;
  imageUrl?: string;
}

export const executiveDirectors: ExecutiveDirector[] = [
  {
    id: '1',
    name: 'Jane Smith',
    role: 'Executive Director',
    organization: '', // Add organization here
    personalMessage: 'With over 15 years of experience in community development, I am passionate about empowering local businesses.',
    chamberImportance: 'The Chamber is the backbone of our local economic ecosystem, providing critical support and networking opportunities for businesses of all sizes.',
    imageUrl: '/path/to/jane-smith.jpg'
  },
  // Add other directors here...
];
