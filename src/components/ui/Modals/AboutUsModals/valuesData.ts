
import { Shield, Handshake, Globe, Target, } from 'lucide-react';

export interface Value {
  name: string;
  icon: typeof Shield;
  shortDescription: string;
  detailedDescription: {
    memberImportance: string;
    communityImpact: string;
    keyBenefits: string[];
  };
}

export const valuesData: Value[] = [
  {
    name: 'Integrity',
    icon: Shield,
    shortDescription: 'We build trust through integrity in everything we do.',
    detailedDescription: {
      memberImportance: 'Earn the trust and loyalty of our members, community and colleagues by doing what we say we will do.',
      communityImpact: 'Demonstrate ethical behavior that sets a standard for transparency and accountability.',
      keyBenefits: [
        'Build long-term relationships based on trust',
        'Enhance organizational reputation',
        'Foster a culture of honesty and respect'
      ]
    }
  },
  {
    name: 'Collaboration',
    icon: Handshake,
    shortDescription: 'We achieve more together through strong partnerships.',
    detailedDescription: {
      memberImportance: 'Leverage collective strengths and diverse perspectives to drive innovation and growth.',
      communityImpact: 'Create synergistic networks that amplify our communitys potential.',
      keyBenefits: [
        'Expand professional networks',
        'Share knowledge and resources',
        'Solve complex challenges through teamwork'
      ]
    }
  },
  {
    name: 'Global Perspective',
    icon: Globe,
    shortDescription: 'We think globally while acting locally.',
    detailedDescription: {
      memberImportance: 'Understand global trends and their local implications to stay competitive and relevant.',
      communityImpact: 'Bridge local businesses with international opportunities and insights.',
      keyBenefits: [
        'Access to global market insights',
        'Cross-cultural understanding',
        'Expanded business horizons'
      ]
    }
  },
  {
    name: 'Purpose-Driven',
    icon: Target,
    shortDescription: 'We are committed to meaningful impact beyond profit.',
    detailedDescription: {
      memberImportance: 'Align business goals with broader societal and environmental objectives.',
      communityImpact: 'Drive sustainable development and positive change through strategic initiatives.',
      keyBenefits: [
        'Enhanced organizational purpose',
        'Attract purpose-aligned talent and members',
        'Create lasting, meaningful impact'
      ]
    }
  }
];
