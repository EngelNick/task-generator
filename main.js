function subscribeToInput() {
    document.getElementById('input').onkeyup = () => createTask();
}

function createTask() {
    const newTaskName = document.getElementById("input").value.split(' ').join('_').toLowerCase();
    const replaceParenthesesAndSlashes = newTaskName.replace(/[()\s]/g, '').replace(/[/\s]/g, '_');
    document.getElementById('result').innerHTML = replaceParenthesesAndSlashes ? replaceParenthesesAndSlashes : 'result';
}
