import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { Provider } from "next-auth/providers/index"
import connectMongo from "../../../../db/db"
import Admin from "../../../../db/models/adminModel"
import Credentials from "next-auth/providers/credentials"




export const authOptions = {
  // Configure one or more authentication provids
  providers: [
    
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      id : "credentials",
      name : "credentials",
      type : "credentials",
      credentials : {
        email : { label : "Email", type : "text", placeholder : "test : g"},
        password : {label : "Password", type : "password", placeholder : "test : g"}
      },
      async authorize(credentials: { email: any; password: any }, req: any){
        await connectMongo();
        if(!credentials){
          return null;
        }
        const email = credentials.email
        const password = credentials.password
        const admin = await Admin.findOne({email})
        if(!admin){
          const obj = {email : email , password : password};
          const newAdmin = new Admin(obj);
          let adminDb = await newAdmin.save();
          console.log(adminDb)
          return{
            id : adminDb._id,
            email : adminDb.email
          }          
        }else{         
           if( admin.password !== password){
            return null
           }
        }  
        return {
          id: admin._id,
          email : admin.email
         }    
      }
    })
    // ...add more providers here
  ] as Provider[],
  secret : process.env.NEXTAUTH_SECRET,
  session : {
    strategy : "jwt",
    maxAge :  30*24*60*60,
  },
  jwt : {
    encryption : true
  },
  
}

export default NextAuth(authOptions)