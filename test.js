// Paste this into your Console
window.timeTravel = function(dateString) {
    const simulatedDate = new Date(dateString);
    
    // 1. Override the global Date object
    const OriginalDate = Date;
    window.Date = class extends OriginalDate {
        constructor(...args) {
            if (args.length === 0) return simulatedDate;
            return new OriginalDate(...args);
        }
        static now() { return simulatedDate.getTime(); }
    };
    
    console.log(`%c🕒 Time Travelled to: ${dateString}`, "color: #00d084; font-weight: bold; font-size: 14px;");

    // 2. Trigger your update functions immediately
    if (typeof updateCountdown === 'function') updateCountdown();
    if (typeof updateVisitStreak === 'function') updateVisitStreak();
};


timeTravel('2026-02-11T10:00:00');
// Expected: "💝 3 days until Valentine's!"

