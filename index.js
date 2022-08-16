import axios from "axios";

function getData(n){
    
    (async () => {
        const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/" + n )
    
        const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + n)
    
        const arrayFind = posts.find((item) => item.id == n)

        
        console.log(users, ", " + "posts:", arrayFind)

    })();
};

export default getData;




