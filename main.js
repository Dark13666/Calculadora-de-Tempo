var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')

var data1
var data2
var data1segundos
var data2segundos
var segundos = 0
var minutos = 0
var horas = 0
var dias = 0
var diaTotal = 0
var meses = 0
var anos = 0
var resultado

botao.addEventListener('click', function (e) {

    resultado = ''

    data1 = new Date(input1.value)
    data2 = new Date(input2.value)

    data1segundos = data1.getTime()
    data2segundos = data2.getTime()

    segundos = (data2segundos - data1segundos) / 1000

    if (isNaN(segundos + 0)) {
        resultado = 'ERROR 404'
    } else {
        if (segundos >= 365 * 24 * 60 * 60) {
            anos = Math.floor(segundos / (365 * 24 * 60 * 60))
            resultado += anos + ' ano'
            segundos %= 365 * 24 * 60 * 60
            anos > 1 ? resultado += 's' : ''
        }

        if (segundos >= 30 * 24 * 60 * 60) {
            meses = Math.floor(segundos / (30 * 24 * 60 * 60))
            resultado += '<br>' + meses + ' mes'
            segundos %= 30 * 24 * 60 * 60
            meses > 1 ? resultado += 'es' : ''
        }

        if (segundos >= 24 * 60 * 60) {
            dias = Math.floor(segundos / (24 * 60 * 60))
            resultado += '<br>' + dias + ' dia'
            segundos %= 24 * 60 * 60
            dias > 1 ? resultado += 's' : ''
        }

        if (segundos >= 60 * 60) {
            horas = Math.floor(segundos / (60 * 60))
            resultado += '<br>' + horas + ' hora'
            segundos %= 60 * 60
            horas > 1 ? resultado += 's' : ''
        }

        if (segundos >= 60) {
            minutos = Math.floor(segundos / 60)
            resultado += '<br>' + minutos + ' minuto'
            segundos %= 60
            minutos > 1 ? resultado += 's' : ''
        }

        if (segundos > 0) {
            resultado += '<br>' + segundos + ' segundo'
            segundos > 1 ? resultado += 's' : ''
        }
    }


    document.querySelector('#resultado').innerHTML = resultado

})
