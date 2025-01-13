export interface Committee {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  mission: string;
  keyObjectives: string[];
  meetingFrequency: string;
  icon?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const committees: Committee[] = [
  {
    id: '1',
    name: 'Agriculture Committee',
    shortDescription: 'Championing the agricultural sector in Chatham-Kent',
    fullDescription: 'The Agriculture Committee plays a crucial role in representing and supporting the agricultural industry, which is the backbone of our local economy. By bringing together agricultural stakeholders, the committee works to address challenges, promote innovation, and enhance the visibility of agriculture in our community.',
    mission: 'To advocate for, support, and promote the agricultural sector in Chatham-Kent, ensuring its continued growth, sustainability, and economic significance.',
    keyObjectives: [
      'Represent agricultural interests at local and regional levels',
      'Facilitate networking and knowledge sharing among agricultural businesses',
      'Develop strategies to support agricultural innovation and sustainability',
      'Raise public awareness about the importance of agriculture'
    ],
    meetingFrequency: 'Second Tuesday of each month',
    icon: 'Tractor',
    ctaText: 'Get Involved in Agriculture',
    ctaLink: '/committees/agriculture'
  },
  {
    id: '2',
    name: 'Advocacy & Government Relations Committee',
    shortDescription: 'Bridging business and policy to drive positive change',
    fullDescription: 'The Advocacy & Government Relations Committee serves as a critical link between the business community and government, ensuring that the voices of local businesses are heard and considered in policy-making processes.',
    mission: 'To monitor legislative proposals, provide input on business-related issues, and advocate for policies that support economic growth and business development.',
    keyObjectives: [
      'Track and analyze local, provincial, and federal legislative proposals',
      'Provide constructive feedback to lawmakers',
      'Represent the collective interests of Chatham-Kent businesses',
      'Develop strategic advocacy initiatives'
    ],
    meetingFrequency: 'Monthly',
    icon: 'Gavel',
    ctaText: 'Engage in Policy Advocacy',
    ctaLink: '/committees/advocacy'
  },
  {
    id: '3',
    name: 'Policy & Governance Committee',
    shortDescription: 'Ensuring organizational excellence and strategic alignment',
    fullDescription: 'The Policy & Governance Committee is responsible for maintaining the strategic direction, integrity, and operational effectiveness of the Chatham-Kent Chamber of Commerce.',
    mission: 'To develop, review, and update governance documents, policies, and procedures that align with the chamber\'s vision, mission, and strategic goals.',
    keyObjectives: [
      'Review and update organizational bylaws and policies',
      'Ensure compliance with best practices in non-profit governance',
      'Support strategic planning and organizational development',
      'Maintain transparency and accountability'
    ],
    meetingFrequency: 'Quarterly',
    icon: 'BookOpen',
    ctaText: 'Learn About Governance',
    ctaLink: '/committees/policy'
  }
];
