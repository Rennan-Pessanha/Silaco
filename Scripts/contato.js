const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
  const formData = new FormData(form);
  e.preventDefault();
  let object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  let json = JSON.stringify(object);

  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (resposta) => {
      let json = await resposta.json();
      if (resposta.status == 200) {
        console.log(resposta)
      } else {
        console.log(resposta);
      }
    })
    .catch((erro) => {
      console.log(erro);
    })
    .then(()=>{
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
