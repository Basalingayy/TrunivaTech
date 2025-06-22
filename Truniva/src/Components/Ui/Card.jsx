import React from "react";
// import "./Card.css"; // <-- Ensure this matches your actual file name exactly

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`card shadow-sm rounded-4 p-3 mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`card-content ${className}`} {...props}>
      {children}
    </div>
  );
}
