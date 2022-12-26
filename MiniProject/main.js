document.body.onload = addElement;
/////////////////////Загружуемо піплов /////////////////////
users=[];

function addElement() {
    let usrs = document.getElementById('users');
    usrs.className='users'
    let btn = document.createElement('button');
    btn.innerText = 'Прочитати людей';
    btn.onclick=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
          //  .then(json => users)
            .then(usersList=> {
                for (const usr of usersList) {
                    let dv_usr=document.createElement('div')
                    dv_usr.innerText=`${usr.name}---\n`;
                    dv_usr.className='ppl';
                    let link_usr=document.createElement('a');
                     link_usr.innerText='Перейти';
                     link_usr.href='users-details.html?id='+usr.id;
                     dv_usr.append(link_usr)
                     usrs.append(dv_usr);
                }

            })
    }
    document.body.append(btn);
}

function ShowRowUser(pid){

}
