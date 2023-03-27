export function ContainerScrolable({ children }: any) {
  return (
    <div
      style={{
        // height: "calc(var(--HMain) - 130px)",
        overflowY: "auto",
        // height: "80%",
      }}
    >
      {children}
    </div>
  );
}
