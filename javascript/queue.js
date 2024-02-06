class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.items[this.front];
  }
  isEmpty() {
    return this.rear - this.front == 0;
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    return this.items;
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
console.log(queue.print());

console.log(queue.dequeue());
console.log(queue.peek());

// // Create a Queue class
// class Queue {
//     constructor() {
//       this.items = [];
//     }
  
//     // Add element to the queue
//     enqueue(element) {
//       this.items.push(element);
//     }
  
//     // Remove and return the front element from the queue
//     dequeue() {
//       if (this.isEmpty()) {
//         return "Queue is empty";
//       }
//       return this.items.shift();
//     }
  
//     // Return the front element without removing it
//     front() {
//       if (this.isEmpty()) {
//         return "Queue is empty";
//       }
//       return this.items[0];
//     }
  
//     // Check if the queue is empty
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     // Return the size of the queue
//     size() {
//       return this.items.length;
//     }
  
//     // Print the elements of the queue
//     print() {
//       console.log(this.items.join(' '));
//     }
//   }
  
//   // Example usage
//   const myQueue = new Queue();
  
//   myQueue.enqueue(10);
//   myQueue.enqueue(20);
//   myQueue.enqueue(30);
  
//   console.log("Queue Front:", myQueue.front()); // Output: 10
//   console.log("Queue Size:", myQueue.size());   // Output: 3
  
//   myQueue.dequeue();
//   console.log("Queue Front after dequeue:", myQueue.front()); // Output: 20
  
//   myQueue.print(); // Output: 20 30
  