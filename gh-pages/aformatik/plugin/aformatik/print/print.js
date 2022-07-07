/*
 * Only Notes View
 * Sebastian Greiner <sgr@aformatik.de>
 * 
 * Fügt einen neue Ansicht hinzu, in der nur die Notizen angezeigt werden.
 * Diese Ansicht ist hilfreich für die Erzeugung einer PDF, die nur die Notizen enthält.
 * 
 * Die Ansicht kann über den Query Parameter showNotes=only-notes aktiviert werden.
 * 
 * Zum Aktivieren des Plugins folgende Referenz zu den Dependencies des Reveal.initialize() hinzufügen:
 * { src: 'plugin/aformatik/only-notes-view/only-notes-view.js' }
 */

(function () {

    // add style for only notes view
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('print');
    if (myParam && myParam.indexOf('true') >= 0) {
        var head = document.getElementsByTagName('body')[0];
        head.classList.add("print");
    }

})();