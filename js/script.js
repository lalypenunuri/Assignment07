// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
let id = document.getElementById('id').value
let name = document.getElementById('name').value
let extension = document.getElementById('extension').value
let email = document.getElementById('email').value
let department = document.getElementById('department').value

    console.log(id, name, extension, email, department)
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
let row = table.insertRow()
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
let cellID = row.insertCell()
let cellName = row.insertCell()
let cellExt = row.insertCell()
let cellEmail = row.insertCell()
let cellDept = row.insertCell()
let cellDelete = row.insertCell()
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
cellID.appendChild(document.createTextNode(id))
cellName.appendChild(document.createTextNode(name))
cellExt.appendChild(document.createTextNode(extension))
cellEmail.appendChild(document.createTextNode(email))
cellDept.appendChild(document.createTextNode(department))
    // CREATE THE DELETE BUTTON
let deleteBtn = document.createElement('button')
deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
deleteBtn.appendChild(document.createTextNode('X'))
cellDelete.appendChild(deleteBtn)
    // RESET THE FORM
form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
document.getElementById('id').value
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
count++
document.getElementById('empCount').value = count
})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (confirm('Are you sure you want to delete this employee?')) {
        table.deleteRow(e.target.parentElement.parentElement.rowIndex)
        count--
        document.getElementById('empCount').value = count
    }
})
