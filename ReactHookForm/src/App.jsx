import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            {...register("firstname", {
              required: true,
              minLength: { value: 3, message: "min length is 3" },
            })}
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <div>
          <br />
          <label htmlFor="">Middle Name:</label>
          <input type="text" {...register("middlename")} />
        </div>
        <div>
          <br />
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            {...register("lastname", {
              required: true,
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "last name is not as per the rules",
              },
            })}
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "submitting" : "submit"}
        />
      </form>
    </>
  );
}

export default App;
