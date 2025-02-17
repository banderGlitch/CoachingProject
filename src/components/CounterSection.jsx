import { useState, useEffect } from 'react';
import '../styles/CounterSection.css';

const CounterSection = () => {
  const [counts, setCounts] = useState({
    teachers: 0,
    members: 0,
    students: 0,
    toppers: 0
  });

  const targets = {
    teachers: 79,
    members: 366,
    students: 11000,
    toppers: 6400
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation
    const steps = 50; // Number of steps in the animation
    const interval = duration / steps;

    const incrementValues = {
      teachers: targets.teachers / steps,
      members: targets.members / steps,
      students: targets.students / steps,
      toppers: targets.toppers / steps
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounts(prevCounts => ({
          teachers: Math.min(Math.round(incrementValues.teachers * (currentStep + 1)), targets.teachers),
          members: Math.min(Math.round(incrementValues.members * (currentStep + 1)), targets.members),
          students: Math.min(Math.round(incrementValues.students * (currentStep + 1)), targets.students),
          toppers: Math.min(Math.round(incrementValues.toppers * (currentStep + 1)), targets.toppers)
        }));
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const counterData = [
    {
      count: counts.teachers,
      label: "Teachers",
      description: "Setting and achieving goals and objectives"
    },
    {
      count: counts.members,
      label: "Members",
      description: "Making key decisions and designing success strategies"
    },
    {
      count: counts.students,
      label: "Students",
      description: "Preparing themselves for the Competition"
    },
    {
      count: counts.toppers,
      label: "Toppers",
      description: "Landing in their dream college"
    }
  ];

  return (
    <section className="counter-section">
      <div className="counter-container">
        {counterData.map((item, index) => (
          <div className="counter-item" key={index}>
            <div className="counter-number">
              {item.count}
              <span className="plus">+</span>
            </div>
            <h3 className="counter-label">{item.label}</h3>
            <div className="counter-underline"></div>
            <p className="counter-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;