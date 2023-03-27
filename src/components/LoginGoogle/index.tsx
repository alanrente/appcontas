import { useLoginGoogle } from "./index.hook";

export function LoginGoogle() {
  const { loginGoogle } = useLoginGoogle();

  return (
    <>
      <button onClick={loginGoogle}>Login Google</button>
    </>
  );
}
