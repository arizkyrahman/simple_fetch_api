let id = (id) => document.getElementById(id);

const cat_btn = id('cat_btn'),
dog_btn = id('dog_btn'),
cat_result = id('cat_result'),
dog_result = id('dog_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src="${data.file}"/>`
        })
}

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog()
            } else {
            dog_result.innerHTML = `<img src="${data.url}"/>`
            }
        })
}