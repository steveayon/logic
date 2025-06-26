/********************************************************* 
DTX Cymbal Choke Script
Warning: This caused random activation of cymbal choke
when moving around the project timeline the Logic Pro X
Fix is to:
Uncheck Chase Polyphonic Aftertouch from 
Logic's Project Settings > MIDI > Chase
************************************************************/
function HandleMIDI(event) {
    if (event instanceof PolyPressure) {
        // Only process cymbal notes (49-59)
        if (event.pitch >= 49 && event.pitch <= 59) {
            if (event.value < 65) {
                event.value = Math.max(65, event.value + 65);
            }
        }
        event.send();
    } else {
        event.send();
    }
}