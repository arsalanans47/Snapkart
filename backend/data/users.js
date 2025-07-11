
import bcrypt from "bcryptjs";

const users = [
  { 
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456",10),
    isAdmin: true,
    },
  { 
    name: "arsalan",
    email: "arsalan@email.com",
    password: bcrypt.hashSync("123456",10),
    isAdmin: false,
    },
  { 
    name: "iqra",
    email: "iqra@email.com",
    password: bcrypt.hashSync("123456",10),
    isAdmin: false,
    },
  
];

export default users;