import Card from "./components/Card";
import Grid from "./components/Grid";
function App() {

  return (
    <>
        <div className="container">
          <h1>welcome react</h1>
          <Grid columns={4}>
            <Card />
            <Card />
            <Card />
          </Grid>
        </div>
    </>
  );
}

export default App
