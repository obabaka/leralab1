function Table(n){
let html = '<table border="1" bordercolor="black" cellspacing="0"><tr>';
let flag = true;
if (n % 2 === 0){
    for (i = 1; i <= n; i++){
        if (i % 2 != 0) {
        let k = 0;
        while ( k < n) {
            if (flag === true){
                html += '<td class="blue"></td><td class="blue"></td>';
                flag = false;
            }else {
                html += '<td class="white"></td><td class="white"></td>';
                flag = true;
            }
            k += 2;
        }
        flag = true;
        }else if (i % 2 === 0){
            let k = 0;
            while ( k < n) {
                if (flag === true){
                    html += '<td class="white"></td><td class="white"></td>';
                    flag = false;
                }else {
                    html += '<td class="blue"></td><td class="blue"></td>';
                    flag = true;
                }
                k += 2;
            }
            flag = true;
        }
        html += '</tr>';
    }
}else if (n % 2 != 0){
    for (i = 1; i <= n; i++){
        if (i % 2 != 0) {
            let k = 0;
            while ( k < n) {
                if (flag === true){
                    html += '<td class="blue"></td>';
                    flag = false;
                }else {
                    html += '<td class="white"></td>';
                    flag = true;
                }
                k++;
            }
        }else if (i % 2 === 0){
        let k = 0;
        while ( k < n) {
            if (flag === true){
                html += '<td class="blue"></td>';
                flag = false;
            }else {
                html += '<td class="white"></td>';
                flag = true;
            }
            k++;
        }
        }
        html += '</tr>';
    }
}
    return html;
}
document.write(Table(8));