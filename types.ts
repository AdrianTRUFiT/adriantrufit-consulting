
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceBlock {
  title: string;
  description: string;
}

export interface WorkflowItem {
  title: string;
  description: string;
  outcomes: string[];
}

export interface InsightItem {
  category: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}
