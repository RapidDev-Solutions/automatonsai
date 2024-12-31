import { useRouteError } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Header/>
    <div id="error-pag">
      <h2 className="mt-5 pt-5 pb-2">Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Return <a href="/"><strong>home</strong></a>.</p>
    </div>
    <Footer />
    </>
  );
}