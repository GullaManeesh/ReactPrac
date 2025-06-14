import { createContext } from "react";
import { useContext } from "react";

const context = createContext();

export const Provider = context.Provider;

export const UsageContext = () => {
  return useContext(context);
};

//step1 : create context
//step2 : create provider
//step3 : wrap provider
//step4 : send data to provider
//step5 : use context in component
