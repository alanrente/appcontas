import { useLoginGoogle } from "./index.hook";

export function LoginGoogle() {
  const { clicar, googleUrlPhoto, logout } = useLoginGoogle();

  return (
    <>
      {googleUrlPhoto && googleUrlPhoto?.length > 0 && (
        <div>
          <img
            src={googleUrlPhoto}
            style={{
              borderRadius: "50%",
              width: "45px",
              height: "45px",
            }}
          />
        </div>
      )}
      <button onClick={clicar}>Login Google</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}
