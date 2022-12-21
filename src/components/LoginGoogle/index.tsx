import { useLoginGoogle } from "./index.hook";

export function LoginGoogle() {
  const { clicar, googleUrlPhoto, logout } = useLoginGoogle();

  return (
    <>
      <button onClick={clicar}>Login Google</button>
      <button onClick={logout}>Logout</button>
      {googleUrlPhoto && googleUrlPhoto?.length > 0 && (
        <div
          style={{
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            backgroundImage: `url(${googleUrlPhoto})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      )}
    </>
  );
}
