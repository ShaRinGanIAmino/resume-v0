import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-experience',
  imports: [AccordionModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  expandedPanels: number[] = [];

  experiences = [
    {
      icon: '🛠',
      title: 'Software Developer – Mass Analytics',
      period: 'Aug 2024 – Present',
      details: [
        'Improved desktop application UI, delivering new features and enhancing user experience.',
        'Led the migration from desktop to a SaaS web-based platform, modernizing the frontend with Angular.',
      ],
    },
    {
      icon: '🖥',
      title: 'Full-stack Web Developer Intern – Telnet',
      period: 'Feb 2024 – Jul 2024',
      details: [
        'Developed a hybrid work management application with a microservices architecture.',
        'Improved workflow automation, reducing paperwork and increasing efficiency.',
      ],
    },
    {
      icon: '🎨',
      title: 'Part-Time Web Designer – Aleia',
      period: 'Jul 2023 – Jan 2024',
      details: [
        'Built SEO-optimized websites, boosting organic traffic by 40%.',
        'Transformed Figma designs into high-converting web interfaces with React.js.',
      ],
    },
    {
      icon: '👨‍🏫',
      title: 'Part-Time Web Development Instructor – Gomycode',
      period: 'Sept 2022 – June 2023',
      details: [
        'Mentored 100+ students in HTML, CSS, JavaScript, Git, and MERN stack.',
        'Introduced advanced concepts to help students build real-world projects.',
      ],
    },
    {
      icon: '💼',
      title: 'Salesforce Developer Intern – Talan',
      period: 'June 2022 – Aug 2022',
      details: [
        'Built and optimized Lightning Web Components for a client CRM system.',
      ],
    },
  ];

  constructor() {
    this.expandedPanels = this.experiences.map((_, index) => index);
  }
}
