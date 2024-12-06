// Functie om een mapping te decoderen
function decodeMapping(index, offset) {
    const mappings = getMappings();
    return mappings[index - 0x18d];
}

// Functie om de array met mappings op te halen
function getMappings() {
    return [
        '20VJsBck',
        '46455xjUDUY',
        'This is a modified version of Ultraviolet, with the modification of making it a static website. This was developed by the TIW team and you can visit their discord server at: https://discord.gg/zJhPJYJCeJ',
        '80901zEVpaA',
        '1148805HmJwyQ',
        '72XCCPgk',
        '7183814tGPWio',
        '842979QmPzwq',
        '70uDBJOt',
        '199416tFFxDQ',
        '110wchWfL',
        '43804HZkPYS'
    ];
}

// Functie om de code te herstructureren
(function processMappings(getMappings, targetValue) {
    const decode = decodeMapping;
    const mappings = getMappings();

    while (true) {
        try {
            const result =
                -parseInt(decode(0x191)) / 1 +
                -parseInt(decode(0x192)) / 2 * (parseInt(decode(0x197)) / 3) +
                parseInt(decode(0x195)) / 4 +
                parseInt(decode(0x194)) / 5 * (parseInt(decode(0x193)) / 6) +
                -parseInt(decode(0x18e)) / 7 +
                -parseInt(decode(0x18f)) / 8 * (-parseInt(decode(0x18d)) / 9) +
                -parseInt(decode(0x196)) / 10 * (-parseInt(decode(0x190)) / 11);

            if (result === targetValue) break;
            else mappings.push(mappings.shift());
        } catch (error) {
            mappings.push(mappings.shift());
        }
    }
})(getMappings, 0x8da1b);

// Functie om een alert te tonen bij pagina-lading
window.onload = function () {
    alert(decodeMapping(0x198));
};
