
//  get data
const getData = async (url) => {
    //   fetch the data
    let res = await url
    //   apply json to the data
    let data = await res.json()
    return data;
}



//   append the all data to body
const appendData = (data, main) => {

    //when the function run the body become empty
    main.innerText = ""
    // apply  for each function to the all data
    data.forEach(el => {

        // create a child div
        let div = document.createElement("div")

        // creating image tag
        let image = document.createElement("img")
        // set attribute to img tag
        image.setAttribute("src", el.strMealThumb)

        // creating a hrading tag for product namd
        let title = document.createElement("h4")
        // add the innertext to the title
        title.innerText = el.strMeal

        // ceating a paragraph tag for meal id
        let id = document.createElement("p")
        // add data to the id 
        id.innerText = el.idMeal

        // append data to child div
        div.append(image, title, id)

        // append data to main div
        main.append(div)

    });
}


export { getData, appendData }
