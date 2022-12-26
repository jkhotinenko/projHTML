let url = new URL(location.href)
let id=url.searchParams.get('id');
console.log(id);

fetch ('https://jsonplaceholder.typicode.com/users/'+id )
     .then(responce=>responce.json())
      .then(usr=> {
          console.log(usr);
          let dv_usr=document.createElement('div');
          let pt=document.createElement('h2');
              pt.innerText=`Имя: ${usr.name}`;
              dv_usr.append(pt);
               pt=document.createElement('h3');
               pt.innerText=`Почта: ${usr.email}`;
               dv_usr.append(pt);

          pt=document.createElement('h3');
          pt.innerText=`Адреса: ${usr.address.city}  ${usr.address.street}   ${usr.address.suite}
           ZIP:${usr.address.zipcode}`;
          dv_usr.append(pt);

          pt=document.createElement('h3');
          pt.innerText=`Телефон: ${usr.phone}`;
          dv_usr.append(pt);

          pt=document.createElement('h3');
          pt.innerText=`Вебсайт: ${usr.website}`;
          dv_usr.append(pt);

          gp=document.createElement('button');
          gp.innerText='Геопозиция';
          gp.onclick=()=>{
             alert(`Геопозиция: ${usr.address.geo.lat},${usr.address.geo.lng}`);
          }
          dv_usr.append(gp);

          btn=document.createElement('button');
          btn.innerText=`Получить посты ${usr.name}`;
          //title body

          let dv_psts=document.createElement('div');
          dv_psts.className='posts';
          btn.onclick=()=>{
              console.log('click');
              fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
                  .then(response => response.json())
                  //  .then(json => users)
                  .then(posts=> {
                      for (const pst of posts) {
                          let dv_pst=document.createElement('div')
                          dv_pst.className='pst';
                          dv_pst.innerText=`${pst.title}\n`;
                          let link_pst=document.createElement('a');
                          link_pst.innerText='Перейти';
                          link_pst.href='post-details.html?id='+pst.id;
                          dv_pst.append(link_pst);
                          dv_psts.append(dv_pst);

                          }
                      })
          }




          dv_usr.append(btn);

          dv_usr.append(dv_psts);
          document.body.append(dv_usr);



      })