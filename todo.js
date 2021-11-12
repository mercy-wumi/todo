let input = prompt('what would you like to do?');
const todos = ['write code daily', 'bake weekly'];
while(input !== 'quit' && input !== 'q'){
  if(input === 'list') {
    console.log('*******************')
    for(let i = 0; i < todos.length; i++){
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('*****************')
  }else if (input === 'new'){
    const newTodo = prompt('What is the new todo?');
    todos.push(newTodo);
    console.log(`${newTodo} is added to the list`)
  } else if (input === 'delete'){
    const index = parseInt(prompt('Enter an index to delete'));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, it is deleted ${deleted[0]}`);
    } else {
      console.log('Unknown index')
    }
  }
  input = prompt('what would you like to do?')
}
console.log('Ok, Go ahead and QUIT the App!')