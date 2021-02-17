import './App.css';

function App() {
  return (
    <div className="container">
      <div className="container-content">
        <header>
          <h1>form validations</h1>
        </header>
        <form >
          <div className="input-group">
            <p className="label">Full Name</p>
            <input placeholder="full Name" className="text-button" />
            <p className="error">error</p>
          </div>
          <div className="input-group">
            <p className="label">Email Adress</p>
            <input placeholder="full Name" className="text-button" />
            <p className="error">errr</p>
          </div>
          <div className="input-group">
            <p className="label">Password</p>
            <input placeholder="full Name" className="text-button" />
            <p className="error">errr</p>
          </div>

          <div className="input-group checkbox">
            <label className="label">accept roules</label>
            <input type="checkbox" placeholder="full Name" className="text-button" />
            <p className="error">errr</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
