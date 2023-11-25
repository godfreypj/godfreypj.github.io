import React from 'react';

interface ExpCardProps {
  title: string;
  description: string;
  icon: string;
}

const ExpCard: React.FC<ExpCardProps> = function ExpCardComponent({ title, description, icon }) {
  return (
    <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content m-2 h-20 w-20 items-center">
      <div className="card-body p-6">
        <h2 className="card-title prose lg:prose-xl sm:block hidden">{title}</h2>
        <p className="lg:flex items-center prose sm:block hidden">{description}</p>
        <div className="card-actions lg:justify-end justify-center pb-6 ml-auto w-20">
          <img
            src={icon}
            alt={`${title} icon`}
            className="lg:w-14 w-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
