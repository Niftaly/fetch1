let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        response.json()
        .then(gelen_data=>{
            let data = `<tr>
            <th scope="col">#</th>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
          </tr>`
            for(let i = 0; i < gelen_data.length; i++){
                data += `<tr>
                <th scope="row">${gelen_data[i].userId}</th>
                <td>${gelen_data[i].id}</td>
                <td>${gelen_data[i].title}</td>
                <td>${gelen_data[i].body}</td>
              </tr>`
            }
            document.querySelector('table').innerHTML = data;
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
});
