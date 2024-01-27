import { GoogleButton } from "@/features/GoogleButton/ui/GoogleButton";
// import { SignInForm } from "@/features/SignInForm/ui/SignInForm";

export default async function Signin() {
  return (
    <div className="py-10 flex flex-col items-center gap-1">
      <h1 className="">Sign In</h1>
      {/* <SignInForm />
      <div>or</div> */}
      <GoogleButton />
    </div>
  );
}
