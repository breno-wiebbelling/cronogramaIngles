function enviar(){
    function coletando(){
        var la, ua, natual, na, resultado;

        la = document.getElementById('la').value
        ua = document.getElementById('ua').value
        natual = document.getElementById('natual').value
        na = document.getElementById('na').value
        ld = document.getElementById('ld').value
        resultado = document.getElementById('resultado')

        //coletando dados
        la = parseInt(la)
        ua = parseInt(ua)
        natual = parseInt(natual)
        na = parseInt(na)

        nr = 16-natual;
        nr = nr+na;
        

        //parte 1
        var lr = 4-la 


        //parte 2
        var ur = 6-ua
        var lu = ur*4
        var lt = lr+lu
        

        //parte 3
        var lr = nr*4
        var lr = lr*6


        //parte 4
        lt = lt+lr
        

        return lt
    }
    
    function data(){
    
        data = new Date()
    
        dia = parseInt(data.getDate())
        mes = parseInt(data.getMonth())+1

        //dias restantes no mês
        var drm = 30-dia

        

        var dias = [drm, mes, dia]
        return dias
    }
    

    var lt = coletando()
    var dias = data()
    drm = dias[0]
    mes = dias[1]
    dia = dias[2]
    
    var densidade = lt/ld

    //console.log(`${lt} Lições \n${densidade.toFixed(2)} Densidade`)
    
    
    //console.log(densidade)
    if (densidade>30){
        densidade = densidade-drm
        mes+=1
        
        while (densidade>30){
            densidade= densidade - 30;
            mes= mes + 1
        }
    }else{
        densidade+=dia
    }
    
    if (dia>=30){
        densidade-=30
        mes+=1
    }

    mensagem = (`Dia: ${densidade.toFixed(1)} \nMês: ${mes}`)
    resultado.innerHTML = (mensagem)
    console.log(mensagem)
}

enviar()
