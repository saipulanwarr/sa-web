import React from "react";

const Counter = ({ className }) => {
  return (
    <div className="container bg-slate-100 rounded-md pt-8">
      <div className={`counter-block ${className}`}>
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-y-8">
          <div className="item">
            <div className="flex flex-col items-center">
              <div className="count-block flex items-center">
                <div className="counter heading3">2.5</div>
                <span className="heading3">k</span>
              </div>
              <div className="body1 text-secondary text-center">
                Bussiness Setup Growth
              </div>
            </div>
          </div>

          <div className="item">
            <div className="flex flex-col items-center">
              <div className="count-block flex items-center">
                <div className="counter heading3">1.7</div>
                <span className="heading3">k</span>
              </div>
              <div className="body1 text-secondary text-center">
                Bussiness Setup Growth
              </div>
            </div>
          </div>

          <div className="item">
            <div className="flex flex-col items-center">
              <div className="count-block flex items-center">
                <div className="counter heading3">3.1</div>
                <span className="heading3">k</span>
              </div>
              <div className="body1 text-secondary text-center">
                Bussiness Setup Growth
              </div>
            </div>
          </div>

          <div className="item">
            <div className="flex flex-col items-center">
              <div className="count-block flex items-center">
                <div className="counter heading3">2.1</div>
                <span className="heading3">k</span>
              </div>
              <div className="body1 text-secondary text-center">
                Bussiness Setup Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
