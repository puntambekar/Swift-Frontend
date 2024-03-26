import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center fixed-bottom">
      <div className="container"></div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2024 Copyright:
        <a className="text-body" href="#">Sportify.com</a>
      </div>
    </footer>
  );
};


