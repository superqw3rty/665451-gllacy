var link = document.querySelector(".feedback-btn");
      var popup = document.querySelector(".feedback-form");
      var close = popup.querySelector(".modal-close");
      var overlay = document.querySelector(".overlay");
      var form = popup.querySelector(".feedback-form-js");
      var firstname = document.getElementById("name");
      var email = form.querySelector(".feedback-email-input");

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("feedback-form-open");
        overlay.classList.add("overlay-show");
        //name.value="red";
        firstname.focus();
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("feedback-form-open");
        overlay.classList.remove("overlay-show");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("feedback-form-open")) {
          popup.classList.remove("feedback-form-open");
          overlay.classList.remove("overlay-show");
          }
        }
      });
