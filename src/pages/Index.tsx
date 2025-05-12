
import React from 'react';
import Header from '../components/Header';
import Summary from '../components/Summary';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Languages from '../components/Languages';
import PrintButton from '../components/PrintButton';

const Index = () => {
  const cvData = {
    personal: {
      name: "Your Name",
      title: "UI/UX Designer | Creative Problem Solver | User-Centered Thinker",
      contact: {
        email: "your.email@example.com",
        phone: "+123 456 789",
        location: "City, Country",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername",
      }
    },
    summary: "UI/UX Designer with a creative eye and coding knowledge, blending user-centered design with front-end skills. Proficient in Figma, design systems, and usability testing, with hands-on experience in HTML, CSS, JavaScript, and no-code tools. Passionate about building intuitive, accessible, and responsive digital experiences.",
    experiences: [
      {
        title: "Freelance Web Developer",
        company: "Various Clients",
        period: "09/2019 - 06/2020",
        description: [
          "Designed and built responsive interfaces with HTML, CSS, and JavaScript",
          "Created clean, user-friendly interfaces aligned with client goals",
          "Collaborated with clients to ensure design reflected their brand and user needs"
        ]
      },
      {
        title: "Consultant-Enumerator",
        company: "International Rescue Committee",
        period: "01/2022 - 05/2023",
        description: [
          "Collected client satisfaction and early childhood development data using digital tools",
          "Engaged respectfully and ethically with respondents",
          "Ensured accurate survey tracking and timely reporting"
        ]
      },
      {
        title: "Consultant-Enumerator",
        company: "Oxfam-GB",
        period: "09/2022 - 10/2022",
        description: [
          "Surveyed MSME owners/employees for project evaluation",
          "Reviewed project guidelines and prepared for field visits",
          "Managed scheduling, transport, and data entry"
        ]
      }
    ],
    skills: [
      {
        title: "Technical Skills",
        skills: [
          { name: "Wireframing & Prototyping", level: 5 },
          { name: "UX Research & Usability Testing", level: 4 },
          { name: "UI Design Principles", level: 5 },
          { name: "Workflow", level: 4 },
          { name: "HTML/CSS/JavaScript", level: 4 }
        ]
      },
      {
        title: "Soft Skills",
        skills: [
          { name: "Behavioral Skills", level: 5 },
          { name: "Communication & Collaboration", level: 5 },
          { name: "Empathy-Driven Design", level: 5 },
          { name: "Adaptability", level: 4 },
          { name: "Time Management", level: 4 },
          { name: "Attention to Detail", level: 5 }
        ]
      },
      {
        title: "Other Skills",
        skills: [
          { name: "Problem Solving", level: 5 },
          { name: "User Needs Assessment", level: 4 },
          { name: "Critical Thinking", level: 5 },
          { name: "Data Interpretation", level: 4 },
          { name: "Heuristic Evaluation", level: 4 }
        ]
      }
    ],
    education: [
      {
        degree: "UX/UI Design Bootcamp",
        institution: "SEF Coding School",
        period: "03/2025 - 04/2025",
        description: [
          "Learned core UX/UI skills: research, wireframing, prototyping, and no-code tools",
          "Completed UX audits, user interviews, and full UI redesigns with Figma",
          "Gained hands-on experience using Figma and presenting design solutions"
        ]
      },
      {
        degree: "Bachelor of Arts in Psychology",
        institution: "International University",
        period: "02/2015 - 07/2018",
        description: [
          "Focus on cognitive psychology and human-computer interaction",
          "Completed research on user behavior and digital interfaces",
          "Graduated with honors"
        ]
      }
    ],
    certificates: [
      {
        title: "Introduction to Networks",
        issuer: "Cisco",
      },
      {
        title: "CCNA1",
        issuer: "Switching, Routing, and Wireless Essentials - Cisco",
      },
      {
        title: "Can't Wait To Learn",
        issuer: "War Child Holland",
        description: "Participated in training on innovative education tools and child-centered learning approaches."
      }
    ],
    languages: [
      {
        name: "English",
        level: "Fluent"
      },
      {
        name: "Arabic",
        level: "Native"
      }
    ]
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-cv-background">
      <div className="cv-container">
        <Header 
          name={cvData.personal.name} 
          title={cvData.personal.title} 
          contact={cvData.personal.contact} 
        />
        <Summary text={cvData.summary} />
        <Experience experiences={cvData.experiences} />
        <Skills categories={cvData.skills} />
        <Education educations={cvData.education} />
        <Certificates certificates={cvData.certificates} />
        <Languages languages={cvData.languages} />
      </div>
      
      <PrintButton />
    </div>
  );
};

export default Index;
