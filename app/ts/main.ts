// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {

    $('#zip').mask('00000-000');
    
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event: Event) {

                $('#mensagem').addClass('sr-only');

                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
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

