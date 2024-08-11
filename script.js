document.addEventListener('DOMContentLoaded', function() {
    const addNoteButton = document.getElementById('addNote');
    const noteInput = document.getElementById('noteInput');
    const notesContainer = document.getElementById('notesContainer');

    addNoteButton.addEventListener('click', function() {
        const noteText = noteInput.value.trim();

        if (noteText === '') {
            alert('Please enter a note');
            return;
        }

        const noteElement = document.createElement('div');
        noteElement.classList.add('note');

        const noteContent = document.createElement('p');
        noteContent.textContent = noteText;
        noteElement.appendChild(noteContent);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '×';
        deleteButton.addEventListener('click', function() {
            notesContainer.removeChild(noteElement);
        });
        noteElement.appendChild(deleteButton);

        notesContainer.appendChild(noteElement);

        // Clear the input
        noteInput.value = '';
    });
});
