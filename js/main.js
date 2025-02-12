$(document).ready(function(){
    


    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(DDD) 12345-6789'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    $('#carousel-imagens').slick({
        autoplay: true,
        
    })

    
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true,          
            },
        },
        messages: {
            nome:'Por favor, insira o seu nome.',
            email: 'Precisamos de um e-mail válido para contato.',
            telefone: 'Insira o seu telefone.',
            cpf: 'Digite o seu CPF.',
            endereco: 'Digite o seu endereço.',
            cep: 'Informe o seu CEP.',
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})