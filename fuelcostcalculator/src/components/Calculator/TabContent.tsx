import React from 'react';
type TabContentProps = {
  activeTab: string;
  content: Record<string, React.ReactNode>;
};

export const TabContent = ({ activeTab, content }: TabContentProps) => (
  <div className="flex flex-col w-full">{content[activeTab] || null}</div>
);
