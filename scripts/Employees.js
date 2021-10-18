import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
const orders = getOrders() 
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.id.startsWith("employee--")){
            const [,employeeId] = clickedItem.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)){
        
                    const employeeOrders = orders.filter(
                        (order) => {
                            if (order.employeeId === employee.id)
                            return true
                        }
                    
                    )

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products.`)
                }
            }

        }
    }

)


const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

