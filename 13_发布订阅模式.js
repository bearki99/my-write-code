class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(name, callback) {
    if (!this.events[name]) {
      this.events[name] = [callback];
    } else {
      this.events[name].push(callback);
    }
  }
  off(name, callback) {
    let tasks = this.cache[name];
    if (tasks) {
      const index = tasks.findIndex((f) => f === callback);
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  }
  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      let tasks = this.cache[name].slice();
      for (let fn of tasks) {
        fn(...args);
      }
      if (once) {
        delete this.cache[name];
      }
    }
  }
}
