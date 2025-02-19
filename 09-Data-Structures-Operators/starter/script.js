'use strict';

const gameEvents = new Map([
                               [17, '⚽️ GOAL'],
                               [36, '🔁 Substitution'],
                               [47, '⚽️ GOAL'],
                               [61, '🔁 Substitution'],
                               [64, '🔶 Yellow card'],
                               [69, '🔴 Red card'],
                               [70, '🔁 Substitution'],
                               [72, '🔁 Substitution'],
                               [76, '⚽️ GOAL'],
                               [80, '⚽️ GOAL'],
                               [92, '🔶 Yellow card'],
                           ]);

gameEvents.delete(64);
const gameEventSet = new Set(gameEvents.values());
const events = [...gameEventSet];

gameEvents.forEach((value, key) => {
    console.log(`[${key < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`);
});
console.log(events);