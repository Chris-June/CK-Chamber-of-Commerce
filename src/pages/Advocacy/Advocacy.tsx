import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Briefcase, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield, 
  MessageCircle 
} from 'lucide-react';

const advocacyAreas = [
  {
    title: "Economic Development",
    description: "We champion policies that foster business growth, attract investments, and create sustainable economic opportunities in Chatham-Kent.",
    icon: <TrendingUp className="h-8 w-8 text-primary" />
  },
  {
    title: "Business Support",
    description: "Our advocacy efforts focus on reducing bureaucratic barriers, providing resources, and creating a supportive environment for local businesses.",
    icon: <Briefcase className="h-8 w-8 text-primary" />
  },
  {
    title: "Community Engagement",
    description: "We bridge the gap between businesses, local government, and community stakeholders to drive collaborative progress.",
    icon: <Users className="h-8 w-8 text-primary" />
  },
  {
    title: "Policy Influence",
    description: "Through strategic representation, we provide input on municipal, provincial, and federal policies affecting our business community.",
    icon: <Globe className="h-8 w-8 text-primary" />
  },
  {
    title: "Business Protection",
    description: "We provide strategic guidance and support to protect the interests and rights of our business community.",
    icon: <Shield className="h-8 w-8 text-primary" />
  },
  {
    title: "Communication & Networking",
    description: "Facilitating open communication channels and networking opportunities to strengthen our business ecosystem.",
    icon: <MessageCircle className="h-8 w-8 text-primary" />
  }
];

const frequentlyAskedQuestions = [
  {
    question: "How does the Chamber advocate for businesses?",
    answer: "We engage directly with policymakers, conduct research, provide policy recommendations, and represent business interests in key decision-making forums."
  },
  {
    question: "Can small businesses benefit from Chamber advocacy?",
    answer: "Absolutely! Our advocacy efforts are designed to support businesses of all sizes, with a particular focus on creating an inclusive and supportive business ecosystem."
  },
  {
    question: "How can I get involved in advocacy efforts?",
    answer: "Join our committees, attend policy roundtables, participate in business forums, or become a member to directly contribute to and benefit from our advocacy work."
  }
];

const Advocacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-6">
          Advocacy: Empowering Chatham-Kent's Business Community
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are the voice of businesses in Chatham-Kent, working tirelessly to create a thriving, supportive, and innovative business environment.
        </p>
      </motion.section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {advocacyAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center space-x-4">
                {area.icon}
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="max-w-4xl mx-auto">
          {frequentlyAskedQuestions.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">
          Join Our Advocacy Efforts
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Your voice matters. Together, we can shape a stronger, more resilient business community in Chatham-Kent.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
          Get Involved
        </button>
      </motion.section>
    </div>
  );
};

export default Advocacy;