// Función para resaltar el elemento encontrado
function highlightElement(element) {
    if (element) {
        element.classList.add('highlight');
        console.log('Elemento encontrado:', element);
    } else {
        console.log('No se encontró ningún elemento con ese selector.');
    }
}

// --- SELECTORES DE ATRIBUTOS ---

// 1. Seleccionar un elemento por la presencia de un atributo
// Selecciona el primer <article> que tenga el atributo 'data-category'
const articleWithDataCategory = document.querySelector('article[data-category]');
// highlightElement(articleWithDataCategory);

// 2. Seleccionar un elemento por un valor exacto de un atributo
// Selecciona el primer <article> donde el atributo 'data-category' sea exactamente 'ciencia'
const scienceArticle = document.querySelector('article[data-category="ciencia"]');
// highlightElement(scienceArticle);

// 3. Seleccionar un elemento cuyo valor de atributo comience con una cadena
// Selecciona el primer enlace (<a>) cuyo 'href' comience con "https://"
const externalLink = document.querySelector('a[href^="https://"]');
// highlightElement(externalLink);

// 4. Seleccionar un elemento cuyo valor de atributo termine con una cadena
// Selecciona el primer enlace (<a>) cuyo 'href' termine con "/marte"
const marsLink = document.querySelector('a[href$="/marte"]');
// highlightElement(marsLink);

// 5. Seleccionar un elemento cuyo valor de atributo contenga una subcadena
// Selecciona el primer enlace (<a>) cuyo 'href' contenga "ejemplo"
const exampleDomainLink = document.querySelector('a[href*="ejemplo"]');
// highlightElement(exampleDomainLink);


// --- COMBINADORES ---

// 6. Combinador descendiente (espacio)
// Selecciona el primer <li> que sea descendiente de un <article>
const firstLiInArticle = document.querySelector('article li');
// highlightElement(firstLiInArticle);

// 7. Combinador de hijo directo (>)
// Selecciona el primer <p> que sea hijo directo de un <article>
const directChildParagraph = document.querySelector('article > p');
// highlightElement(directChildParagraph);

// 8. Combinador de hermano adyacente (+)
// Selecciona el primer <p> que esté inmediatamente después de un <h3>
const paragraphAfterH3 = document.querySelector('h3 + p');
// highlightElement(paragraphAfterH3);

// 9. Combinador de hermano general (~)
// Selecciona el primer <p> que sea hermano de un <h3> y aparezca después (no necesariamente inmediato)
const anyParagraphAfterH3 = document.querySelector('h3 ~ p');
// highlightElement(anyParagraphAfterH3);


// --- PSEUDO-CLASES ---

// 10. Pseudo-clase :first-child
// Selecciona el primer <li> que es el primer hijo de su padre (<ul>)
const firstListItem = document.querySelector('li:first-child');
// highlightElement(firstListItem);

// 11. Pseudo-clase :last-of-type
// Selecciona el último elemento de su tipo (el último <li> en una lista)
const lastListItemOfType = document.querySelector('li:last-of-type');
// highlightElement(lastListItemOfType);

// 12. Pseudo-clase :nth-child(n)
// Selecciona el segundo <li> dentro de cualquier lista
const secondListItem = document.querySelector('li:nth-child(2)');
// highlightElement(secondListItem);

// 13. Pseudo-clase :not()
// Selecciona el primer <article> que NO tenga la categoría 'ciencia'
const notScienceArticle = document.querySelector('article:not([data-category="ciencia"])');
// highlightElement(notScienceArticle);

// 14. Pseudo-clases de estado de formulario
// Selecciona el primer input que es 'required'
const requiredInput = document.querySelector('input:required');
// highlightElement(requiredInput);

// Selecciona el primer botón que está 'disabled'
const disabledButton = document.querySelector('button:disabled');
// highlightElement(disabledButton);