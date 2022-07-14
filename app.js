fetch("https://picsum.photos/v2/list")
   .then((data) => {
      return data.json();
   })
   .then((completeData) => {
      console.log(completeData);
      let data1 = "";
      completeData.map((el) => {
         data1 += `<div class="cards">
            <img
               src=${el.download_url}
               alt="img"
               class="images"
            />
         </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
   })
   .catch((err) => {
      console.log(err);
   });
