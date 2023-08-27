import "./App.css";
import Payment from "./components/containers/PaymentForm";
import Toggle from "./components/containers/ToggleButton";
import ErrorBoundary from "./components/containers/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <h1> React FSM example</h1>
        <div style={{ display: "flex" }}>
          <Payment />
          <Toggle />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
