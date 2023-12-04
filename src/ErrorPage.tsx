import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  const titleStyle = {
    fontSize: "max(8em, min(80em, calc(100vw * 4 / 75)))",
    fontWeight: "900",
    lineHeight: 1,
  }

  return (
    <div id="error-page" style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 0, margin: 0, padding: 0 }}>
      <h1 style={titleStyle}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}