import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
// import Contact from "./components/Contact";
// import Book from "./components/Book";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} /> 
        <Route exact path="/add"> <AddContact/></Route>
        <Route exact path="/edit/:id">
         <EditContact/>
        </Route>
      </Switch>
      {/* <Contact/> */}
      {/* <Book/> */}
    </>
  );
}

export default App;
