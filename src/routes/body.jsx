import Hero from "./../components/hero";
import About from "./../components/about";
import Feedback from "./../components/feedback";

export async function loader({ request }) {
  const url = new URL(request.url);
  return null;
}

export async function action() {
  return null;
}

export default function Body() {
    return (
      <>
        <div className='body'>
          <Hero />
          <About />
          <Feedback />
        </div>
      </>
    );
  }