function getRandomActivity() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
     .then(response => response.json())
     .then(data => {
        const someActivity = document.getElementById("activity")
        someActivity.textContent = data.title;
     })
     .catch(error => {
        console.error("К сожалению, произошла ошибка", error)  
      })
}
