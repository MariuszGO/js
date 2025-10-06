        const btn = document.getElementById('zmienWyglad');
        const body = document.body;


        btn.addEventListener('click', () => {

            const kolory = ['#FFDEE9', '#B5FFFC', '#C9FFD5', '#FEE9AE', '#E5D4FF'];
            const losowyKolor = kolory[Math.floor(Math.random() * kolory.length)];
            body.style.backgroundColor = losowyKolor;


            body.style.color = body.style.color === 'black' ? '#222' : 'black';


            const czcionki = ['Arial', 'Georgia', 'Courier New', 'Tahoma', 'Verdana'];
            body.style.fontFamily = czcionki[Math.floor(Math.random() * czcionki.length)];


            const formBox = document.querySelector('.form-box');
            formBox.style.backgroundColor = '#fff';
            formBox.style.border = '2px solid #555';
            formBox.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';



        });


        const select = document.getElementById('kolorTekstu');
        const paragrafy = document.querySelectorAll('p');

        select.addEventListener('change', () => {
            const wybranyKolor = select.value;

            paragrafy.forEach(p => {
                p.style.color = wybranyKolor;
            });
        });



        function zmientlo() {

            let kolor = document.getElementById('kol').value;

            document.body.style.backgroundColor = kolor;
        }

        function zmienwielosc() {
            let wielkosc_liter = document.getElementById('wielkosc').value;

            console.log(wielkosc_liter);
            const pismo = document.querySelector('p');



            pismo.style.fontSize = wielkosc_liter + "px";

        }