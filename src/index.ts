
export function randomizeText(selector, o) {

    const f_r = o.rotation ?? 5;
    const f_t = o.translation ?? 5;

    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        const text = element.innerText;
        const characters = text.split('');
        element.innerHTML = ''; // Clear the existing content

        characters.forEach(char => {
            const spanChar = document.createElement('div');
            if (char == ' '){
                spanChar.innerHTML = '&nbsp;';
            } else {
                spanChar.innerText = char;
            }

            const displacementX = (Math.random() - 0.5) * f_t;
            const displacementY = (Math.random() - 0.5) * f_t;
            const rotation = (Math.random() - 0.5) * f_r

            divChar.style.position = 'relative';  // Position relative to its normal position
            divChar.style.display = 'inline-block';  // Behave like a span
            divChar.style.transform = `translate(${displacementX}px, ${displacementY}px) rotate(${rotation}deg)`; // Combine displacement and rotation

            element.appendChild(spanChar);
        });
    });
}

randomizeText('h1, h2, h3, h4, h5, h6', {translation: 5}); // Example: 4px displacement and 2 degrees rotation
randomizeText('p', {translation: '0.7');
