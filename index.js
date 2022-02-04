function enviar(){
    function coletando(){
        var la, ua, natual, na, resultado;


        /*
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

        var nr = 16-natual;
        var nr = nr+na;
        
        */

        la = 2
        ua = 3
        natual = 13
    
        na = 0 
        ld = 4
        resultado = ''

        nr = 16-natual;
        nr = nr+na;

        //dados recolhidos
        /*
        console.log(`${la} -- la`)K
        console.log(`${ua} -- ua`)
        console.log(`${natual} -- natual`)
        console.log(`${na} -- na`)
        console.log(`${ld} -- ld`)
        console.log(`${nr} -- nr`)
        console.log('')
        */


        //parte 1
        var lr = 4-la 
        //console.log(`${lr} -- Lições restantes na unidade`)


        //parte 2
        var ur = 6-ua
        var lu = ur*4
        var lt = lr+lu
        //console.log(`${lt} -- Lições totais no nível`)
        

        //parte 3
        var lr = nr*4
        var lr = lr*6
        //console.log(`${lr} -- Lições dos outros níveis`)


        //parte 4
        lt = lt+lr
        //console.log(`${lt} -- Lições totais`)
        
        //window.alert(lt)
        console.log(`Lt --> ${lt}`)

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
    //window.alert(drm)
    //window.alert(mes)
    
    var densidade = lt/ld
    //window.alert(densidade)

    console.log(densidade)
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

    mensagem = (`Dia: ${densidade.toFixed(1)} \nMês: ${mes}`)
    //resultado.innerHTML = (mensagem)
    console.log(mensagem)
}


enviar()