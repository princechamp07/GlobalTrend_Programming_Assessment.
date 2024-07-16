//Implement a simple HashMap class with put, get, and remove methods.

class Hashmap{
    constructor(){
        this.map = {}
    }

    put(key,value){
        this.map[key] = value
    }

    get(key){
        return this.map.hasOwnProperty(key) ? this.map[key]:undefined
    }

    remove(key){
        if(this.map.hasOwnProperty(key)){
            delete this.map[key]
        }
    }
}

let hashMap = new Hashmap()

hashMap.put("name","vishal")
console.log(hashMap.get("name"));
hashMap.remove("name")
console.log(hashMap.get("name"));