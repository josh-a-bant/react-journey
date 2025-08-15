import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            First Name:
            <input
              {...register("firstName", {
                required: {
                  value: true,
                  message: "this field is required",
                },
                minLength: {
                  value: 2,
                  message: "minimun 2 word required",
                },
              })}
              className={errors.firstName && "error-input"}
            />
            {errors.firstName && (
              <span className="error-msg">{errors.firstName.message}</span>
            )}
          </label>
        </div>
        <br />

        <div>
          <label>
            Second Name:
            <input
              {...register("lastName", {
                minLength: {
                  value: 2,
                  message: "minimun 2 word required",
                },
              })}
              className={errors.lastName && "error-input"}
            />
            {errors.lastName && (
              <span className="error-msg">{errors.lastName.message}</span>
            )}
          </label>
        </div>
        <br />

        <div>
          <input
            type="submit"
            disabled={isSubmitting && true}
            value={isSubmitting ? "submitting" : "submit"}
          />
        </div>
      </form>
    </>
  );
}

export default App;
