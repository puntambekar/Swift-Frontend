class Message{
    id?:string;
    name:string;
    email:string;
    message:string;

    constructor(name:string,email:string,message:string){
        this.name = name;
        this.email = email;
        this.message = message;
    }
}

export default Message;