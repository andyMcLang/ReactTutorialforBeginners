import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="dark" onClick={() => console.log("My Button")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
