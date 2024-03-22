import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("");
  const [email, handleEmailChange] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");

  const handleSubmit = (e) => {
    console.log(name, email, password);
    e.preventDefault();
  };
  return (
    <div>
      <h2>Custom Hook Form</h2>
      <form className="space-y-2 " onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          name="email"
        />
        <br />
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          name="password"
        />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
