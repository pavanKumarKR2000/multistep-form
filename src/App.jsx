import BasicInfo from "./components/BasicInfo"
import StepIndicator from './components/StepIndicator';
import { useGlobalContext } from "./Context";

function App() {
 
  const { step } = useGlobalContext();

  return (
    <div className="bg-slate-50 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-10 py-6 w-[80%] sm:w-[60%] lg:w-[35%] xl:w-[50%] flex flex-col space-y-6 rounded-md shadow-md">
        <StepIndicator />
        {step}
      </div>
    </div>
  )
}

export default App
