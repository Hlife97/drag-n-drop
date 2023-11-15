const row = document.querySelector('.row');
const items = row.querySelectorAll('.item');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart', () => {
    console.log('first')
})

fill.addEventListener('dragend', () => {
    console.log('second')
})

for (const item of items) {
    item.addEventListener('dragover', e => {
        e.preventDefault();
    })
    item.addEventListener('dragenter', e => {
        e.preventDefault();
        item.classList.add('hovered');
    })
    item.addEventListener('dragleave', e => {
        e.preventDefault();
        item.classList.remove('hovered');
    })
    item.addEventListener('drop', () => {
        item.className = 'item';
        item.append(fill);
    })
}
