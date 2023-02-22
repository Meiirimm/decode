let data = [
    {
        img: 'store1.webp',
        title: 'IPhone 14', 
        description: 'IPhone 14 128Gb black', 
        price: '$120.00',  
        isInStock: false
    },
    {
        img: 'store2.webp',
        title: 'Bag', 
        description: 'Bags for men and lady', 
        price: '$120.00',  
        isInStock: true
    }
    ,
    {
        img: 'store3.webp',
        title: 'Camera Canon', 
        description: '20x zoom, Black color EOS 2000', 
        price: '$320.00',  
        isInStock: false
    }
]


if (!JSON.parse(localStorage.getItem('item'))) { draw(data) }

if (JSON.parse(localStorage.getItem('item')).length) {
    data = JSON.parse(localStorage.getItem('item'))
    draw(data)
}

const deleteCard = (title) => {
    const index = data.findIndex(item => item.title === title);
    if (index !== -1) {
        data.splice(index, 1);
    }
    document.getElementById("list").innerHTML = ''
    draw(data)
}



function draw(data) {

    const row = document.getElementById('list')
    data.forEach(item => {
        let card = document.createElement('li')
        let image = document.createElement('img')
        let cardBody = document.createElement('div')
        let cardTitle = document.createElement('h4')
        let cardText = document.createElement('p')
        let price = document.createElement('p')
        let buttonGroup = document.createElement('div')
        let isInStock = document.createElement('button')
        let deleteButton = document.createElement('button')


        card.classList.add('card', 'col-md-3', 'col-sm-4', 'm-5', 'justify-content-center')
        image.classList.add('card-img-top')
        cardBody.classList.add('card-body', 'border-top')
        cardTitle.classList.add('card-title')
        cardText.classList.add('card-text')
        price.classList.add('price')
        buttonGroup.classList.add('btn-group', 'btn-group-sm')
        isInStock.classList.add('btn', 'btn-success')
        isInStock.textContent = 'Is in Stock'
        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Delete'
    
        image.src = item.img
        cardTitle.textContent = item.title
        cardText.textContent = item.description
        price.textContent = item.price
        

        buttonGroup.append(isInStock)
        buttonGroup.append(deleteButton)
        card.appendChild(image)
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(price);
        cardBody.appendChild(buttonGroup)
    

        card.appendChild(cardBody)
        row.appendChild(card)

        deleteButton.addEventListener('click', () => deleteCard(cardTitle.textContent))
        // deleteButton.addEventListener('click', function(){
        //     if(confirm('Вы уверены?')){
        //         card.remove()
        //     }
        // })

        
        if(item.isInStock === true){
            isInStock.addEventListener('click', function(){card.classList.toggle('border-success')})
        }
        
    });
    localStorage.setItem('item', JSON.stringify(data))
}