// React Imports
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

// CSS
import './App.scss';

// Components
import Header from "./Comps/Header";
import Footer from "./Comps/Footer";
import Overlay from "./Comps/Overlay";
import Modal from "./Comps/Modal";

// Pages
import Home from "./Pages/Home";
import Flowers from "./Pages/Flowers";
import Cart from "./Pages/Cart";
import Error404 from "./Pages/Error404";

// Redux things
import { useSelector, useDispatch } from "react-redux";
import { setShowOverlay } from "./ReduxStore/actions";


function App() {

  const location = useLocation();
  const dispatch = useDispatch();
  const showOverlay = useSelector(state => state.reducer.showOverlay);
  const showModal = useSelector(state => state.reducer.showModal);

  return (
    <>
    <Header />

    <SwitchTransition>
      <CSSTransition
      key={location.pathname}
      timeout={150}
      classNames="fade-">

        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </CSSTransition>
    </SwitchTransition>

    <Footer />

    <CSSTransition
    in={showOverlay}
    timeout={150}
    classNames="blur-fade-"
    mountOnEnter={true}
    unmountOnExit={true}>
      <Overlay />
    </CSSTransition>

    <CSSTransition
    in={showModal}
    timeout={150}
    classNames="popup-"
    mountOnEnter={true}
    unmountOnExit={true}
    onEnter={() => dispatch(setShowOverlay(true))}
    onExit={() => dispatch(setShowOverlay(false))}>
      <Modal />
    </CSSTransition>
    </>
  );
}

export default App;