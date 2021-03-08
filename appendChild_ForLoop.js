const listItem = document.getElementById('listItem')
const allDivision = ['Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Khulna', 'Mymansingh']

for(let division of allDivision ) {
        let newListItem = document.createElement('li')
        newListItem.textContent = division

        // document.write(division + '<br>')

        listItem.appendChild(newListItem)
}