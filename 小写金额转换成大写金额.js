function change(str) {//str798
    je = "零壹贰叁肆伍陆柒捌玖";
    cdw = "万仟佰拾亿仟佰拾万仟佰拾元角分";
    var newstring = (str * 100).toString();//79800
    newstringlog = newstring.length;//5
    newdw = cdw.substr(cdw.length - newstringlog);//10
    num0 = 0;
    wan = 0;
    dxje = "";
    for (m = 1; m < newstringlog + 1; m++) {//6次
        xzf = newstring.substr(m - 1, 1);
        console.log(xzf);
        dzf = je.substr(xzf, 1);
        console.log(dzf);
        dw = newdw.substr(m - 1, 1);
        console.log(dw);
        if (dzf == '零') {
            dzf = '';
            if (dw == '亿') {

            } else if (dw == '万') {
                dzf = '';
                wan = 1;
            } else if (dw == '元') {

            } else {
                dw = '';
            }
            num0 = num0 + 1;
        } else {
            if (num0 - wan > 0) {
                if (dw != '角') {
                    dzf = '零' + dzf;
                }
            }
            num0 = 0;
        }
        dxje = dxje + dzf + dw;
    }
    if (newstring.length != 1) {
        if (newstring.substr(newstring.length - 2) == '00') {
            dxje = dxje + '整';
        } else {
            dxje = dxje;
        }
    }
    return dxje;
}

console.log(change(798));