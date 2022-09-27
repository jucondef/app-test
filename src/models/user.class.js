export class User{
    name= '';
    last_name = '';
    mail = '';
    status = false;

    constructor(name,last_name,mail,status){
        this.name = name;
        this.last_name = last_name;
        this.mail = mail;
        this.status = status;
    }
}