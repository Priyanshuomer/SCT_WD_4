let list = [];
display();


function  additems(){
    let t = document.querySelector(".task-js").value;
    let dates = document.querySelector(".time-js").value;
     if( t === '' || dates === '')
     {
        return ;
     }
    const op = {
        task:t,
        time:dates
    };
    list.push(op);
    document.querySelector(".task-js").value = ``;
    document.querySelector(".time-js").value = ``;
    display();
}



function deleteItems(value){
    console.log(value);
     list.splice(value,1);
    display();
}

function display(){
    let listItemsHTML = ``;

    for(let i=0;i<list.length;i++)
    {
        listItemsHTML+=`
        <div class= "individual-item">
        <div class="individual-task">${list[i].task}</div>
          <div class="individual-time">${list[i].time}</div>
          <button class="delete-button" onclick="
            deleteItems(${i});
          ">DELETE</button>
        </div>
        `;
    }
    
    document.querySelector(".show-items").innerHTML = listItemsHTML;
}
 
