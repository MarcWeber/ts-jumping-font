// eg goto Wikipedia, Goto Console (developer tools), remove the word export,
// uncomment the randomizeText calls paste an run. You should see very light
// displacements of the characters within the article and headline making it
// feel more natural

export function randomizeText(selector, o) {

    const f_r = o.rotation ?? 5;
    const f_tx = o.translation_x ?? 5;
    const f_ty = o.translation_y ?? 5;

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

            const displacementX = (Math.random() - 0.5) * f_tx
            ;
            const displacementY = (Math.random() - 0.5) * f_ty;
            const rotation = (Math.random() - 0.5) * f_r

            spanChar.style.position = 'relative';  // Position relative to its normal position
            spanChar.style.display = 'inline-block';  // Behave like a span
            spanChar.style.transform = `translate(${displacementX}px, ${displacementY}px) rotate(${rotation}deg)`; // Combine displacement and rotation

            element.appendChild(spanChar);
        });
    });
}

// randomizeText('h4, h5, h6, .hauptseite-box-content', {translation_x: 0.7, translation_y: 0.3, rotation: 4}); // Example: 4px displacement and 2 degrees rotation
// randomizeText('h1, h2, h3', {translation_x: 1, translation_y: 0.7, rotation: 4}); // Example: 4px displacement and 2 degrees rotation
