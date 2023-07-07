const Search_Giph = document.querySelector("#Search_Giph");

Search_Giph.addEventListener("click", function () {
  const Name_Giphy = document.querySelector("#Name_Giphy");
  let Name_Giphy_Value = Name_Giphy.value;
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${Name_Giphy_Value}&api_key=7v17J92D7FHojehOmcWnE904dMdQeKBM`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.data.forEach((image) => {
        let OutputImage = document.querySelector(".image");
        let OutputImage_Value = OutputImage.innerHTML;
        OutputImage.innerHTML = `${OutputImage_Value} <img src="${image.images.downsized_medium.url}" alt="" class="Image_GIF">`;
      });
    });
});

const Remove_Giph = document.querySelector("#Remove_Giph");

Remove_Giph.addEventListener("click", function () {
  let OutputImage = document.querySelector(".image");
  OutputImage.innerHTML = "";
});
