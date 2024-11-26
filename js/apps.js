/*
load items
select items
return selected items
*/

class MenuForm{
    constructor(){
        //access dom elements
        this.person = document.getElementById('person').value
        this.meatRow = document.getElementById('meatRow')
        this.sideRow = document.getElementById('sideRow')
        this.drinkRow = document.getElementById('drinkRow')
        this.dessertRow = document.getElementById('dessertRow')
        this.foodList = document.getElementById('foodList')


        //create array of food items
        this.menu = [
            {
            id: 1,
            type: 'meat',
            item: 'fried turkey',
            imgUrl: 'friedturkey.jpeg',
            isChecked: false,
            madeBy: 'Josh'
            },
            {
            id: 2,
            type: 'meat',
            item: 'oven turkey',
            imgUrl: 'oventurkey.jpeg',
            isChecked: false,
            madeBy: 'Josh'
            },
            {
                id: 3,
                type: 'meat',
                item: 'ham',
                imgUrl: 'ham.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id: 4,
                type: 'meat',
                item: 'ribs',
                imgUrl: 'ribs.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:5,
                type: 'sides',
                item: 'dressing',
                imgUrl: 'dressing.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:6,
                type: 'sides',
                item: 'stuffing',
                imgUrl: 'stuffing.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:7,
                type: 'sides',
                item: 'mashed potatoes',
                imgUrl: 'mashed-potatoes.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:8,
                type: 'sides',
                item: 'green beans',
                imgUrl: 'green-beans.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:9,
                type: 'sides',
                item: 'yams',
                imgUrl: 'yams.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:10,
                type: 'sides',
                item: 'corn bread',
                imgUrl: 'corn-bread.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:11,
                type: 'sides',
                item: 'mac and cheese',
                imgUrl: 'mac-cheese.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:12,
                type: 'sides',
                item: 'corn',
                imgUrl: 'corn.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:13,
                type: 'desserts',
                item: 'pound cake',
                imgUrl: 'pound-cake.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:14,
                type: 'desserts',
                item: 'sweet potatoe pie',
                imgUrl: 'spp.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:15,
                type: 'desserts',
                item: 'apple pie',
                imgUrl: 'apple-pie.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:16,
                type: 'desserts',
                item: 'peacan pie',
                imgUrl: 'peacan-pie.jpeg',
                isChecked: false,
                madeBy: 'Josh'
            },
            {
                id:17,
                type: 'drinks',
                item: 'root beer',
                imgUrl: 'root-beer.jpeg',
                isChecked: false
                
            },
            {
                id:18,
                type: 'drinks',
                item: 'sweet tea',
                imgUrl: 's-tea.jpeg',
                isChecked: false
                
            },
            {
                id:19,
                type: 'drinks',
                item: 'lemonaid',
                imgUrl: 'lemonaid.jpeg',
                isChecked: false
                
            },
            {
                id:20,
                type: 'drinks',
                item: 'water',
                imgUrl: 'water.jpeg',
                isChecked: false
                
            }
        ]


        this.plate = {
            person: '',
            meat: [],
            sides: [],
            desserts:[],
            drinks: ''
        }


    }

    init(){
        this.buildFigures(this.menu)
    }


    loadItems(el, child){
        el.appendChild(child)
    }

    buildFigures(arr){
        arr.forEach(obj => {
            //for each  object build figure
            const column = document.createElement('div')
            column.classList.add('col')

            column.innerHTML = `
                    <div class="figure-div" data-isChecked=${obj.isChecked}>
                    <figure class="figure item-figure">
                        <img src="https://via.placeholder.com/200x200"alt="placeholder img" class="img-fluid image figure-img" />
                        <figcaption class="figure-caption food-caption"> ${
                            obj.hasOwnProperty('madeBy') ? obj.madeBy : ''
                        } </figcaption>
                    </figure>
                    <h3 class="food-heading"> ${obj.item} </h3>
                    <div class="form-check">
                        <input type="checkbox" name="${obj.type}" id="${obj.type}-${obj.id}" value="${obj.item}" class="form-check-input">
                        <label for="${obj.type}-${obj.id} " class="text-capitalize form-check-label">${obj.item} </label>
                    </div>
                </div>
            `

            

            switch(obj.type){
                case 'meat':
                    this.loadItems(this.meatRow, column)
                    break
                case 'sides':
                    this.loadItems(this.sideRow, column)
                    break
                case 'desserts':
                    this.loadItems(this.dessertRow, column)
                    break
                case 'drinks':
                    this.loadItems(this.drinkRow, column)
                    break
                default:
                    return 'error'
            }


        })
    }


    buildPlate() {
        const person =  document.getElementById('person').value
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        // const foodItems = document.querySelectorAll('.figure-div')
        

        checkboxes.forEach(checkbox => {

            const name = checkbox.name
            const value = checkbox.value
            if (checkbox.checked) {
                // console.log(checkbox.value)
                // console.log(name, value)
                this.plate = {
                    ...this.plate,
                    person,
                    [name]: [...this.plate[name],value]
                    
                }

                Object.freeze(this.plate)

                this.menu.forEach(item => {
                    if (checkbox.value == item.item) {
                        item.isChecked = checkbox.checked
                    }
                    
                })
            }
        })
        // console.log(this.plate)
        const personPlate = document.getElementById('personPlate')
        personPlate.innerText = `${this.plate.person}'s `

        this.makeReceipt(this.menu)
    }

    makeReceipt(arr) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].isChecked) {
                const listItem = document.createElement('li')
                listItem.classList.add('list-group-item')
                listItem.innerText = arr[i].item
    
                this.foodList.appendChild(listItem)
    
            }

        }

    }

}

const submitBtn = document.getElementById('submitBtn')


const action = new MenuForm() 
action.init()

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    // console.log('click')
    action.buildPlate()
    submitBtn.setAttribute('disabled', true)
})


// let obj = {
//     a: 1, 
//     b: 2, 
//     c: 3
// }

// for (prop in obj) {
//     console.log(obj[prop] * 3)
// }