import { useLoginGoogle } from "./index.hook";

export function LoginGoogle() {
  const { login, googleUrlPhoto } = useLoginGoogle();

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
      <button onClick={login}>Login Google</button>
    </>
  );
}
