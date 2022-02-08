import { getEmployees } from "./database.js"

import { getOrders } from "./database.js"

const employees = getEmployees()

const orderVar = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    
                        let i = 0
                        for (const order of orderVar){
                            if (order.employeeId === employee.id){
                                i++
                            }
                        }
                        
                    
                    window.alert(`${employee.name} sold ${i} products`)
                }
            }
        }
    }
    )

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

