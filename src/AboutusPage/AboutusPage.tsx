import React from 'react';

export const AboutusPage = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4 text-primary">About</h2>
        <p className="lead">
          Welcome to our Badminton Court Booking application! This project was developed by Bhagyashree Puntambekar as part of her portfolio to showcase her skills and expertise in web development.
        </p>
        
        <h3 className="mt-4 text-secondary">Purpose</h3>
        <p>
          This application is designed to simplify the process of booking badminton courts. Whether you're an administrator managing multiple courts or a user looking to book a court for your next game, this application offers a seamless and efficient solution.
        </p>
        
        <h3 className="mt-4 text-secondary">Features</h3>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">
            <b>User View</b>: Users can easily browse available courts, make bookings, and manage their reservations through an intuitive interface.
          </li>
          <li className="list-group-item">
            <b>Admin View</b>: Administrators have access to a comprehensive backend system where they can manage court availability, view and manage bookings, and maintain user profiles.
          </li>
        </ul>
        
        <h3 className="mt-4 text-secondary">Technologies Used</h3>
        <p>This application is developed using the following technologies:</p>
        <div className="mb-4">
          <span className="badge bg-primary me-2">Java</span>
          <span className="badge bg-primary me-2">React.js</span>
          <span className="badge bg-primary">MongoDB</span>
        </div>
        
        <h3 className="mt-4 text-secondary">Contact Us</h3>
        <p>
          For credentials to test the application in both admin and user modes, or for any other inquiries, please contact directly:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Name</b>: Bhagyashree Puntambekar</li>
          <li className="list-group-item"><b>Email</b>: <a href="mailto:p.bhagyashree992@gmail.com">p.bhagyashree992@gmail.com</a></li>
          <li className="list-group-item"><b>LinkedIn</b>: <a href="https://www.linkedin.com/in/bhagyashree-puntambekar-25331188/" target="_blank" rel="noopener noreferrer">Bhagyashree Puntambekar on LinkedIn</a></li>
        </ul>
        
        <p className="mt-4">Thank you for visiting, and I look forward to your feedback and suggestions!</p>
      </div>
    </div>
  );
};
