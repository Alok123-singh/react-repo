import conf from '../config/config.js'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl) // API Endpoint
                .setProject(conf.appwriteProjectId) // Project ID
        
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method to login
                this.login(email,password);
                return (true);
            }
            else{
                return (false);
            }
            
        } catch (error) {
            console.log("Appwrite error :: createAccount :: ",error);
            return (false);
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
            
        } catch (error) {
            console.log('Appwrite error :: login :: ',error);
            return (false);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
            
        } catch (error) {
            console.log("Appwrite error :: getCurrentUser :: ",error);
            return (false);
        }

        return (null);
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return (true);
        } catch (error) {
            console.log("Appwrite error :: logout :: ", error);
            return (false);
        }
    }

}

const authService = new AuthService();

export default authService;
