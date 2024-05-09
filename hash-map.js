class HashMap {
  constructor() {
    this.map = new Array();
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
}

const map = new HashMap();

console.log(map.hash("John"));

console.log(map);
