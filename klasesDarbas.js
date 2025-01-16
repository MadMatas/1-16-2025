// function getUsers1() {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(data => console.log(data));
// }

// getUsers1();



async function getInfo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
    
}


async function getCompleted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data.filter(item => item.completed);
}


async function getTitles() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data.map(item => item.title);
}

async function gettitlesTogether() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data.map(item => item.title).join(', ');
}

async function gettitlesCompleted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data.filter(item => item.completed).map(item => item.title);
    
}

(async ()=>{
    const Info = await getInfo();
    console.log(Info);
    console.log('---------------------------------------------------------------------------------------------------------');
    const Completed = await getCompleted();
    console.log(Completed)
    console.log('---------------------------------------------------------------------------------------------------------');
    const ComplTitles = await gettitlesCompleted();
    console.log(ComplTitles)
    console.log('---------------------------------------------------------------------------------------------------------');
    const titles = await gettitlesTogether();
    console.log(titles);
    console.log('---------------------------------------------------------------------------------------------------------');
    
})();
