import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div>
        <h1>Epicure</h1>
        <h2>Feast Your Senses Culinary Creators on Exclusive Hub</h2>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />

          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
