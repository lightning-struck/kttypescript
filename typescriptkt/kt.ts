class User{
   static count:number;
   public username:string;
   readonly login:string;
   set log(login:string){
       console.log("Невозможно изменить логин!")
   }
   private password:string;
   private get pass(){
       return "*****"
   }
   private grade:number;
   set grd(grade:number){
       console.log("Неизвестное свойство!")
   }
   get grad(){
       return "Неизвестное свойство!"
   }
   show_info(rect:User){ 
       console.log(rect.username, rect.login)
   }

   eq(other:User): boolean { 
       return this.grade === other.grade; 
   }

   lt(other: User): boolean { 
       return this.grade < other.grade; 
   } 

   gt(other: User): boolean { 
       return this.grade > other.grade; 
   }

   constructor(_username:string, _login:string, _password:string, _grade:number){
       this.username = _username;
       this.login = _login;
       this.password = _password;
       this.grade = _grade;
       User.count ++
   }
}

class SuperUser extends User{
   role:string;
   set rol(role:string){
       console.log("Неизвестное свойство!")
   }
   get roll(){
       return "Неизвестное свойство!"
   }
   show_info(rect:SuperUser){ 
       console.log(rect.username, rect.login, rect.role)
   }
   constructor(_username:string, _login:string, _password:string, _role:string, _grade:number){
       super(_username, _login, _password, _grade,)
       User.count++
   }
}

const user1 = new User('Paul McCartney', 'paul', '1234', 3)
const user2 = new User('George Harrison', 'george', '5678', 2)
const user3 = new User('Richard Starkey', 'ringo', '8523', 3)
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin', 5)

// user1.show_info(new User('Paul McCartney', 'paul', '1234', 3))
// admin.show_info(new SuperUser('John Lennon', 'john', '0000', 'admin', 5))

User.count
SuperUser.count

console.log(Всего обычных пользователей: ${User.count})
console.log(Всего супер-пользователей: ${SuperUser.count})

// console.log( user1.lt(user2) )
// console.log( admin.gt(user3) )
// console.log( user1.eq(user3) )

user3.username = 'Ringo Star'
user1.password = 'Pa$$w0rd'

console.log(user3.username)
console.log(user2.password)
console.log(user2.login)

user2.login = 'geo'

console.log(user3.grade)
admin.grade = 10
 

 