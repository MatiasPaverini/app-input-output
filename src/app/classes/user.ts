import { InjectFlags } from '@angular/core';

export class User {
    private _name:string;
    private _password:string;
    private _email:string;
    private _img;
    private _sex:string;
    private _birth:string;

    constructor() {

    }

    public get name() : string {
        return this._name;
    }

    public get password() : string {
        return this._password
    }

    public get email() : string {
        return this._email;
    }
 
    public get sex() : string {
        return this._sex;
    }
    
    public get birth() : string {
        return this._birth;
    }
    
    public get img() : string {
        return this._img;
    } 
    

    /**
     * name
     */
    public verifyUser(user:string, pass:string): boolean {
        try {
            this.validateUser(user);
            this.validatePassword(pass);
            return true;
        }
        catch(e) {
            return false;
        }
    }

    private validateUser(username:string) :boolean {
        let flag:boolean = false;
        if(username.length < 1) {
            throw new Error("Usuario inválido");
        }
        else {
            flag = true;
        }

        return flag;
    }

    private validatePassword(password:string) :boolean {
        let flag:boolean = false;
        if(password.length < 8) {
            throw new Error("Password inválida");
        }
        else {
            flag = true;
        }

        return flag;
    }
}
