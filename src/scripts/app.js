
const $form = document.getElementById('form');
const notes = []
$form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target[0].value 
    const description = e.target[1].value
    const done = e.target[2].checked
    const data = { title, description, done }
    const newNote = addNote (data)
    notes.push(newNote)
    console.log(addNote (data))
    console.log(data)
    console.log(notes)
})

function addNote (data){
    return{
        id: new Date().getTime(),
        title: data.title,
        description: data.description,
        done: data.done
    }
}
