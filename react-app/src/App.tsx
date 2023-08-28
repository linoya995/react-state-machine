import "./App.css";
import Payment from "./components/containers/PaymentForm";
import ToggleButton from "./components/containers/ToggleButton";
import ErrorBoundary from "./components/containers/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <h1> React FSM example</h1>
        <div style={{ display: "flex" }}>
          <Payment />
          <ToggleButton />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
