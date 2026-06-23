import { Gender } from "@/types";
import { ActivityIcon, CalendarIcon, CheckCircleIcon, ClockIcon, ShieldIcon, UsersIcon } from "@/components/features/landing/icons";

export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};

export const features = [
    {
      icon: CalendarIcon,
      title: "Smart Scheduling",
      description: "Intelligent appointment booking with real-time availability, automated reminders, and calendar sync.",
    },
    {
      icon: UsersIcon,
      title: "Patient Management",
      description: "Comprehensive patient profiles with medical history, documents, and communication tools.",
    },
    {
      icon: ShieldIcon,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with HIPAA compliance, audit logs, and role-based access control.",
    },
    {
      icon: ActivityIcon,
      title: "Analytics & Insights",
      description: "Real-time dashboards and reports to understand your practice performance and patient outcomes.",
    },
    {
      icon: ClockIcon,
      title: "Wait Time Optimization",
      description: "Reduce patient wait times with intelligent scheduling and automated check-in workflows.",
    },
    {
      icon: CheckCircleIcon,
      title: "Automated Workflows",
      description: "Streamline administrative tasks with automated appointment reminders, follow-ups, and forms.",
    },
  ];
