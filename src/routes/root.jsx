import { useEffect, useRef } from 'react';
import {
  Outlet,
  useLocation,
  useNavigation,
  useParams,
} from "react-router-dom";
import Header from "./../components/header";
import Footer from "./../components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Root() {
  const navigation = useNavigation();
  const params = useParams();

  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return (
    <> 
    <a id="home"></a>
    <Header params={params}/>
    <div id="stacks" className={navigation.state === "loading" ? "loading" : ""}>
      <Outlet />
    </div>
    <Footer />
    <ToastContainer position='bottom-right' theme='dark' />
    </>
  );
}