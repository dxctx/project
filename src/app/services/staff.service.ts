import { Injectable } from '@angular/core';

export interface Person {
  name: string;
  role: string;
  medicalBackground: string;
  infectionControlNotes: string;
  clinicalNotes: string[];
}
export interface Vaccine {
  name: string;
  warnings: string[];
  sideEffects: string[];
  effectDuration: string;
  diseasesToTreat: string[];
}

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private persons: Person[] = [
    {
      name: 'John',
      role: 'Doctor',
      medicalBackground: 'Medical Doctor',
      infectionControlNotes: 'Vaccinated against flu',
      clinicalNotes: ['Normal blood pressure', 'No known allergies'],
    },
    {
      name: 'Mary',
      role: 'Nurse',
      medicalBackground: 'Registered Nurse',
      infectionControlNotes: 'Vaccinated against hepatitis B',
      clinicalNotes: ['Leg injury in the healing process'],
    },
    {
      name: 'Peter',
      role: 'Paramedic',
      medicalBackground: 'Emergency Medical Technician',
      infectionControlNotes: 'Vaccinated against tetanus',
      clinicalNotes: ['History of asthma'],
    },
    {
      name: 'Anna',
      role: 'Pharmacist',
      medicalBackground: 'Doctor of Pharmacy',
      infectionControlNotes: 'Not vaccinated for measles',
      clinicalNotes: ['Elevated eye pressure'],
    },
    {
      name: 'Louis',
      role: 'Lab Technician',
      medicalBackground: 'Clinical Laboratory and Biomedical Technician',
      infectionControlNotes: 'Vaccinated against chickenpox',
      clinicalNotes: ['No current clinical notes'],
    },
  ];

  private vaccines: Vaccine[] = [
    {
      name: 'COVID-19',
      warnings: ['Keep refrigerated', 'Do not freeze'],
      sideEffects: ['Mild fever', 'Fatigue', 'Pain at injection site'],
      effectDuration: '6 months',
      diseasesToTreat: ['COVID-19'],
    },
    {
      name: 'Influenza',
      warnings: [
        'Administer annually',
        'Not for individuals with egg allergies',
      ],
      sideEffects: ['Slight soreness at injection site', 'Low-grade fever'],
      effectDuration: '1 year',
      diseasesToTreat: ['Influenza'],
    },
    {
      name: 'Hepatitis B',
      warnings: ['Requires multiple doses for full effectiveness'],
      sideEffects: ['Mild pain at the injection site', 'Fatigue'],
      effectDuration: 'Lifelong immunity (with complete vaccination)',
      diseasesToTreat: ['Hepatitis B'],
    },
    {
      name: 'Tetanus',
      warnings: ['Boosters needed every 10 years'],
      sideEffects: ['Sore arm', 'Low-grade fever'],
      effectDuration: '10 years (with booster shots)',
      diseasesToTreat: ['Tetanus'],
    },
    {
      name: 'MMR (Measles, Mumps, Rubella)',
      warnings: ['Not recommended during pregnancy'],
      sideEffects: ['Mild rash', 'Fever'],
      effectDuration: 'Lifetime immunity (with complete vaccination)',
      diseasesToTreat: ['Measles', 'Mumps', 'Rubella'],
    },
  ];

  constructor() {}

  searchPeoplePerName(name: string) {
    return this.persons.filter((person) => person.name.includes(name));
  }

  searchVaccinesByName(disease: string) {
    return this.vaccines.filter((vaccine) =>
      vaccine.diseasesToTreat.some((d) =>
        d.toLowerCase().includes(disease.toLowerCase())
      )
    );
  }
}
