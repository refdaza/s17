const getUsers=()=>{

    fetch('http://localhost:9000/api/clientes')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
}

const forId = (id)=> {
    fetch(`http://localhost:9000/api/clientes/${id}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
}
getUsers()
forId("639cecf16b8a289a58d97a23")