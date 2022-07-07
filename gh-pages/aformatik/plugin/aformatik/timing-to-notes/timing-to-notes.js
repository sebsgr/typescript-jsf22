/*
 * Timing To Notes Plugin
 * Sebastian Greiner <sgr@aformatik.de>
 * 
 * Voraussetzung:
 * Die Zeiten pro Slide müssen über das Attribut data-timing gesetzt werden (ansosnten wird der Wert defaultTiming verwendet)
 * zusetzlich muss in der RevealJS Config der "defaultTiming" gesetzt werden.
 * 
 * Dieses Plugin schreibt die Timing Daten einer Slide automatisch in die Notitzen.
 * Diese Funktionalität ist wichtig, falls man die Präsentation später mit der PDF präsentiert, und dort der SpeakersView nicht verfügbar ist.
 * 
 * Zum Aktivieren des Plugins folgende Referenz zu den Dependencies des Reveal.initialize() hinzufügen:
 * { src: 'plugin/aformatik/timing-to-notes/timing-to-notes.js' }
 */

(function () {

    Reveal.on('ready', event => {
        const allSlides = Array.from(document.getElementsByTagName('section'));
        const notes = document.getElementsByClassName('notes')
        Array.from(notes).forEach(node => inserTimingForSlide(node, allSlides));
        Reveal.sync();
    });

    function inserTimingForSlide(note, allSlides) {
        const slide = note.parentNode
        var secondsForCurrentSlide = getTimingValue(slide);
        var totalSeconds = calculateFullTimeForNode(note, allSlides); // Anzahl der Sekunden dieser und aller vorherigen Slides.

        var timeOfSlideString = '<span style="font-size: 0.7em">Aktuelle Slide: <span style="font-weight: bold;">' + secondsToTime(secondsForCurrentSlide) + '</span></span>';
        var fullTimeForSlide = 'Slide Ende: <span style="font-weight: bold;">' + secondsToTime(totalSeconds) + '</span>';
        note.innerHTML =
            '<span style="font-weight: bold;">Timing:</span>'
            + '<br>'
            + timeOfSlideString
            + '<br>'
            + fullTimeForSlide
            + '<br>'
            + '<hr>'
            + note.innerHTML;
    }

    function getTimingValue(node) {
        if (node.attributes['data-external']) {
            return 0;
        }
        const att = node.attributes['data-timing'];
        if (att == undefined) {
            return Reveal.getConfig().defaultTiming;
        }
        return att.nodeValue;
    }

    function secondsToTime(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 8)
    }

    function calculateFullTimeForNode(note, allSlides) {
        var slide = note.parentNode;

        var sum = 0;
        for (const s of allSlides) {
            var t = getTimingValue(s);
            var i = parseInt(t, 10);
            sum += i;
            if (s == slide) {
                break;
            }
        }
        return sum;
    }

})();