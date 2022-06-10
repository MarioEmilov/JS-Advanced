function solve() {

    // get elements

    let addBtn = document.querySelector('#add');

    let taskEl = document.getElementById('task');
    let descriptionEl = document.getElementById('description');
    let dateEl = document.getElementById('date');
    let sections = document.querySelectorAll('section');

    addBtn.addEventListener('click', addArticle)

    function addArticle(e) {
        e.preventDefault();

        if (!taskEl.value ||
            !descriptionEl.value
            || !dateEl.value) {
            // taskEl.value = '';
            // descriptionEl.value = '';
            // dateEl.value = '';
            return;
        }

        let currSection = document.querySelectorAll('section div')[3];

        let currArticle = document.createElement('article');

        //create elements
        let currh3 = document.createElement('h3');
        let pDescription = document.createElement('p');
        let pDate = document.createElement('p');

        //take values
        currh3.textContent = taskEl.value;
        pDescription.textContent = `Description: ${descriptionEl.value}`;
        pDate.textContent = `Due Date: ${dateEl.value}`;

        //put them in to parent elements
        currArticle.appendChild(currh3);
        currArticle.appendChild(pDescription);
        currArticle.appendChild(pDate);

        currSection.appendChild(currArticle);
        //buttons and div
        let divWithButtons = document.createElement('div');
        divWithButtons.setAttribute('class', 'flex');

        let startBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        startBtn.setAttribute('class', 'green');
        deleteBtn.setAttribute('class', 'red');

        startBtn.textContent = 'Start';
        deleteBtn.textContent = 'Delete';

        //add some functionality to buttons
        startBtn.addEventListener('click', goInprogress);
        deleteBtn.addEventListener('click', goInprogress);


        divWithButtons.appendChild(startBtn);
        divWithButtons.appendChild(deleteBtn);

        currArticle.appendChild(divWithButtons);

        taskEl.value = '';
        descriptionEl.value = '';
        dateEl.value = '';

    }

    function goInprogress(e) {

        let currBtn = e.target;

        if (currBtn.textContent == 'Start') {

            let currDiv = document.getElementById('in-progress');


            currBtn.textContent = 'Delete';
            currBtn.setAttribute('class', 'red');

            currBtn.nextElementSibling.textContent = 'Finish';
            currBtn.nextElementSibling.setAttribute('class', 'orange');

            let mainEl = e.currentTarget.parentNode.parentNode;
            return currDiv.appendChild(mainEl);

        } else if (currBtn.textContent == 'Delete') {
            return currBtn.parentNode.parentNode.remove();
        } else {

            let finalEl = document.querySelectorAll('section')[3].children[1];

            let mainEl = e.currentTarget.parentNode.parentNode;
            mainEl.lastElementChild.remove();

            console.log(mainEl.children);

            return finalEl.appendChild(mainEl);
        }
    }
}