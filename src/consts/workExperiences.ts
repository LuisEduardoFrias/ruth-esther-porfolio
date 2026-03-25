import type { workExperience } from '@/types/workExperience.ts'

export const WORKEXPERIENCES: workExperience[] = [
   {
      key: 'pgd',
      company: 'People Group Dominicana',
      cargo: 'Data analitic',
      area: 'Operations / Commercial',
      tasks: ['KPI Management','Reporting', 'Cleaning and Preparation (Data Wrangling)'],
      link: 'people-group'
   },
   {
      key: 'ca_2',
      company: 'The Chamber of Accounts',
      cargo: 'Analyst',
      area: 'Technology Department',
      tasks: ['Testing', 'Documentation', 'Requirements Gathering'],
      link: 'camera-qa'
   },
   {
      key: 'ca_1',
      company: 'The Chamber of Accounts',
      cargo: 'Secretary',
      area: 'Communications Directorate',
      tasks: ["Secretary and Assistant to the Director", "Agenda Management", "Press Planning"],
      link: 'camera-secretary'
   },
   {
      key: 'mip',
      company: 'The Ministry of Interior and Police',
      cargo: 'Protocol Officer',
      tasks: ["-"],
      link: 'protocol-officer'
   },
];
