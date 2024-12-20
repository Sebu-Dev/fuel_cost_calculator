import React from 'react';

export const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="p-4 bg-neutral-800 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold text-neutral-300 mb-2">{title}</h2>
    {children}
  </div>
);
