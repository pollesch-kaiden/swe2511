// Class: SWE2511 - Drawing
// Names: Matthew Schulz & Kaiden Pollesch
// Class Section: 111

window.onload = () => {
    const canvas = document.getElementById("my_canvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;
    let color = document.getElementById("colorPicker").value;
    let penMode = 'small';

    const startDrawing = () => {
        drawing = true;
        draw(event);
    }

    const stopDrawing = () => {
        drawing = false;
        ctx.beginPath();
    }

    const draw = () => {
        if (drawing) {
            const canvasLocation = canvas.getBoundingClientRect();
            const x = event.clientX - canvasLocation.left;
            const y = event.clientY - canvasLocation.top;

            ctx.fillStyle = color
            if(penMode === 'small') {
                ctx.fillRect(x, y, 1, 1);
            } else if(penMode === 'eraser') {
                ctx.clearRect(x, y, 20, 20);
            } else if(penMode === 'medium') {
                ctx.fillRect(x, y, 5, 5);
            } else if(penMode === 'large') {
                ctx.fillRect(x, y ,10, 10);
            } else if(penMode === 'lineSmall') {
                ctx.arc(x, y, 0, 0, 2 * Math.PI);
                ctx.lineWidth = 1;
                ctx.stroke();
            } else if(penMode === 'lineMedium') {
                ctx.arc(x, y, 0, 0, 2 * Math.PI);
                ctx.lineWidth = 5;
                ctx.stroke();
            } else if(penMode === 'lineLarge') {
                ctx.arc(x, y, 0, 0, 2 * Math.PI);
                ctx.lineWidth = 10;
                ctx.stroke();
            }

        }
    };

    const updateColor = () => {
        color = event.target.value;
    }

    const changeBackground = () => {
        canvas.style.backgroundColor = document.getElementById('backgroundColorPicker').value;
    }

    const updatePenMode = () => {
        if(document.getElementById('small').checked) {
            penMode = 'small';
        } else if(document.getElementById('eraser').checked) {
            penMode = 'eraser';
        } else if(document.getElementById('medium').checked) {
            penMode = 'medium';
        } else if(document.getElementById('large').checked) {
            penMode = 'large';
        } else if(document.getElementById('lineSmall').checked) {
            penMode = 'lineSmall';
        } else if(document.getElementById('lineMedium').checked) {
            penMode = 'lineMedium';
        } else if(document.getElementById('lineLarge').checked) {
            penMode = 'lineLarge';
        }
    }

    document.getElementById("clearButton").onclick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);
    document.getElementById('colorPicker').addEventListener('input', updateColor);
    document.getElementById('backgroundColorPicker').addEventListener('input', changeBackground);
    const radioElementList = document.getElementsByName('penMode');
    for (let i = 0; i < radioElementList.length; i++) {
        radioElementList[i].addEventListener('input', updatePenMode);
    }
}