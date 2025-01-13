import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExecutiveDirectorsCard } from '@/components/ui/Modals/AboutUsModals/ExecutiveDirectorsModal';
import { DirectorsCard } from '@/components/ui/Modals/AboutUsModals/DirectorsModal';
import { CommitteesCard } from '@/components/ui/Modals/AboutUsModals/CommitteesModal';
import { ExecutiveDirector } from '@/components/ui/Modals/AboutUsModals/executiveDirectorsData';
import { BoardDirector } from '@/components/ui/Modals/AboutUsModals/boardDirectorsData';
import { boardDirectors } from '@/components/ui/Modals/AboutUsModals/boardDirectorsData';
import { committees } from '@/components/ui/Modals/AboutUsModals/committeesData';
import { ValuesCard, ValuesModal } from '@/components/ui/Modals/AboutUsModals/ValuesModal';
import { valuesData, Value } from '@/components/ui/Modals/AboutUsModals/valuesData';
import { teamMembers } from '@/components/ui/Modals/AboutUsModals/teamData';
import { TeamModal, TeamMemberCard, TeamMember } from '@/components/ui/Modals/AboutUsModals/TeamModal';
import { ExecutiveDirectorsModal } from '@/components/ui/Modals/AboutUsModals/ExecutiveDirectorsModal';
import { DirectorsModal } from '@/components/ui/Modals/AboutUsModals/DirectorsModal';

// Executive Directors Data
const executiveDirectors: ExecutiveDirector[] = [
  { 
    id: 'bj-griffiths',
    name: 'B.J. Billy-Jo Griffiths', 
    role: 'Chair', 
    organization: 'Royal Bank',
    imageUrl: '/path/to/bj-griffiths.jpg',
    personalMessage: 'Leading our chamber with strategic vision and commitment.',
    chamberImportance: 'Providing strategic direction and leadership for the Chatham-Kent business community.'
  },
  { 
    id: 'sarah-molnar',
    name: 'Sarah Molnar', 
    role: 'Chair-Elect', 
    organization: 'Paragon Property Management',
    imageUrl: '/path/to/sarah-molnar.jpg',
    personalMessage: 'Committed to fostering growth and innovation in our local business ecosystem.',
    chamberImportance: 'Supporting strategic initiatives and preparing for future leadership.'
  },
  { 
    id: 'amanda-clark',
    name: 'Amanda Clark', 
    role: 'Vice Chair', 
    organization: 'BGC of Chatham-Kent',
    imageUrl: '/path/to/amanda-clark.jpg',
    personalMessage: 'Dedicated to strengthening community connections and business partnerships.',
    chamberImportance: 'Driving collaborative efforts and supporting chamber objectives.'
  },
  { 
    id: 'aaron-ryan',
    name: 'Aaron Ryan', 
    role: 'Treasurer', 
    organization: 'Chatham-Kent Health Alliance',
    imageUrl: '/path/to/aaron-ryan.jpg',
    personalMessage: 'Ensuring financial integrity and strategic resource management.',
    chamberImportance: 'Providing financial oversight and supporting fiscal responsibility.'
  },
  { 
    id: 'ryan-organ',
    name: 'Ryan Organ', 
    role: 'Past Chair', 
    organization: 'Enbridge',
    imageUrl: '/path/to/ryan-organ.jpg',
    personalMessage: 'Bringing continuity and experience to our chamber\'s leadership.',
    chamberImportance: 'Offering historical perspective and supporting leadership transition.'
  }
];

const AboutUs: React.FC = () => {
  // Values state
  const [selectedValue, setSelectedValue] = useState<Value | null>(null);
  const [isValuesModalOpen, setIsValuesModalOpen] = useState(false);

  // Executive Directors state
  const [selectedExecutiveDirector, setSelectedExecutiveDirector] = useState<ExecutiveDirector | null>(null);
  const [isExecutiveModalOpen, setIsExecutiveModalOpen] = useState(false);

  // Board Directors state
  const [selectedBoardDirector, setSelectedBoardDirector] = useState<BoardDirector | null>(null);
  const [isBoardDirectorModalOpen, setIsBoardDirectorModalOpen] = useState(false);

  // Team Members state
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  // Values handlers
  const handleLearnMore = (value: Value) => {
    setSelectedValue(value);
    setIsValuesModalOpen(true);
  };

  const handleCloseValuesModal = () => {
    setIsValuesModalOpen(false);
    setSelectedValue(null);
  };

  // Executive Directors handlers
  const handleExecutiveDirectorClick = (director: ExecutiveDirector) => {
    setSelectedExecutiveDirector(director);
    setIsExecutiveModalOpen(true);
  };

  const handleCloseExecutiveModal = () => {
    setIsExecutiveModalOpen(false);
    setSelectedExecutiveDirector(null);
  };

  // Board Directors handlers
  const handleBoardDirectorClick = (director: BoardDirector) => {
    setSelectedBoardDirector(director);
    setIsBoardDirectorModalOpen(true);
  };

  const handleCloseBoardDirectorModal = () => {
    setIsBoardDirectorModalOpen(false);
    setSelectedBoardDirector(null);
  };

  // Team Members handlers
  const handleTeamMemberClick = (member: TeamMember) => {
    setSelectedTeamMember(member);
    setIsTeamModalOpen(true);
  };

  const handleCloseTeamModal = () => {
    setIsTeamModalOpen(false);
    setSelectedTeamMember(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Who We Are Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          The Chatham-Kent Chamber of Commerce is a distinguished business organization with over 120 years of experience. 
          We proudly represent over 350 business members in our community, serving as the voice of business on local, provincial, 
          and federal business issues. Our organization provides critical policy advisement and representation through the 
          Ontario Chamber of Commerce and the Canadian Chamber of Commerce. A notable milestone in our history includes 
          hosting the 2013 Ontario Chamber AGM.
        </p>
      </motion.section>

      {/* Meet the Board Section */}
      <section>
        <Tabs defaultValue="executive" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="executive">Executive Directors</TabsTrigger>
            <TabsTrigger value="board">Board Directors</TabsTrigger>
          </TabsList>
          <TabsContent value="executive">
            <div className="grid md:grid-cols-3 gap-6">
              {executiveDirectors.map((director, index) => (
                <ExecutiveDirectorsCard 
                  key={index} 
                  director={director} 
                  onClick={() => handleExecutiveDirectorClick(director)} 
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="board">
            <div className="grid md:grid-cols-4 gap-6">
              {boardDirectors.map((director, index) => (
                <DirectorsCard 
                  key={index} 
                  director={director} 
                  onClick={() => handleBoardDirectorClick(director)} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Meet the Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">Meet the Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              onLearnMore={() => handleTeamMemberClick(member)} 
            />
          ))}
        </div>
      </section>

      {/* Strategic Plan Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Strategic Plan</h2>
        <p className="text-gray-700 leading-relaxed">
          Our strategic plan focuses on empowering local businesses, driving economic growth, 
          and creating a supportive ecosystem for entrepreneurship in Chatham-Kent. We are committed 
          to continuous improvement, innovation, and providing value to our members.
        </p>
      </motion.section>

      {/* Committees Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">Our Committees</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <CommitteesCard key={index} committee={committee} />
          ))}
        </div>
      </section>

      {/* About Chatham-Kent Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">About Chatham-Kent</h2>
        <p className="text-gray-700 leading-relaxed">
          Chatham, the largest urban centre in Chatham-Kent, is a prosperous community with a diverse blend of 
          natural and created attractions. Centrally located between Windsor, Sarnia, and London, it offers 
          strategic advantages for businesses and residents alike.
        </p>
        {/* Additional paragraphs can be added here */}
      </motion.section>

      {/* Our Values Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {valuesData.map((value, index) => (
            <ValuesCard 
              key={index} 
              value={value} 
              onLearnMore={() => handleLearnMore(value)} 
            />
          ))}
        </div>
      </section>

      {/* Values Modal */}
      {selectedValue && (
        <ValuesModal 
          isOpen={isValuesModalOpen} 
          onClose={handleCloseValuesModal} 
          value={selectedValue} 
        />
      )}

      {/* Executive Directors Modal */}
      {selectedExecutiveDirector && (
        <ExecutiveDirectorsModal 
          isOpen={isExecutiveModalOpen}
          onClose={handleCloseExecutiveModal}
          director={selectedExecutiveDirector}
        />
      )}

      {/* Board Directors Modal */}
      {selectedBoardDirector && (
        <DirectorsModal 
          isOpen={isBoardDirectorModalOpen}
          onClose={handleCloseBoardDirectorModal}
          director={selectedBoardDirector}
        />
      )}

      {/* Team Modal */}
      {selectedTeamMember && (
        <TeamModal 
          isOpen={isTeamModalOpen}
          onClose={handleCloseTeamModal}
          member={selectedTeamMember}
        />
      )}
    </div>
  );
};

export default AboutUs;