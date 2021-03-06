import { observable, action } from 'mobx';

class LoginForm {
    @observable username;
    @observable password;

    @action
    usernameAdd = (username) => {
        this.username = username;
    }

    @action
    passwordAdd = (password) => {
        this.password = password;
    }
}

export const loginForm = new LoginForm();