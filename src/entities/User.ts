import { uuid } from "uuidv4";

export class User{
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string){//Omit fala pro construtor que vai receber todos os dados de user menos o id, regra de db
        Object.assign(this, props);//pega todas as props e passa pra obj user
        
        if (!id){
            this.id = uuid();
        }
    }
}