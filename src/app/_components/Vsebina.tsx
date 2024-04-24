import React from 'react';
import 'src/styles/Koda.css';

interface ISectionProps {
    title: string;
    description: string;
    buttonLabel: string;
}

const Section: React.FC<ISectionProps> = ({ title, description, buttonLabel }) => (
    <div className="card">
        <div className="card-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button>{buttonLabel}</button>
        </div>
    </div>
);

const MainContent: React.FC = () => {
    return (
        <div className="content">
            <Section
                title="HOME"
                description="Short and engaging description about the home section..."
                buttonLabel="READ MORE"
            />
            <Section
                title="SERVICES"
                description="Overview of services offered with a compelling call to action..."
                buttonLabel="LEARN MORE"
            />
            <Section
                title="ABOUT US"
                description="Brief company bio that encourages the reader to click..."
                buttonLabel="WHO WE ARE"
            />
        </div>
    );
}

export default MainContent;
