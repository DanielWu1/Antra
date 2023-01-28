const Api = (() =>{
    const baseUrl = 'https://randomuser.me/api/';
    const getUser = () =>
      fetch(baseUrl).then((response) =>
        response.json()
      )
    return{
      getUser
    }
})();

const View = (() => {
    const domstr = {
      Userlist: ".container",
      textContainer: '.text_container',
      hide: '.hide',
      deletebtn: '.deletebtn',
      reload : '.reload'
    };
  
    const render = (ele, tmp) => {
      ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
      // console.log(arr)
      // console.log(arr[0].Birthday)
      let tmp = "";
      arr.forEach((ele) => {
        // console.log(ele)
        // console.log(Object.keys(ele))
        tmp += `
            <div class="cardContainer" id=${ele.id}>
                <img src="${ele.img}">
                <div class="text_container">
                    <p>name: ${ele.name}</p>
                    <p>email: ${ele.email}</p>
                    <p>phone: ${ele.phone}</p>
                    <p class="hide" id=birthDay_${ele.id}>Birthday: ${ele.Birthday}</p>
                    <button class="deletebtn" id=button_${ele.id}>Show Dob</button>
                </div>   
            </div>
        `;
      });
      return tmp;
    };
  
    return {
      domstr,
      render,
      createTmp,
    };
})();

const Model = ((api, view) => {
    const {getUser} = api;
    const generateRandomId = () => {
      const resouse ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
      const length = 12;
      let id = "";
      for (let i = 0; i <= length; i++) {
        const index = Math.floor(Math.random() * resouse.length);
        id += resouse[index];
      }
      return id;
    }
      
  
    class State {
      #userList = [];
  
      get userList() {
        return this.#userList;
      }
  
      set userList(newUserList) {
        this.#userList = newUserList;
        const User_container = document.querySelector(view.domstr.Userlist);
        const tmp = view.createTmp(this.#userList);
        // console.log(tmp)
        view.render(User_container, tmp);
      }
    }
  
    return {
      getUser,
      generateRandomId,
      State
    };
})(Api, View);

const Controller = ((model, view) => {
  const state = new model.State();
  
  const deleteTodo = () => {
    const User_container = document.querySelector(view.domstr.Userlist);
    User_container.addEventListener('click', event => {
      if (event.target.className === 'deletebtn') {
        let ID = event.target.id.split('_')[1]
        if(event.target.tagName === 'BUTTON'){
          document.getElementById('birthDay_' + ID).className = 'deletebtn';
          event.target.className = "hide";
        }
        else{
          document.getElementById('button_' + ID).className = 'deletebtn';
          event.target.className = "hide";
        }
      }
    });
  }
  const reloadButton = () =>{
    const reload_Box = document.querySelector(view.domstr.reload);
    reload_Box.addEventListener('click', event =>{
      init();
    }); 
  };
  
  const init = async() => {
    let userarr = [];
    for(let i = 0; i < 20; i++){
      let eachUser = {};
      await model.getUser().then((user) =>{
        // console.log(user.results);
        eachUser.id = model.generateRandomId();
        eachUser.img = user.results[0].picture.large;
        eachUser.name = user.results[0].name.title + ' ' + user.results[0].name.first;
        eachUser.email = user.results[0].email;
        eachUser.phone = user.results[0].phone;
        eachUser.Birthday = user.results[0].dob.date;
      });
      userarr.push(eachUser);
    }
    state.userList = userarr;
  };
  
  const bootstrap = () => {
    init();
    deleteTodo();
    reloadButton();
  }

  return {
    bootstrap,
  };
})(Model, View);
  
Controller.bootstrap();