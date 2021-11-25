 document.addEventListener('DOMContentLoaded', () => {
    // kolla i webbläsarens console för att se vad som händer
    console.log('Laddat');

    // välj de element vi behöver
    const message = document.querySelector('#message');
    const textbox = document.querySelector('#textbox');
    const button = document.querySelector('#translate');

    // lyssna på knapptryck

    button.addEventListener('click', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        // skriv ut översättningen i message
        display(translation, message);
    });

});

const translate = (text) => {
    // översätt texten till rövarspråket
    console.log(text)
    let text1 = text.replaceAll("b", "bob"); let text2 = text1.replaceAll("c", "coc"); let text3 = text2.replaceAll("d", "dod"); let text4 = text3.replaceAll("f", "fof"); let text5 = text4.replaceAll("g", "gog"); let text6 = text5.replaceAll("h", "hoh"); let text7 = text6.replaceAll("j", "joj"); let text8 = text7.replaceAll("k", "kok"); let text9 = text8.replaceAll("l", "lol"); let text10 = text9.replaceAll("m", "mom"); let text11 = text10.replaceAll("n", "non"); let text12 = text11.replaceAll("p", "pop"); let text13 = text12.replaceAll("q", "qoq"); let text14 = text13.replaceAll("r", "ror"); let text15 = text14.replaceAll("s", "sos"); let text16 = text15.replaceAll("t", "tot"); let text17 = text16.replaceAll("v", "vov"); let text18 = text17.replaceAll("w", "wow"); let text19 = text18.replaceAll("x", "koksos"); let text20 = text19.replaceAll("z", "zoz"); let text21 = text20.replaceAll("B", "Bob"); let text22 = text21.replaceAll("C", "Coc"); let text23 = text22.replaceAll("D", "Dod"); let text24 = text23.replaceAll("F", "Fof"); let text25 = text24.replaceAll("G", "Gog"); let text26 = text25.replaceAll("H", "Hoh"); let text27 = text26.replaceAll("J", "Joj"); let text28 = text27.replaceAll("K", "Kok"); let text29 = text28.replaceAll("L", "Lol"); let text30 = text29.replaceAll("M", "Mom"); let text31 = text30.replaceAll("N", "Non"); let text32 = text31.replaceAll("P", "Pop"); let text33 = text32.replaceAll("Q", "Qoq"); let text34 = text33.replaceAll("R", "Ror"); let text35 = text34.replaceAll("S", "Sos"); let text36 = text35.replaceAll("T", "Tot"); let text37 = text36.replaceAll("V", "Vov"); let text38 = text37.replaceAll("W", "Wow"); let text39 = text38.replaceAll("X", "Koksos"); let text40 = text39.replaceAll("Z", "Zoz");
 //          let konsonanter = "BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz"
 //          let vokaler = "AEIOUYaeiouy";
 //          let translation = "";
 //  
 //          for (let c; c.split('');) {
 //              for (let k; k.split('');) {
 //                  if (c = k) {
 //                      translation = translation + c + "o" + c;
 //                  }
 //              }
 //              for (let v; v.split('');) {
 //                  if (c = v) {
 //                      translation = translation + c + "o" + c;
 //                  }
 //              }
 //          }
 //          return translation;
 //      }
    return text40;
}

const display = (translation, element) => {
    // skapa ett p element för texten
    const p = document.createElement('p');
    // sätt texten till översättningen
    p.textContent = translation;
    // fäst elementet
    element.insertBefore(p, element.firstChild);
}
