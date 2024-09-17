async function dataFromAPI() {
    const url = "https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
  
      const data = await res.json();
    //   console.log(data)
    //   const userId8 = data.some(user => user.id === "8")
    //   console.log(userId8)
    //   if(userId8){
    //   filtered = data.filter(user => user.id === "8") 
    //   console.log(filtered.map(user=> user.name)); 
    //   }
    const userId8 = data.find(user=>user.id==="8")
    if(userId8)
    console.log(userId8.name)
    else
    console.log("Id not found")
    } catch (error) {
      console.error(error.message);
    }
  }
  dataFromAPI()