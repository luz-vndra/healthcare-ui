import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { patients as patientSeedData, type Patient } from "../data/patients";

type PatientsByAgeDatum = {
  age: string;
  count: number;
};

type GenderDistributionDatum = {
  name: Patient["gender"];
  value: number;
};

type AppointmentsPerDayDatum = {
  day: Patient["appointmentDay"];
  count: number;
};

type PatientsContextValue = {
  patients: Patient[];
  isLoading: boolean;
  error: string | null;
  patientsByAge: PatientsByAgeDatum[];
  genderDistribution: GenderDistributionDatum[];
  appointmentsPerDay: AppointmentsPerDayDatum[];
};

const PatientsContext = createContext<PatientsContextValue | undefined>(undefined);

const APPOINTMENT_DAYS: Patient["appointmentDay"][] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
];

export const PatientsProvider = ({ children }: { children: ReactNode }) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const timer = window.setTimeout(() => {
      if (isMounted === false) return;

      try {
        setPatients(patientSeedData);
        setError(null);
      } catch {
        setError("Failed to load patient data.");
      } finally {
        setIsLoading(false);
      }
    }, 200);

    return () => {
      isMounted = false;
      window.clearTimeout(timer);
    };
  }, []);

  const patientsByAge = useMemo<PatientsByAgeDatum[]>(() => {
    const groups = {
      "0-18": 0,
      "19-35": 0,
      "36-60": 0,
      "60+": 0,
    };

    patients.forEach((patient) => {
      if (patient.age <= 18) {
        groups["0-18"] += 1;
      } else if (patient.age <= 35) {
        groups["19-35"] += 1;
      } else if (patient.age <= 60) {
        groups["36-60"] += 1;
      } else {
        groups["60+"] += 1;
      }
    });

    return Object.entries(groups).map(([age, count]) => ({ age, count }));
  }, [patients]);

  const genderDistribution = useMemo<GenderDistributionDatum[]>(() => {
    const counts: Record<Patient["gender"], number> = {
      Male: 0,
      Female: 0,
      Other: 0,
    };

    patients.forEach((patient) => {
      counts[patient.gender] += 1;
    });

    return Object.entries(counts).map(([name, value]) => ({
      name: name as Patient["gender"],
      value,
    }));
  }, [patients]);

  const appointmentsPerDay = useMemo<AppointmentsPerDayDatum[]>(() => {
    const counts: Record<Patient["appointmentDay"], number> = {
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
    };

    patients.forEach((patient) => {
      counts[patient.appointmentDay] += 1;
    });

    return APPOINTMENT_DAYS.map((day) => ({
      day,
      count: counts[day],
    }));
  }, [patients]);

  const value = useMemo(
    () => ({
      patients,
      isLoading,
      error,
      patientsByAge,
      genderDistribution,
      appointmentsPerDay,
    }),
    [
      patients,
      isLoading,
      error,
      patientsByAge,
      genderDistribution,
      appointmentsPerDay,
    ],
  );

  return (
    <PatientsContext.Provider value={value}>{children}</PatientsContext.Provider>
  );
};

export const usePatients = () => {
  const context = useContext(PatientsContext);

  if (context === undefined) {
    throw new Error("usePatients must be used within a PatientsProvider");
  }

  return context;
};
