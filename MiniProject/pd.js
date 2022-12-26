
let url = new URL(location.href)
let id=url.searchParams.get('id');
console.log(id);
console.log('Test')
fetch ('https://jsonplaceholder.typicode.com/posts/'+id )
    .then(responce=>responce.json())
    .then(pst=> {
        console.log(pst);
        let dv_usr=document.createElement('div');
        let pt=document.createElement('h2');
        pt.innerText=`Тема: ${pst.title}`;
        dv_usr.append(pt);
        pt=document.createElement('h3');
        pt.innerText=`Описание: ${pst.body}`;
        dv_usr.append(pt);

        btn=document.createElement('button');
        btn.innerText=`Открыть коментарии`;
        //title body
        btn.onclick=()=>{
            console.log('click');
            fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
                .then(response => response.json())
                //  .then(json => users)
                .then(comms=> {
                    for (const cm of comms) {
                        let dv_m=document.createElement('div');
                        dv_m.className='main_comm';
                        let dv_cm=document.createElement('div');
                        dv_cm.className='comm';
                        dv_cm.innerText=`Коммент ${cm.name}  Написан: ${cm.email} \n`;
                        dv_usr.append(dv_cm);
                        let dv_cm_bd=document.createElement('div')
                        dv_cm_bd.innerText=`${cm.body}`;
                        dv_m.append(dv_cm);
                        dv_m.append(dv_cm_bd);
                        dv_usr.append(dv_m);
                    }
                })
        }




        dv_usr.append(btn);


        document.body.append(dv_usr);



    })