"use strict";
(function () {
    $('#zip').mask('00000-000');
    window.addEventListener('load', function () {
        let forms = document.getElementsByClassName('needs-validation');
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                $('#mensagem').addClass('sr-only');
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    const consulta = new ConsultaCepController();
                    consulta.consultarCep();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
