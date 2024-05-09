class HashMap {
  constructor() {
    this.map = {};
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
  set(key) {
    const index = this.hash(key);
    this.map[index] = key;
  }

  get(key) {
    const index = this.hash(key);
    return this.map[index];
  }

  has(key) {
    const index = this.hash(key);
    for (let i = 0; i < key.length; i++) {
      if (this.map[index] == key) return true;
    }
    return false;
  }
}

const map = new HashMap();

map.set("John");
map.set("Jess");
map.set("Miguel");
map.set("Amora");

console.log(map.get("John"));

console.log(map.has("Peter"));
console.log(map.has("Amora"));

console.log(map);
