function obter1(){
    let phrase1 = String(document.querySelector("textarea#traduzir1").value)
    let res1 = document.querySelector("div#res")
    res1.innerHTML = turing1(Numerizar1()).join("")
    
}

function Numerizar(){
    var x = 0
    
    
    let phrase1 = String(document.querySelector("textarea#traduzir1").value)
    
    var frase1 = phrase1.split("")
    

    frase1.forEach(function(letra){
        z = frase1.indexOf(letra)
        
        if(letra == "ç" || letra == "Ç"){
            frase1[z] = 0
        }
        if(letra == "A" || letra == "a"){
            frase1[z] = 1
        }
        
        if(letra == "b" || letra == "B"){
            frase1[z] = 2
        }
        if(letra == "c" || letra == "C"){
            frase1[z] = 3
        }
        if(letra == "d" || letra == "D"){
            frase1[z] = 4
        }
        if(letra == "e" || letra == "E"){
            frase1[z] = 5
        }
        if(letra == "f" || letra == "F"){
            frase1[z] = 6
        }
        if(letra == "g" || letra == "G"){
            frase1[z] = 7
        }
        if(letra == "h" || letra == "H"){
            frase1[z] = 8
        }
        if(letra == "i" || letra == "I"){
            frase1[z] = 9
        }
        if(letra == "j" || letra == "J"){
            frase1[z] = 10
        }
        if(letra == "k" || letra == "K"){
            frase1[z] = 11
        }
        if(letra == "l" || letra == "L"){
            frase1[z] = 12
        }
        if(letra == "m" || letra == "M"){
            frase1[z] = 13
        }
        if(letra == "n" || letra == "N"){
            frase1[z] = 14
        }
        if(letra == "o"|| letra == "O"){
            frase1[z] = 15
        }
        if(letra == "p"|| letra == "P"){
            frase1[z] = 16
        }
        if(letra == "q"|| letra == "Q"){
            frase1[z] = 17
        }
        if(letra == "r"|| letra == "R"){
            frase1[z] = 18
        }
        if(letra == "s"|| letra == "S"){
            frase1[z] = 19
        }
        if(letra == "t" || letra == "T"){
            frase1[z] = 20
        }
        if(letra == "u"|| letra == "U"){
            frase1[z] = 21
        }
        if(letra == "v" || letra == "V"){
            frase1[z] = 22
        }
        if(letra == "w"|| letra == "W"){
            frase1[z] = 23
        }
        if(letra == "x"|| letra == "X"){
            frase1[z] = 24
        }
        if(letra == "y"|| letra == "Y"){
            frase1[z] = 25
        }
        if(letra == "z"|| letra == "Z"){
            frase1[z] = 26
        }
        if(letra == "á"|| letra == "Á"){
            frase1[z] = 1
        }
        if(letra == "é"|| letra == "É"){
            frase1[z] = 5
        }
        if(letra == "í"|| letra == "Í"){
            frase1[z] = 7
        }
        if(letra == "ó"|| letra == "Ó"){
            frase1[z] = 15
        }
        if(letra == "ú"|| letra == "Ú"){
            frase1[z] = 21
        }
        if(letra == "ã"|| letra == "Ã"){
            frase1[z] = 1
        }
        
        if(letra == "õ"|| letra == "Õ"){
            frase1[z] = 15
        }
        if(letra == "â"|| letra == "Â"){
            frase1[z] = 1
        }
        if(letra == "ê"|| letra == "Ê"){
            frase1[z] = 5
        }
        if(letra == "î"|| letra == "Î"){
            frase1[z] = 9
        }
        if(letra == "ô"|| letra == "Ô"){
            frase1[z] = 15
        }
        if(letra == "û"|| letra == "Û"){
            frase1[z] = 21
        }
        if(letra == `\"`){
            frase1[z] = `\"`
        }
        if(letra == `\'`){
            frase1[z] = `\'`
        }
        
        if(letra == "-"){
            frase1[z] = "-"
        }

        
    })
    console.log("numerizar" + frase1)
    return frase1
    
}

function turing(array){
    var x = 0
    
    
    array.forEach(function(num){
        var z = array.indexOf(num)

        if(array[z] == "-"){
            array[z] = " "
        }else if(array[z] == "?"){
            array[z] == "?"
        }
        else if(array[z] == "!"){
            array[z] == "!"
        }
        else if(array[z] == ":"){
            array[z] == ":"
        }
        else if(array[z] == "("){
            array[z] == "("
        }
        else if(array[z] == ")"){
            array[z] == ")"
        }
        else if(array[z] == "\""){
            array[z] == "\""
        }
        else if(array[z] == "\'"){
            array[z] == "\'"
        }else if(array[z] == ","){
            array[z] == ","
        }
        else if(array[z] == "."){
            array[z] == "."
        }
        else {
            if(x == 0){
                console.log(`${array[z]} -1 = ${array[z] -1}`)
                array[z] = Number(array[z] + 1)
                if(array[z] > 26){
                    array[z] = array[z] - 26
                }
                if(array[z] < 0){
                    array[z] = 26 + array[z]
                }
                    
                if(array[z] == 0 ){
                    array[z] = "ç"
                }
                if(array[z] > 0 && array[z] <= 26){
                    if(array[z] == "1"){
                        array[z] = "a"
                    }
                    if(array[z] == "2"){
                        array[z] = "b"
                    }
                    if(array[z] == "3"){
                        array[z] = "c"
                    }
                    if(array[z] == "4"){
                        array[z] = "d"
                    }
                    if(array[z] == "5"){
                        array[z] = "e"
                    }
                    if(array[z] == "6"){
                        array[z] = "f"
                    }
                    if(array[z] == "7"){
                        array[z] = "g"
                    }
                    if(array[z] == "8" ){
                        array[z] = "h"
                    }
                    if(array[z] == "9" ){
                        array[z] = "i"
                    }
                    if(array[z] == "10"){
                        array[z] = "j"
                    }
                    if(array[z] == "11"){
                        array[z] = "k"
                    }
                    if(array[z] == '12'){
                        array[z] = "l"
                    }
                    if(array[z] == "13"){
                        array[z] = "m"
                    }
                    if(array[z] == "14"){
                        array[z] = "n"
                    }
                    if(array[z] == "15"){
                        array[z] = "o"
                    }
                    if(array[z] == "16"){
                        array[z] = "p"
                    }
                    if(array[z] == "17"){
                        array[z] = "q"
                    }
                    if(array[z] == "18"){
                        array[z] = "r"
                    }
                    if(array[z] == "19"){
                        array[z] = "s"
                    }
                    if(array[z] == "20"){
                        array[z] = "t"
                    }
                    if(array[z] == "21"){
                        array[z] = "u"
                    }
                    if(array[z] == "22"){
                        array[z] = "v"
                    }
                    if(array[z] == "23"){
                        array[z] = "w"
                    }
                    if(array[z] == "24"){
                        array[z] = "x"
                    }
                    if(array[z] == "25"){
                        array[z] = "y"
                    }
                    if(array[z] == "26"){
                        array[z] = "z"
                    }
                    }
                
                    x++
                  
                
                
                
            }else if(x == 1){
                console.log(`${array[z]} + 9 = ${array[z] - 9}`)
                array[z] = Number(array[z]) - 9
                if(array[z] > 26){
                    array[z] = array[z] - 26
                }
                if(array[z] < 0){
                    array[z] = 26+array[z]
                }
                    
                if(array[z] == 0 ){
                    array[z] = "ç"
                }
                if(array[z] > 0 && array[z] <= 26){
                    if(array[z] == "1"){
                        array[z] = "a"
                    }
                    if(array[z] == "2"){
                        array[z] = "b"
                    }
                    if(array[z] == "3"){
                        array[z] = "c"
                    }
                    if(array[z] == "4"){
                        array[z] = "d"
                    }
                    if(array[z] == "5"){
                        array[z] = "e"
                    }
                    if(array[z] == "6"){
                        array[z] = "f"
                    }
                    if(array[z] == "7"){
                        array[z] = "g"
                    }
                    if(array[z] == "8" ){
                        array[z] = "h"
                    }
                    if(array[z] == "9" ){
                        array[z] = "i"
                    }
                    if(array[z] == "10"){
                        array[z] = "j"
                    }
                    if(array[z] == "11"){
                        array[z] = "k"
                    }
                    if(array[z] == '12'){
                        array[z] = "l"
                    }
                    if(array[z] == "13"){
                        array[z] = "m"
                    }
                    if(array[z] == "14"){
                        array[z] = "n"
                    }
                    if(array[z] == "15"){
                        array[z] = "o"
                    }
                    if(array[z] == "16"){
                        array[z] = "p"
                    }
                    if(array[z] == "17"){
                        array[z] = "q"
                    }
                    if(array[z] == "18"){
                        array[z] = "r"
                    }
                    if(array[z] == "19"){
                        array[z] = "s"
                    }
                    if(array[z] == "20"){
                        array[z] = "t"
                    }
                    if(array[z] == "21"){
                        array[z] = "u"
                    }
                    if(array[z] == "22"){
                        array[z] = "v"
                    }
                    if(array[z] == "23"){
                        array[z] = "w"
                    }
                    if(array[z] == "24"){
                        array[z] = "x"
                    }
                    if(array[z] == "25"){
                        array[z] = "y"
                    }
                    if(array[z] == "26"){
                        array[z] = "z"
                    }
                    }
                
                
                x++
            
                
                
            }else if(x == 2){
                console.log(`${array[z]} + 7`)
                array[z] = Number(array[z]) - 7
                if(array[z] > 26){
                    array[z] = array[z] - 26
                }
                if(array[z] < 0){
                    array[z] = 26+array[z]
                }
                    
                if(array[z] == 0 ){
                    array[z] = "ç"
                }
                if(array[z] > 0 && array[z] <= 26){
                    if(array[z] == "1"){
                        array[z] = "a"
                    }
                    if(array[z] == "2"){
                        array[z] = "b"
                    }
                    if(array[z] == "3"){
                        array[z] = "c"
                    }
                    if(array[z] == "4"){
                        array[z] = "d"
                    }
                    if(array[z] == "5"){
                        array[z] = "e"
                    }
                    if(array[z] == "6"){
                        array[z] = "f"
                    }
                    if(array[z] == "7"){
                        array[z] = "g"
                    }
                    if(array[z] == "8" ){
                        array[z] = "h"
                    }
                    if(array[z] == "9" ){
                        array[z] = "i"
                    }
                    if(array[z] == "10"){
                        array[z] = "j"
                    }
                    if(array[z] == "11"){
                        array[z] = "k"
                    }
                    if(array[z] == '12'){
                        array[z] = "l"
                    }
                    if(array[z] == "13"){
                        array[z] = "m"
                    }
                    if(array[z] == "14"){
                        array[z] = "n"
                    }
                    if(array[z] == "15"){
                        array[z] = "o"
                    }
                    if(array[z] == "16"){
                        array[z] = "p"
                    }
                    if(array[z] == "17"){
                        array[z] = "q"
                    }
                    if(array[z] == "18"){
                        array[z] = "r"
                    }
                    if(array[z] == "19"){
                        array[z] = "s"
                    }
                    if(array[z] == "20"){
                        array[z] = "t"
                    }
                    if(array[z] == "21"){
                        array[z] = "u"
                    }
                    if(array[z] == "22"){
                        array[z] = "v"
                    }
                    if(array[z] == "23"){
                        array[z] = "w"
                    }
                    if(array[z] == "24"){
                        array[z] = "x"
                    }
                    if(array[z] == "25"){
                        array[z] = "y"
                    }
                    if(array[z] == "26"){
                        array[z] = "z"
                    }
                    }
                
              
                x = 0
            
        }
                
                
                
            }
            
            console.log("turing ->" + array[z])
        
        
        
    })
    console.log(array)
    return array
}

function obter(){
    let phrase = String(document.querySelector("textarea#traduzir").value)
    let res = document.querySelector("div#res1")
    res.innerHTML = turing(Numerizar()).join("")
    
}

function Numerizar1(){
    var x = 0
    
    
    let phrase = String(document.querySelector("textarea#traduzir").value)
    
    var frase = phrase.split("")
    

    frase.forEach(function(letra){
        z = frase.indexOf(letra)
        if(letra == "a" || letra == "A"){
            frase[z] = 1
        }
        if(letra == "b" || letra == "B"){
            frase[z] = 2
        }
        if(letra == "c" || letra == "C"){
            frase[z] = 3
        }
        if(letra == "d" || letra == "D"){
            frase[z] = 4
        }
        if(letra == "e" || letra == "E"){
            frase[z] = 5
        }
        if(letra == "f" || letra == "F"){
            frase[z] = 6
        }
        if(letra == "g" || letra == "G"){
            frase[z] = 7
        }
        if(letra == "h" || letra == "H"){
            frase[z] = 8
        }
        if(letra == "i" || letra == "I"){
            frase[z] = 9
        }
        if(letra == "j" || letra == "J"){
            frase[z] = 10
        }
        if(letra == "k" || letra == "K"){
            frase[z] = 11
        }
        if(letra == "l" || letra == "L"){
            frase[z] = 12
        }
        if(letra == "m" || letra == "M"){
            frase[z] = 13
        }
        if(letra == "n" || letra == "N"){
            frase[z] = 14
        }
        if(letra == "o"|| letra == "O"){
            frase[z] = 15
        }
        if(letra == "p"|| letra == "P"){
            frase[z] = 16
        }
        if(letra == "q"|| letra == "Q"){
            frase[z] = 17
        }
        if(letra == "r"|| letra == "R"){
            frase[z] = 18
        }
        if(letra == "s"|| letra == "S"){
            frase[z] = 19
        }
        if(letra == "t" || letra == "T"){
            frase[z] = 20
        }
        if(letra == "u"|| letra == "U"){
            frase[z] = 21
        }
        if(letra == "v" || letra == "V"){
            frase[z] = 22
        }
        if(letra == "w"|| letra == "W"){
            frase[z] = 23
        }
        if(letra == "x"|| letra == "X"){
            frase[z] = 24
        }
        if(letra == "y"|| letra == "Y"){
            frase[z] = 25
        }
        if(letra == "z"|| letra == "Z"){
            frase[z] = 26
        }
        if(letra == "á"|| letra == "Á"){
            frase[z] = 1
        }
        if(letra == "é"|| letra == "É"){
            frase[z] = 5
        }
        if(letra == "í"|| letra == "Í"){
            frase[z] = 7
        }
        if(letra == "ó"|| letra == "Ó"){
            frase[z] = 15
        }
        if(letra == "ú"|| letra == "Ú"){
            frase[z] = 21
        }
        if(letra == "ã"|| letra == "Ã"){
            frase[z] = 1
        }
        
        if(letra == "õ"|| letra == "Õ"){
            frase[z] = 15
        }
        if(letra == "â"|| letra == "Â"){
            frase[z] = 1
        }
        if(letra == "ê"|| letra == "Ê"){
            frase[z] = 5
        }
        if(letra == "î"|| letra == "Î"){
            frase[z] = 9
        }
        if(letra == "ô"|| letra == "Ô"){
            frase[z] = 15
        }
        if(letra == "û"|| letra == "Û"){
            frase[z] = 21
        }
        if(letra == `\"`){
            frase[z] = `\"`
        }
        if(letra == `\'`){
            frase[z] = `\'`
        }
        
        if(letra == " "){
            frase[z] = "-"
        }

        
    })
    console.log("numerizar" + frase)
    return frase
    
}

function turing1(array){
    var x = 0
    
    
    array.forEach(function(num){
        var z = array.indexOf(num)

        if(array[z] == "-"){
            array[z] = "-"
        }else if(array[z] == "?"){
            array[z] == "?"
        }
        else if(array[z] == "!"){
            array[z] == "!"
        }
        else if(array[z] == ":"){
            array[z] == ":"
        }
        else if(array[z] == "("){
            array[z] == "("
        }
        else if(array[z] == ")"){
            array[z] == ")"
        }
        else if(array[z] == "\""){
            array[z] == "\""
        }
        else if(array[z] == "\'"){
            array[z] == "\'"
        }
        else if(array[z] == ","){
            array[z] == ","
        }
        else {
            if(x == 0){
                console.log(`${array[z]} -1 = ${array[z] -1}`)
                array[z] = Number(array[z] - 1)
                if(array[z] > 26){
                    array[z] = array[z] - 26
                }
                    
                if(array[z] == 0 ){
                    array[z] = "Ç"
                }
                if(array[z] > 0 && array[z] <= 26){
                    if(array[z] == "1"){
                        array[z] = "A"
                    }
                    if(array[z] == "2"){
                        array[z] = "B"
                    }
                    if(array[z] == "3"){
                        array[z] = "C"
                    }
                    if(array[z] == "4"){
                        array[z] = "D"
                    }
                    if(array[z] == "5"){
                        array[z] = "E"
                    }
                    if(array[z] == "6"){
                        array[z] = "F"
                    }
                    if(array[z] == "7"){
                        array[z] = "G"
                    }
                    if(array[z] == "8" ){
                        array[z] = "H"
                    }
                    if(array[z] == "9" ){
                        array[z] = "I"
                    }
                    if(array[z] == "10"){
                        array[z] = "J"
                    }
                    if(array[z] == "11"){
                        array[z] = "K"
                    }
                    if(array[z] == '12'){
                        array[z] = "L"
                    }
                    if(array[z] == "13"){
                        array[z] = "M"
                    }
                    if(array[z] == "14"){
                        array[z] = "N"
                    }
                    if(array[z] == "15"){
                        array[z] = "O"
                    }
                    if(array[z] == "16"){
                        array[z] = "P"
                    }
                    if(array[z] == "17"){
                        array[z] = "Q"
                    }
                    if(array[z] == "18"){
                        array[z] = "R"
                    }
                    if(array[z] == "19"){
                        array[z] = "S"
                    }
                    if(array[z] == "20"){
                        array[z] = "T"
                    }
                    if(array[z] == "21"){
                        array[z] = "U"
                    }
                    if(array[z] == "22"){
                        array[z] = "V"
                    }
                    if(array[z] == "23"){
                        array[z] = "W"
                    }
                    if(array[z] == "24"){
                        array[z] = "X"
                    }
                    if(array[z] == "25"){
                        array[z] = "Y"
                    }
                    if(array[z] == "26"){
                        array[z] = "Z"
                    }
                    }
                
                    x++
                  
                
                
                
            }else if(x == 1){
                console.log(`${array[z]} + 9 = ${array[z] + 9}`)
                array[z] = Number(array[z]) + 9
                if(array[z] > 26){
                    array[z] = array[z] - 26
                }
                    
                if(array[z] == 0 ){
                    array[z] = "Ç"
                }
                if(array[z] > 0 && array[z] <= 26){
                    if(array[z] == "1"){
                        array[z] = "A"
                    }
                    if(array[z] == "2"){
                        array[z] = "B"
                    }
                    if(array[z] == "3"){
                        array[z] = "C"
                    }
                    if(array[z] == "4"){
                        array[z] = "D"
                    }
                    if(array[z] == "5"){
                        array[z] = "E"
                    }
                    if(array[z] == "6"){
                        array[z] = "F"
                    }
                    if(array[z] == "7"){
                        array[z] = "G"
                    }
                    if(array[z] == "8" ){
                        array[z] = "H"
                    }
                    if(array[z] == "9" ){
                        array[z] = "I"
                    }
                    if(array[z] == "10"){
                        array[z] = "J"
                    }
                    if(array[z] == "11"){
                        array[z] = "K"
                    }
                    if(array[z] == '12'){
                        array[z] = "L"
                    }
                    if(array[z] == "13"){
                        array[z] = "M"
                    }
                    if(array[z] == "14"){
                        array[z] = "N"
                    }
                    if(array[z] == "15"){
                        array[z] = "O"
                    }
                    if(array[z] == "16"){
                        array[z] = "P"
                    }
                    if(array[z] == "17"){
                        array[z] = "Q"
                    }
                    if(array[z] == "18"){
                        array[z] = "R"
                    }
                    if(array[z] == "19"){
                        array[z] = "S"
                    }
                    if(array[z] == "20"){
                        array[z] = "T"
                    }
                    if(array[z] == "21"){
                        array[z] = "U"
                    }
                    if(array[z] == "22"){
                        array[z] = "V"
                    }
                    if(array[z] == "23"){
                        array[z] = "W"
                    }
                    if(array[z] == "24"){
                        array[z] = "X"
                    }
                    if(array[z] == "25"){
                        array[z] = "Y"
                    }
                    if(array[z] == "26"){
                        array[z] = "Z"
                    }
                    }
                
                
                x++
            
                
                
            }else if(x == 2){
                console.log(`${array[z]} + 7`)
                array[z] = Number(array[z]) + 7
                if(array[z] > 26){
                    array[z] = array[z] - 26
                }
                    
                if(array[z] == 0 ){
                    array[z] = "Ç"
                }
                if(array[z] > 0 && array[z] <= 26){
                    if(array[z] == "1"){
                        array[z] = "A"
                    }
                    if(array[z] == "2"){
                        array[z] = "B"
                    }
                    if(array[z] == "3"){
                        array[z] = "C"
                    }
                    if(array[z] == "4"){
                        array[z] = "D"
                    }
                    if(array[z] == "5"){
                        array[z] = "E"
                    }
                    if(array[z] == "6"){
                        array[z] = "F"
                    }
                    if(array[z] == "7"){
                        array[z] = "G"
                    }
                    if(array[z] == "8" ){
                        array[z] = "H"
                    }
                    if(array[z] == "9" ){
                        array[z] = "I"
                    }
                    if(array[z] == "10"){
                        array[z] = "J"
                    }
                    if(array[z] == "11"){
                        array[z] = "K"
                    }
                    if(array[z] == '12'){
                        array[z] = "L"
                    }
                    if(array[z] == "13"){
                        array[z] = "M"
                    }
                    if(array[z] == "14"){
                        array[z] = "N"
                    }
                    if(array[z] == "15"){
                        array[z] = "O"
                    }
                    if(array[z] == "16"){
                        array[z] = "P"
                    }
                    if(array[z] == "17"){
                        array[z] = "Q"
                    }
                    if(array[z] == "18"){
                        array[z] = "R"
                    }
                    if(array[z] == "19"){
                        array[z] = "S"
                    }
                    if(array[z] == "20"){
                        array[z] = "T"
                    }
                    if(array[z] == "21"){
                        array[z] = "U"
                    }
                    if(array[z] == "22"){
                        array[z] = "V"
                    }
                    if(array[z] == "23"){
                        array[z] = "W"
                    }
                    if(array[z] == "24"){
                        array[z] = "X"
                    }
                    if(array[z] == "25"){
                        array[z] = "Y"
                    }
                    if(array[z] == "26"){
                        array[z] = "Z"
                    }
                    }
                
              
                x = 0
            
        }
                
                
                
            }
            
            console.log("turing ->" + array[z])
        
        
        
    })
    console.log(array)
    return array
}
