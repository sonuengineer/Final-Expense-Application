 
  // Adding Expense
  
  function addnewExpense(event) {
    event.preventDefault();
    let expenseDetails = {
      amount: document.getElementById("amount").value,
      description: document.getElementById("des").value,
      category: document.getElementById("cat").value,
    };
  
    axios
      .post("http://localhost:3000/expense/addexpense", expenseDetails)
      .then((response) => {
        alert("Expense Added");
      })
      .catch((err) => {
        console.log(err);
      });
    showNewUseronScreen(expenseDetails);
  }
  
  function showNewUseronScreen(expenseDetails) {
    const d = document.getElementById("ul");
    const li = `<li id="${expenseDetails.amount}" class="li"><div class="lidiv"> ${expenseDetails.amount},${expenseDetails.description},${expenseDetails.category}</div>
       <button onclick = editUser('${expenseDetails.amount}','${expenseDetails.description}','${expenseDetails.category}') class="editbtn"> Edit </button> 
       <button onclick = deleteExpense('${expenseDetails.amount}') class="deletebtn"> Delete </button> 
        </li>`;
    d.innerHTML = d.innerHTML + li;
  }
  
  //  Fetching all the expenses of user from DB
  
  window.addEventListener("DOMContentLoaded", (event) => {

    event.preventDefault();
    axios
      .get("http://localhost:3000/expense/getexpenses")
      .then((response) => {
        console.log("sonu")
        
        const d = document.getElementById("ul");
        for (let i = 0; i < response.data.expenses.length; i++) {
          const li = `<li id="${response.data.expenses[i].amount}" class="li"> <div class="lidiv">${response.data.expenses[i].amount},${response.data.expenses[i].description},${response.data.expenses[i].category}</div>
               
              <button onclick = deleteExpense('${response.data.expenses[i].id}') class="deletebtn"> Delete </button> 
               </li>`;
          d.innerHTML = d.innerHTML + li;
        }
      });
  });
  
  // Deleting the expense
  
  function deleteExpense(expenseId) {
   
    axios
      .delete(`http://localhost:3000/expense/deleteexpense/${expenseId}`, {
       
      })
      .then((response) => {
        console.log(response);
       
        
      })
      .catch((err) => console.log(err));
  }
  
  