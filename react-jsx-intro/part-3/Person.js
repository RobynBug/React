const Person = ({ index, name, age, hobbies }) => {
  const handleClick = () => {
    let hobbyInput = document.getElementById(`hobbie_input_${index}`);
    let hobby = hobbyInput.value.trim();

    if (hobby) {
      let hobbiesList = document.getElementById(`hobbies-${index}`);
      let listItem = document.createElement("li");
      listItem.textContent = hobby;
      hobbiesList.appendChild(listItem);
      hobbyInput.value = "";
    }
  };

  return (
    <div>
      <div>
        <p>
          <strong>Name:</strong> {name}
          <br />
          <strong>Age:</strong> {age}
          <br />
          <strong>Hobbies:</strong>
          <ul id={`hobbies-${index}`}>
          </ul>
          <br />
          Add Hobby: <input type="text" id={`hobbie_input_${index}`} />
          <br />
          <button type="button" onClick={handleClick}>
            Add a hobby
          </button>
        </p>
      </div>
    </div>
  );
};
