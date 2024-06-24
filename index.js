document.addEventListener('DOMContentLoaded', function () {
    generateInputFields();
});

function generateInputFields() {
    const numVertices = document.getElementById('vertices').value;
    const coordinateInputs = document.getElementById('coordinateInputs');

    coordinateInputs.innerHTML = '';

    for (let i = 0; i < numVertices; i++) {
        const xInput = document.createElement('input');
        xInput.type = 'number';
        xInput.placeholder = `x${i + 1}`;
        xInput.id = `x${i}`;
        xInput.required = true;

        const yInput = document.createElement('input');
        yInput.type = 'number';
        yInput.placeholder = `y${i + 1}`;
        yInput.id = `y${i}`;
        yInput.required = true;

        coordinateInputs.appendChild(xInput);
        coordinateInputs.appendChild(yInput);
    }
}

function calculateArea() {
    const numVertices = document.getElementById('vertices').value;
    let x = [];
    let y = [];

    for (let i = 0; i < numVertices; i++) {
        x.push(parseFloat(document.getElementById(`x${i}`).value));
        y.push(parseFloat(document.getElementById(`y${i}`).value));
    }

    let area = 0;
    for (let i = 0; i < numVertices; i++) {
        let j = (i + 1) % numVertices;
        area += x[i] * y[j];
        area -= y[i] * x[j];
    }
    area = Math.abs(area) / 2;

    document.getElementById('areaResult').textContent = `The area of the polygon is ${area}`;
}
