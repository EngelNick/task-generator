function subscribeToInput() {
    document.getElementById('input').onkeyup = () => createTask();
}

function createTask() {
    const newTaskName = document.getElementById("input").value.split(' ').join('-').toLowerCase();
    const replaceParenthesesAndSlashes = newTaskName.replace(/[()\s]/g, '').replace(/[/\s]/g, '-');
    document.getElementById('result').innerHTML = replaceParenthesesAndSlashes ? replaceParenthesesAndSlashes : 'result';
}