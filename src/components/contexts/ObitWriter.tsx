"use client";
import React, { createContext, ReactNode,useContext, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  dateOfDeath: string;
  obituary: string;
  age: string;
  stateOfDeath: string;
  cityOfDeath: string;
  countryOfDeath: string;
  hasService: string;
}

interface ObitWriterContextType {
  formData: FormData;
  updateFormData: (name: keyof FormData, value: string) => void;
}

const ObitWriterContext = createContext<ObitWriterContextType | undefined>(
  undefined
);

interface ObitWriterProviderProps {
  children: ReactNode;
}

export const ObitWriterProvider: React.FC<ObitWriterProviderProps> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    age: "",
    cityOfDeath: "",
    countryOfDeath: "",
    dateOfDeath: "",
    firstName: "",
    hasService: "",
    lastName: "",
    obituary: "",
    stateOfDeath: "",
  });

  const updateFormData = (name: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <ObitWriterContext.Provider value={{ formData, updateFormData }}>
      {children}
    </ObitWriterContext.Provider>
  );
};

export const useObitWriter = (): ObitWriterContextType => {
  const context = useContext(ObitWriterContext);
  if (!context) {
    throw new Error("useObitWriter must be used within an ObitWriterProvider");
  }
  return context;
};
