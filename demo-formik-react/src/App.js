
import './App.css';
// import YoutubeForm from './components/YoutubeForm';
// import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import EnrollmentForm from './components/EnrollmentForm';
import { Theme, ThemeProvider } from "@chakra-ui/react"

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
      {/* <EnrollmentForm/> */}
      <LoginForm/>
      {/* <RegistrationForm/> */}
      {/* <FormikContainer/> */}
     {/* <YoutubeForm/> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
