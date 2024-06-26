import { Client, Account, ID } from "appwrite";
import Conf from "../conf/Conf";

export class Authservice{
     client=new Client()
     account;

     constructor(){
        this.client.setEndpoint(Conf.appwriteUrl)
        this.client.setProject(Conf.appwriteProjectId)
        this.account=new Account(this.client)
     }

    async Signup ({email,password,name})   {
        try {
           const createAccount= await this.account.create(ID.unique(),email,password,name)
           this.Login({email,password})
        } catch (error) {
            throw error
        }
    }  

    async Login({email,password}){
        try {
            const loginUser=  await this.account.createEmailPasswordSession(email,password)
            return loginUser
        } catch (error) {
            console.log("login Error",error);
        }
    }
    async Logout(){
        try {
            const logoutUser=  await this.account.deleteSessions()
            return logoutUser
        } catch (error) {
            console.log("logout Error",error);
        }
    }
    async Getcurrentuser(){
        try {
            const Getcurrentuser=  await this.account.get()
            return Getcurrentuser
        } catch (error) {
            console.log("Getcurrentuser Error",error);
        }
    }


}

export const authservice= new Authservice()


