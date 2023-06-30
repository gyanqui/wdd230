const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', function() {
    const chapterText = input.value.trim(); 

    if (chapterText !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.textContent = chapterText;
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', function() {
            li.remove();
    });

    input.focus();
    input.value = '';
    }
});