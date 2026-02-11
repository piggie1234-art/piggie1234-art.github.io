import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon?: React.ReactNode;
}

export interface Profile {
  name: string;
  title: string;
  school: string;
  major: string;
  focus: string;
  email: string;
  wechat: string;
  github: string;
  location: string;
}