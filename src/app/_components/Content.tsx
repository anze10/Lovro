import React from 'react';
import 'src/styles/App.css';

// Define Props for each Section
interface SectionProps {
    title: string;
    content: string;
}

// A Functional Component for each section
const Section: React.FC<SectionProps> = ({ title, content }) => (
    <div className="section">
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

// Main Component that includes all sections
const MainContent: React.FC = () => {
    return (
        <main>
            <Section
                title="Home"
                content="Welcome to our flooring solutions. Explore our wide range of services and high-quality products."
            />
            <Section
                title="Services"
                content="We offer a variety of flooring services including installation, repair, and maintenance."
            />
            <Section
                title="About Us"
                content="Learn more about our company's history, mission, and values."
            />
        </main>
    );
}

export default MainContent;