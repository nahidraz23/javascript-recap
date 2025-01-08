
(function() {
    const user = 'Raz';
    console.log(user);
    
    const hello = () => console.log('Hello from IIFE');
    hello();
})();

(function(name){
    console.log('Hello ' + name);
})('Zaman');

(function hello() {
    console.log('Hello');
})();