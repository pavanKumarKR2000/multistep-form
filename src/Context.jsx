
import { createContext ,useContext, useEffect, useState} from "react";
import BasicInfo from "./components/BasicInfo";
import AddressInfo from "./components/AddressInfo";
import AccountInfo from "./components/AccountInfo";



const AppContext = createContext();

const AppContextProvider = ({children}) => {
    
    const [steps, setSteps] = useState([<BasicInfo />, <AddressInfo />, <AccountInfo />]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [step, setStep] = useState(steps[currentStepIndex]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState();
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [accountNumber, setAccountNumber] = useState();
    const [ifscCode, setIfscCode] = useState("");
    const [password, setPassword] = useState("");
   

    const back = () => {
        
        setCurrentStepIndex((i) => {
            return i === 0 ? i : i - 1;
        });
    }

    const next = () => {
        setCurrentStepIndex((i) => {
            return i === steps.length - 1 ? i : i + 1;
        });
    }

    useEffect(() => {
        setStep(steps[currentStepIndex]);
    }, [currentStepIndex]);

    let val = {
        currentStepIndex,
        totalSteps:steps.length,
        step,
        back,
        next,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        age,
        setAge,
        state,
        setState,
        city,
        setCity,
        street,
        setStreet,
        accountNumber,
        setAccountNumber,
        ifscCode,
        setIfscCode,
        password,
        setPassword
    }

    return (
        <AppContext.Provider value={val}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default AppContextProvider;

