import React from 'react';

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
}

export interface Partner {
  name: string;
  subtext?: string;
}

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[]; // Paragraphs of text
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}