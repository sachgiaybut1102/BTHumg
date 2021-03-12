$(document).ready(function () {
    $('#btn-cal').click(function () {
        console.log('ewe');
        var html = '';
        var a = $('#a').val();
        var b = $('#b').val();
        var c = $('#c').val();
        if (a == 0) {

            if (b == 0) {
                if (c == 0) {
                    html = ('Phương trình vô nghiệm');

                } else {
                    html = ('Phương trình vô nghiệm');
                }
            } else {
                html = ('Phương trình có nghiệm duy nhất: ' + (-c / b));
            }
        } else {
            var delta = b * b - 4 * a * c;
            if (delta > 0) {
                var x1 = (-b + Math.sqrt(delta)) / (2 * a);
                var x2 = (-b - Math.sqrt(delta)) / (2 * a);
                html = ('Phương trình có 2 nghiệm phân biệt <p>x1 = ' + x1 + '</p><p> x2 = ' + x2 + '</p>');
            } else if (delta == 0) {
                var sum = -b / 2 * a;
                html = ('Phương trình có nghiệm kép: x1 = x2 = ' + sum);
            } else {
                html = ('Phương trình vô nghiệm');
            }
        }

        $('#answer').empty().append(html);
    });


    $('#btn-cal-2').click(function () {
        var n = $('#n').val();
        $.ajax({
            type: 'GET',
            datatype: 'JSON',
            url: '/Home/Total',
            data: {
                n: n
            },
            success: function (result) {
                var sum = result.data;

                var html = 'Tổng của S = 1 ';

                if (n > 3) {
                    html += '+ 1/2 + 1/3 + ... + 1/' + n;
                    html += ' = ' + sum;
                } else {
                    if (n > 1) {
                        for (var i = 2; i <= n; i++) {
                            html += '+ 1/' + i;
                        }
                        html += ' = ' + sum;
                    }
                    
                }

                $('#answer-1').empty().append(html);
            }
        });
    });

    $('#btn-cal-3').click(function () {
        var n = $('#n-3').val();
        $.ajax({
            type: 'GET',
            datatype: 'JSON',
            url: '/Home/GetListSNT',
            data: {
                n: n
            },
            success: function (result) {
                var numes = result.data;
                var sum = 0;
                for (var i = 0; i < numes.length; i++) {
                    sum += numes[i];
                    if (sum > 100) {
                        sum -= numes[i];
                        break;
                    }
                }

                var html = numes.length > 0 ? 'Các số nguyên tố nhỏ hơn ' + n + ' là : ' : 'Không tìm thấy số nguyên tố nào < ' + n + '!';
                for (var i = 0; i < numes.length; i++) {
                    html += ' ' + numes[i];
                    if (i < numes.length - 1) {
                        html += ';';
                    }
                }
                html = '<p>' + html + '</p>';
                html += '<p>Tổng của các số nguyên tố đầu tiên với S < 100 là: ' + sum + '</p>';

                $('#answer-3').empty().append(html);
            }
        });
    });
});