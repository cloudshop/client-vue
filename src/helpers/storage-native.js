function dumpLocalStorageToJSON() {
    d = {};
    for(i = 0; i < localStorage.length; i++)
      d[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
    return JSON.stringify(d);
}