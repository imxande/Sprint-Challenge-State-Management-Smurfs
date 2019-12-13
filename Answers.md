1. What problem does the context API help solve?

- Context API allows us to share values through out our components without having to pass down props to every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are payloads of information that send data to the store.
- Reducers are there to manage the state in the application.
- The store contains our state in the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is the state all components have access to, while the Component state is the state that is local to specific  component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-  Redux Thunk allows us to make the reducer flow asynchronous and make API calls from our action creators. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

- So far I love Redux because it is predictable and answers the question I always have when I build a project. The first question I always ask my self when I build a react app is what component should have state and what component should I create just to render elements to the screen. Redux allows me to manage and contain state I will need for my components.   
