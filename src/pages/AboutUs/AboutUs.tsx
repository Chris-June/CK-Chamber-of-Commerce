import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Executive Directors Data
const executiveDirectors = [
  { name: 'Director 1', position: 'Executive Director', image: '/path/to/director1.jpg' },
  { name: 'Director 2', position: 'Executive Director', image: '/path/to/director2.jpg' },
  { name: 'Director 3', position: 'Executive Director', image: '/path/to/director3.jpg' },
  { name: 'Director 4', position: 'Executive Director', image: '/path/to/director4.jpg' },
  { name: 'Director 5', position: 'Executive Director', image: '/path/to/director5.jpg' },
];

// Board Directors Data
const boardDirectors = [
  { name: 'Director 6', position: 'Board Director', image: '/path/to/director6.jpg' },
  { name: 'Director 7', position: 'Board Director', image: '/path/to/director7.jpg' },
  { name: 'Director 8', position: 'Board Director', image: '/path/to/director8.jpg' },
  { name: 'Director 9', position: 'Board Director', image: '/path/to/director9.jpg' },
  { name: 'Director 10', position: 'Board Director', image: '/path/to/director10.jpg' },
  { name: 'Director 11', position: 'Board Director', image: '/path/to/director11.jpg' },
  { name: 'Director 12', position: 'Board Director', image: '/path/to/director12.jpg' },
  { name: 'Director 13', position: 'Board Director', image: '/path/to/director13.jpg' },
];

// Team Members Data
const teamMembers = [
  { name: 'Rory Ring', position: 'CEO', image: '/path/to/rory-ring.jpg' },
  { name: 'Sarah St. Pierre', position: 'Manager of Administration', image: '/path/to/sarah-st-pierre.jpg' },
];

const AboutUs: React.FC = () => {
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
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={director.image} alt={director.name} />
                      <AvatarFallback>{director.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center">{director.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{director.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="board">
            <div className="grid md:grid-cols-4 gap-6">
              {boardDirectors.map((director, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={director.image} alt={director.name} />
                      <AvatarFallback>{director.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center">{director.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{director.position}</p>
                  </CardContent>
                </Card>
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{member.position}</p>
              </CardContent>
            </Card>
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
          <Card>
            <CardHeader>
              <CardTitle>Agriculture Committee</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Mandate: To represent the interests of Chatham-Kent's agricultural industry, develop partnerships, 
                promote recognition for farmers, and raise public awareness of the agricultural sector's contribution 
                to the local economy and community.</p>
              <p className="mt-4 font-semibold">Meeting Date: Second Tuesday of each month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advocacy & Government Relations Committee</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Mandate: Monitor legislative proposals at all government levels, offer input to ensure lawmakers 
                recognize the needs and views of our constituency. The committee will track local issues and 
                regularly report to the Board.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Policy & Governance Committee</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Mandate: Ensure all governing documents, policies, and procedures are developed, reviewed, and 
                updated to remain consistent with the Chatham-Kent Chamber of Commerce Vision, Mission, Values, 
                and Goals.</p>
            </CardContent>
          </Card>
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
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: 'Integrity', 
              description: "We build trust through integrity in everything we do. We earn loyalty by doing what we say and always doing what's right." 
            },
            { 
              title: 'Diversity', 
              description: 'We embrace diversity for growth and innovation. We represent universal environments and generate groundbreaking solutions.' 
            },
            { 
              title: 'Inclusion', 
              description: 'We embody inclusion by responding to shifting demographics. We grow by respecting and leveraging our differences.' 
            },
            { 
              title: 'Accountability', 
              description: 'We accept personal responsibility for high performance. We take ownership of our actions and strive to achieve more.' 
            }
          ].map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;