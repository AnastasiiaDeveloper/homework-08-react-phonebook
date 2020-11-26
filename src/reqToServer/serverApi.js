import axios from "axios";
import {} from "./../toolkitRedux/contacts-selectors";
export class getApiPhone {
  async getList(authKey) {
    try {
      return await axios.get(
        "https://goit-phonebook-api.herokuapp.com/contacts",
        {
          headers: {
            "content-type": "application/json",
            Authorization: authKey,
          },
        }
      );
    } catch {
      console.log("для загрузки списка нужно авторизоваться");
    }
  }
  async deletCont(id, authKey) {
    try {
      return await axios.delete(
        `https://goit-phonebook-api.herokuapp.com/contacts/${id}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: authKey,
          },
        }
      );
    } catch {
      console.log("ошибка удаления");
    }
  }
  async addPost(name, num, authKey) {
    try {
      return await axios.post(
        `https://goit-phonebook-api.herokuapp.com/contacts`,
        {
          name: name,
          number: num,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authKey,
          },
        }
      );
    } catch {
      console.log("new post add err");
    }
  }
  async signUp(name, pass, email) {
    try {
      return await axios.post(
        `https://goit-phonebook-api.herokuapp.com/users/signup`,
        {
          name: name,
          email: email,
          password: pass,
        }
      );
    } catch {
      console.log(`пользователь с логином ${name} уже есть в базе `);
    }
  }
  async logIn(email, password) {
    try {
      return await axios.post(
        `https://goit-phonebook-api.herokuapp.com/users/login`,
        {
          email: email,
          password: password,
        }
      );
    } catch {
      console.log("новый юзер небыл auth");
    }
  }
}
