import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import HookForm from "./components/HookForm/HookForm";
import RefForm from "./components/RefForm/RefForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("profile update", data);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl text-center mt-10">
        <h1 className="text-3xl mb-4">Forms</h1>
        <div className="space-y-6">
          <SimpleForm></SimpleForm>
          <StatefulForm></StatefulForm>
          <RefForm></RefForm>
          <HookForm></HookForm>
          <ReusableForm
            submitBtnText={"Submit"}
            formTitle={"Sign Up"}
            handleSubmit={handleSignUpSubmit}
          >
            <div className="text-xs">
              <h2>Sign Up</h2>
              <p>Please sign up right now</p>
            </div>
          </ReusableForm>
          <ReusableForm
            submitBtnText={"Update"}
            formTitle={"Profile Update"}
            handleSubmit={handleUpdateProfile}
          >
            <div className="text-xs">
              <h2>Update Profile</h2>
              <p>Always keep your profile updated</p>
            </div>
          </ReusableForm>
          <Grandpa></Grandpa>
        </div>
      </div>
    </>
  );
}

export default App;
