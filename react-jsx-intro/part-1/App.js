const App = () => {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Robyn" />
      </div>
    );
  }

  ReactDOM.render(<App />, document.getElementById('root'));