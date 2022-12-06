var family= class{
    constructor(id,name,age){
        this.id=id
        this.name=name
        this.age=age
    } 
    det(){
        document.writeln("Your id:"+this.id+"<br>"+"Your name: "+this.name+"<br>"+"Your age:"+this.age)
    }  
 }
 var first=new family(prompt("what is your id?"),prompt("what is your name"),prompt("what is your age?"))
first.det()
