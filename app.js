//1
// function extractNumbers(str) {
//     const regex = /\d+/g
//     const numbersArray = str.match(regex)
//     const numbers = numbersArray.map(numberStr => parseInt(numberStr))
//     return numbers
// }
// console.log(extractNumbers("a1fg5hj6"))
//
//
//
// //2
// function delayedFibonacci(n, a = 0, b = 1) {
//     if (n <= 0) {
//         return;
//     }
//
//     console.log(a)
//     setTimeout(() => {
//         delayedFibonacci(n - 1, b, a + b)
//     }, 1000)
// }
//
// delayedFibonacci(12)
//

//3
// async function fetchProductTitles() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')
//         const data = await response.json()
//
//         if (!response.ok) {
//             throw new Error('Ошибка загрузки данных')
//         }
//
//
//         data.forEach(product => console.log(product.title))
//     } catch (error) {
//         console.error('Произошла ошибка:', error.message)
//     }
// }
//
//
// fetchProductTitles()

// 4

// document.getElementById('colorButtons').addEventListener('click', function(event) {
//     if (event.target.classList.contains('colorButton')) {
//         const color = event.target.dataset.color
//         document.body.style.backgroundColor = color
//     }
// })


//5
// var block = document.getElementById('block')
// var toggleButton = document.getElementById('toggleButton')
//
//
// toggleButton.addEventListener('click', function() {
//
//     if (block.style.display === 'none') {
//         block.style.display = 'block';
//     } else {
//         block.style.display = 'none'
//     }
// })


//6
// const counterElement = document.getElementById('counter')
// let count = 0
//
// function incrementCounter() {
//     counterElement.textContent = count
//     count++
//     if (count > 100) {
//         clearInterval(intervalID)
//     }
// }
// const intervalID = setInterval(incrementCounter, 1)


//7
document.getElementById('getDataButton').addEventListener('click', async function() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
    }
})



