fetch("https://www.reddit.com/r/aww/.json") 
.then(response => response.json()) 
.then(data => {
    
   for (let i = 0; i < data.data.children.length; i++){
    //   console.log(data.data.children[i])

    const title = data.data.children[i].data.title;
    const photo = data.data.children[i].data.thumbnail;
    const link = data.data.children[i].data.url;
    const div = document.createElement("div")
    const span = document.createElement("span")
    const newLink = document.createElement("a")
    const image = document.createElement("img")
    const displayTitle = document.createElement("h3")

    displayTitle.innerText = `${title}`
    newLink.innerHTML= `${link}`
    image.setAttribute("src" , `${photo}`)
    newLink.setAttribute("href" , `${link}`)
    
    

    document.body.append(div)
    div.append(displayTitle)
    
    div.append(image)
    div.append(span)
    span.append(newLink)
    

   }
   })