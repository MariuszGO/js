  function pokazImie() {
      let imie = document.getElementById("imie").value;
      alert("Witaj, " + imie + "!");
  }


  function policzPola() {
      let znacznik = document.getElementsByTagName("p");
      document.getElementsByTagName("p").innerHTML = "dsdd";
      alert("Formularz ma " + znacznik.length + " znaczników p.");

  }


  function podswietlPola() {
      let pola = document.getElementsByClassName("wazne");
      for (let i = 0; i < pola.length; i++) {
          pola[i].style.border = "2px solid red";
      }
  }


  function walidacja() {
      let imie = document.getElementById("val_imie");
      let email = document.getElementById("val_email");

      if (imie.value === "" || email.value === "") {
          alert("Proszę uzupełnić wszystkie pola!");
          if (imie.value === "") imie.classList.add("blad");
          if (email.value === "") email.classList.add("blad");
          return false;
      } else {
          alert("Formularz poprawnie wypełniony ✅");
          return true;
      }
  }


  function policzZaznaczone() {
      let checki = document.getElementsByTagName("input");
      let licznik = 0;
      for (let i = 0; i < checki.length; i++) {
          if (checki[i].type === "checkbox" && checki[i].checked) {
              licznik++;
          }
      }
      alert("Zaznaczono " + licznik + " opcji.");
  }


  function pokazPodsumowanie() {
      let imie = document.getElementById("sum_imie").value;
      let nazwisko = document.getElementById("sum_nazwisko").value;
      let email = document.getElementById("sum_email").value;

      document.getElementById("wynik").innerHTML =
          "Twoje dane:<br>" +
          "Imię: " + imie + "<br>" +
          "Nazwisko: " + nazwisko + "<br>" +
          "Email: " + email;
  }