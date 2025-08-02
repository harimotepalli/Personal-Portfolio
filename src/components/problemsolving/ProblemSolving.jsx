import React from 'react';
import './ProblemSolving.css';
import { FaCode, FaChartLine, FaStar, FaFire } from 'react-icons/fa';

const ProblemSolving = () => {
  const platforms = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/Phanikumar9133/',
      problemsSolved: 110,
      streak: 103,
      icon: '🔥',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/phanikumar9133',
      problemsSolved: 55,
      badges: 8,
      icon: '⭐',
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/phanikumarpotcubc/',
      problemsSolved: 55,
      rank: 950,
      icon: '📈',
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/phanikumar9133',
      problemsSolved: 120,
      rating: 1600,
      icon: '⚡',
    },
  ];

  return (
    <section className="problem-solving-section" id="coding">
      <div className="ps-container">
        <h2 className="gradient-text">💡 Problem Solving Journey</h2>
        <p className="ps-intro">
          Here's a quick overview of my coding practice across various platforms.
        </p>
        <div className="ps-cards">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="ps-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ps-icon">{platform.icon}</div>
              <h3>{platform.name}</h3>
              <ul>
                {platform.problemsSolved && <li><FaCode /> Solved: {platform.problemsSolved} problems</li>}
                {platform.streak && <li><FaFire /> Streak: {platform.streak} days</li>}
                {platform.badges && <li><FaStar /> Badges: {platform.badges}</li>}
                {platform.rank && <li><FaChartLine /> GFG Rank: {platform.rank}</li>}
                {platform.rating && <li><FaChartLine /> Rating: {platform.rating}</li>}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
