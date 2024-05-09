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
  set(key, value) {
    const index = this.hash(key);
    this.map[index] = value;
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

  length() {
    return Object.keys(this.map).length;
  }

  clear() {
    this.map = {};
  }

  keys() {
    return Object.keys(this.map);
  }

  values() {
    return Object.values(this.map);
  }

  entries() {
    return Object.entries(this.map);
  }
}

const map = new HashMap();

map.set("John", "John");
map.set("Jess", "Jess");
map.set("Miguel", "Miguel");
map.set("Amora", "Amora");

console.log(map.get("John"));

console.log(map.has("Peter"));
console.log(map.has("Amora"));

console.log(map.length());
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

class HashSet {
  constructor() {
    this.map = {};
  }

  setHash(key) {
    let setHashCode = 0;
    const setPrimeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      setHashCode = setPrimeNumber * setHashCode + key.charCodeAt(i);
    }
    return setHashCode;
  }

  setSet(key) {
    const index = this.setHash(key);
    this.map[index] = key;
  }
}

const setMap = new HashSet();

setMap.setSet("a");

console.log(setMap);
