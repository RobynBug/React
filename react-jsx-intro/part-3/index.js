const App = () => {
  const people = [
    { name: "Robyn Highsmith", age: `37`, hobbies: [] },
    { name: "Rachael Highsmith", age: `38`, hobbies: [] },
    { name: "Alexandra Highsmith", age: `34`, hobbies: [] },
  ];


  return (
    <div>
      {people.map((person, index) => (
          {'person.index': index},
        <section className="people people_list" key={index}>
          <Person
            name={person.name.substring(0, 6)}
            age={person.age}
            hobbies={person.hobbies}
            index ={index}
          />
         
        </section>
        
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
