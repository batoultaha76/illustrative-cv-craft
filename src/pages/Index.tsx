
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
      name: "Batoul Taha",
      title: "UI/UX Designer | Creative Problem Solver | User-Centered Thinker",
      contact: {
        email: "tahabatoul76@gmail.com",
        phone: "+961 76719155",
        location: "Lebanon - Bekaa",
        linkedin: "https://linkedin.com/in/batoultaha",
        website: "https://www.batoultaha.com",
      }
    },
    summary: "UI/UX Designer blending user-centered design with front-end skills. Proficient in Figma, design systems, and usability testing, with hands-on experience in HTML, CSS, JavaScript, and no-code tools.",
    experiences: [
      {
        title: "Freelance Web Developer",
        company: "Various Clients",
        period: "09/2019 - 06/2020",
        description: [
          "Designed responsive interfaces with HTML, CSS, and JS",
          "Created clean, user-friendly UI aligned with client goals",
          "Collaborated with clients to ensure design reflected brand",
          "Applied UX/UI best practices for optimal user engagement"
        ]
      },
      {
        title: "Consultant-Enumerator",
        company: "International Rescue Committee",
        period: "01/2022 - 05/2023",
        description: [
          "Collected client satisfaction data using digital tools",
          "Engaged respectfully with respondents",
          "Ensured accurate survey tracking and reporting",
          "Applied data analysis to extract meaningful insights"
        ]
      },
      {
        title: "Consultant-Enumerator",
        company: "Oxfam-GB",
        period: "09/2022 - 10/2022",
        description: [
          "Surveyed MSME owners for project evaluation",
          "Reviewed guidelines and prepared for field visits",
          "Managed scheduling, transport, and data entry",
          "Contributed to impact assessment reporting"
        ]
      }
    ],
    skills: [
      {
        title: "Technical Skills",
        skills: [
          { name: "Wireframing" },
          { name: "UX Research" },
          { name: "UI Design" },
          { name: "User Workflow" },
          { name: "HTML/CSS/JS" },
          { name: "Responsive Design" }
        ]
      },
      {
        title: "Soft Skills",
        skills: [
          { name: "Communication" },
          { name: "Collaboration" },
          { name: "Empathy" },
          { name: "Adaptability" },
          { name: "Time Management" },
          { name: "Detail-Oriented" }
        ]
      },
      {
        title: "Other Skills",
        skills: [
          { name: "Problem Solving" },
          { name: "User Needs Analysis" },
          { name: "Critical Thinking" },
          { name: "Data Interpretation" },
          { name: "Heuristic Evaluation" },
          { name: "Design Systems" }
        ]
      }
    ],
    education: [
      {
        degree: "UX/UI Design Bootcamp",
        institution: "SEF Coding School",
        period: "03/2025 - 04/2025",
        description: [
          "Core UX/UI skills: research, wireframing, prototyping",
          "Completed UX audits and user interviews",
          "Hands-on experience with Figma"
        ]
      },
      {
        degree: "Computer Science",
        institution: "Lebanese International University",
        period: "02/2015 – 07/2018",
        description: [
          "IT security principles training",
          "Java, Python, and C++ programming",
          "Database management systems",
          "Data manipulation techniques"
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
        issuer: "Cisco",
      },
      {
        title: "Can't Wait To Learn",
        issuer: "War Child Holland",
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
    <div className="min-h-screen py-8 px-4 bg-cv-background">
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
