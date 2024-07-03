import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import Festival from "./Festival";
import Header from "./Header";
import Footer from "./Footer";
import RegistrationResult from "./RegistrationResult";
import TicketChecker from "./TicketChecker";
function App() {
  return (
    <Router>
      <main className="w-full px-4">
        <AppContent />
      </main>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/ticketchecker";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Switch>
        <Route path="/" exact component={Festival} />
        <Route
          path="/festivalregistration"
          exact
          component={RegistrationForm}
        />
        <Route path="/registrationresult" component={RegistrationResult} />
        <Route path="/ticketchecker" component={TicketChecker} />
      </Switch>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
