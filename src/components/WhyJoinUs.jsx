import React from 'react';
import '../styles/WhyJoinUs.css';
import teachingIcon from '../assets/teaching-icon.png';
import studyIcon from '../assets/study-icon.png';
import environmentIcon from '../assets/environment-icon.png';
import resultIcon from '../assets/result-icon.png';


const WhyJoinUs = () => {
  const features = [
    {
      title: "Teaching Methodology",
      icon: teachingIcon,
      points: [
        "Best Faculty Team from IIT & Medical Institute",
        "Doubt Clearance Sessions",
        "Personal Attention",
        "AITS(All India Test Series)",
        "Discussion Classes",
        "Satellite Classes",
        "L1 Aspire App(For E-Learning)"
      ]
    },
    {
      title: "Study Material",
      icon: studyIcon,
      points: [
        "Updated Study Material",
        "Phenomenal Study Notes",
        "Award for Best Study Material from Dr. S.N. Pandey (Ex-Scientist BHU)"
      ]
    },
    {
      title: "Student Friendly Environment",
      icon: environmentIcon,
      points: [
        "AC Classrooms & Labs(Phys, Chem)",
        "Well Equipped Library",
        "Study Rooms",
        "Smart Classes",
        "Bio-Metric Attendance System",
        "Computer Labs (Online Test & Classes Revision)"
      ]
    },
    {
      title: "Best Result",
      icon: resultIcon,
      points: [
        "IIT-JEE 2019 Varanasi Topper",
        "NEET 2021 Varanasi Topper",
        "NEET 2021 AIR-1 (OBC Category)",
        "100% Success of Super-40 Batch from 2018",
        "Highest % of Selection in IIT & NEET",
        "Best Score in JEE-Main (340/360)",
        "Best Score in NEET (715/720)"
      ]
    }
  ];

  return (
    <section className="why-join-section" role="region">
      <h2 className="section-title">Why should you join L-1</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index} data-testid="feature-card">
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <ul className="feature-points">
              {feature.points.map((point, pointIndex) => (
                <li key={pointIndex}>
                  <span className="checkmark">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinUs;
