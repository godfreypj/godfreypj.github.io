/* eslint-disable jsx-a11y/no-redundant-roles */
import Header from './components/Header';

function App() {
  return (
    <>
      <div role="navigation" aria-label="main nav">
        <Header />
      </div>
      <div role="main">
        <br />
        <h1 className="text-2xl font-bold underline" role="heading">My App</h1>
      </div>
    </>
  );
}

export default App;
