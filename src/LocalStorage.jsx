export const salon=[ {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"}];

    export const mart = [
        {
          "id": 1,
          
          "email": "employee1@example.com",
          "password": "123",
        }
          ]

          export  const setLocalStorage=()=>{
            localStorage.setItem('mart', JSON.stringify(mart));
            localStorage.setItem('salon', JSON.stringify(salon));
        }
    
        export  const getLocalStorage=()=>{
           const salon= JSON.parse(localStorage.getItem('salon'))
           const mart= JSON.parse(localStorage.getItem('mart'))
    
          return{salon,mart}
           
            
        }