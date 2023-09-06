import "./App.css";

let name = "Aviral";
function App() {
  return (
    <>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" href="/">TextUtils</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="join">
  <div>
    <div>
      <input className="input input-bordered join-item" placeholder="Search"/>
    </div>
  </div>
  <div className="indicator">
    <button className="btn join-item">Search</button>
  </div>
</div>
</div>
    </>
  );
}

export default App;
