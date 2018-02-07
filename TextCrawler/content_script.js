walk(document.body);

function walk(node)
{
    // stolen from someone much smarter than me: @panicsteve
    var child, next;
    if(node.tagName !== undefined && (node.tagName.toLowerCase() == 'input' 
    || node.tagName.toLowerCase() == 'textarea' 
    || node.classList.contains('ace_editor'))) { // wtf is ace_editor?
        return;
    } 

    switch(node.nodeType){
        case 1: // element
        case 9: // document
        case 11: // document fragment
            child = node.firstChild;
            while(child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // text node
            handleText(node);
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;
    v = v.replace(/\bthe\b/gi, "Insik");

    textNode.nodeValue = v;
}