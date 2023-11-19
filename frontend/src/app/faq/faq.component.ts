import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems = [
    {
      question: 'What services does Clinic.MS offer?',
      answer: 'Clinic.MS offers services for managing patients, viewing patient information, managing inventory (medicine), adding new patients and medicines, editing existing patient and medicine records, and deleting existing patient and medicine records.',
      isOpen: true
    },
    {
      question: 'How can I add a new patient?',
      answer: 'To add a new patient, navigate to the relevant section on the website and look for the "Add New Patient" option. Click on it, and you will be prompted to provide the necessary information for the new patient.',
      isOpen: false
    }
    // Add more FAQ items as needed
  ];

  toggleAccordion(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
