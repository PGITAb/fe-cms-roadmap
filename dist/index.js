'use strict';

var React = require('react');
var playerclient = require('playerclient');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var img$v = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANOSURBVDhPhVTZUlNBFOy5WQghO6EgsgiFW/lgqQ8++tl+gA++64siVQLFkkDALJA9uWP3uSQFUXCqpm4mM9OnT58+4yaTiQ+CAHeH98CEcxwCwzEnF1rHHJCIAUn+SPBKjNPxv/nhwjD07s5OyMujCdAbAa2+x1UXaPSA/tgjFQcKiw6llL5AJuUsUDAHfA9UDAVw1vY4bgHVa4/OABgwiILpcpJMcwvASgbYKjhs5J2tlewU20CVw4SpDpjq93OPbzWPn5ceFx2PdJyXyCyVmLKPAghot+TwYdNhu+iQ5RmTYwo6Dh3aPHzc9Ph86FEnWJKpVjIOlWwEKi1HDNzqMdgNUOPU70rO4e0Th3ecWTEmKgsV+s7I4eC3x5cjjzOmnE3Coj8vO0tzkWx1mJjoDhUUOGp47F/CCOwuO3zciaRIM6NAFb4ZAifU8GvVY4HK7zCtVyv6AqtkW0pHhSlxrpG5Amr/RZmsGKx2DRw0gCazVTbBkEVoMg0rDtOv5MALAbYJnGd14/fdZusC5VCRXq9G8sgZv5hpo+vNOYGqW6c+TVY9nYhSWM0CS5TgoSF20rjAoC9XYMFFSs4RSTKlbVhVmbtM/TIEk23mvTc/tL/AYpaXHDWnhLIe3WPWk/hylYYOycz/wZuNqW/lUdVGMPJ6IJA4N5SSfCihbfP24mND2fWVJVNW21oDECcQO/lLGqklZW6BqxkeGwrcZ7qqvOTLUVfJYG27SF8V2c+qqCLW6NOLG+pMmz3EVgx7BLyiRw/pV4Gv0zWynciRqTNQ+VFGrzKyDtYJLOFlEekl5vpqrYDaP2oCp6x6zHnzdok4prF8p/S3CrB2k2f32CnqlmobuKQkamE1iL6S6IR+1v6PumeHActph2fLbA42iZha7/OdsujnZPlpL8QhGYwpWpHpbNK365xqXT2FCnRqwfjGkrmIvF+XX51523r/7iulSqpV9698VAAGSsSi1lVGIx4djJ3ZRgWWXG/WHJ6ybdXC5iJqPntPVRRP4KbYEFBsqtSrTVMLXHrKNlFhozdhg5Lpa+65tZPGDHQ6BN4l4xZbTr1soFyrQMlb0DydUqR+JWr5r+77C1RDHpQcNvlba6WsYwKQF/Uga84DAsAfd2G7QC6XLFcAAAAASUVORK5CYII=";

var img$u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPZSURBVDhPrZRtTFNXGMf/7S3QWqwoOEHMyBQHWgku7oOdWTTKdKAS0cwMdca3D85my4wsRk3clA9bYvykJht+2AvLlk23LFGM1CUzYsSYbBZXdIoiFstbuhboLeXe23vPnnPvZTCpzT7sn57m3Oc853fOc57nHAsj4X+UpmlICx0Y0fDr/RgGhlUoGuCyW+AutMPzosP0mKznQv09o3jnmxAC90TAYhrHxL2zBZzYVIC6FbmGbYJSQnf80IuvLvYDNpOWpGGB+hZqKnellmEFRjXMLLKj5UAxSmbYDF/SJOiahifwXY8CmTSJAGs907HTk4OyQgem0CJdgwp87TGcuBLGaFSmGbSQIKD35CLkTzMYTCMch3Idahpg2O5n2N3GhP3trCWYMEdSq6IhyLArwL5oFdnHvaeZ585m9mPkmj6m7zQUS2LOh/eMUJ0COo69jOKcDGPpNAr0qTgQ2w5f9znAmkmxK3jwWicoTuBMC4VMZ8RTfKa28D8BubzRbfCFfqYzpoQJ2WRREJbDBvTzVoJSL2uWHfuW5nBTWtHyWNxWg2v9FwjmMo1xuHNXw+MqN6CRYEJP6jo3Xy29JE1FuX8d2qK/EHCqYVRjeGXGctwpv6x/6lAI1Aj6git92KNMwZK2agQGr5rhkgi4ck4V6tRz2H8+opsMKI+HqiMcV/XPVBJVCQt/r0T7UIu5Q9oFhby8oArvSY3Y+ukjunGK7qtDhTzKHEFvdtANSqFoMo5F/jfxWLxFzk6yEJB2WDl7A45Yv0PNyUeAQ8VC8/rq0HepyKlg0d2VQBO/mhMUSYqUlLV4Iv5G3mNAEZUFW3Bp/tfwfhskkwKry4bqBfxImAHdu4ygVupmWLCjMYSYTBNJfylDKLm9CkHx9gRgHGvya3Gp5Cw+ao6io2tYj3Lj4mlw0vWlsjeg7vwsbF6Rpxd/+OkI1p/qR08yggX+CoRH7hNwigkcxtaiXbhcehb1zYM4/j3tkr8RdgENbxdwFA/433e/tP4h+sJW/HTQgS091eiPPxgHaiJ2z/WiVvoEH5wPIvDnkAGku+47VIw35vNI6PPZByVBb0Qg1ofVnaswmAjRkvzgOTCOPS95Udp5FHVfdlKyqEp4xWTb0OQtQlXpeH2nfPrcf2zE3QgV9j9nOIx9cw8iN1CH+kbKso1omRbUvJ6H02/Nwmzn+LPHlRKadXMJZOkh7ZLKTB3B+8VHsEE+jKPNT1E03YqKeU6sL5uKXIeejknScZIkMd5kWWZMYawpcoPNvPUqy2ktY8e7P2P0PjKWVOmPBvWWpJ+s+4/NnciQJIn9DSQYDzIsG7x7AAAAAElFTkSuQmCC";

var img$t = "data:image/png;base64,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";

var img$s = "data:image/png;base64,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";

var img$r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAOUSURBVDhPjVX9U1tFFD27+14SKJIQwFJKStugVFuxM/7g//+jM3ac0UFH2wrlI7QJSfNBIMl7u+u5NwnFStULjzd52T3v3LPnXEyWZdE5h48reo84GiEMh3qPIYdJHMzCol62WIK5ZZ+UgiZJMv0UI0KeI15dIXTb8N0ewqA/A/UKYghml8pw1QpsmZe8RPYbM8VgfQCdAYbhBXzjBNnha4R2CzHLAZvAWMMlEcgmBC7Crt9FUnuI9N4mzHKZS2bEWNegCngxIOApJvs/Iz/6E3F8RVbL3FSBKRSByQSh00K4uoS5s0TQOgq7u0i2tuEqlRnkDVDf7yE/PsL4pxfI91/AffEV0iffIK09IABbtI46R5UmOzzA5I99xHcN2I37KH73PUp7z2eQbGyuhe+ca8u+04SrP5kCPt5BwjZdeQX2M+pINm59HWl9B8Wn3ypgGA6Qn7xBdtYAxVEZLclStwny1jl8qwnDh+nT5wSsw61UAeonLPWQrIVNC0hWV5E8eoxk+xFlKcFT++zNoZITkpSfLPt9hPfniJdDGGpY2PkSbnVdD8RIJ/OTlTt3mAKBKytwmzW6YFU1zo8PYIJyhaVKBOwR8JKfyIaLXLVKRil7+JcicwG0a3w57RbenhJJfkRTbg1jGpxmFwZukYfyCVP/raTNEj27uEQd+Xt5MftCD4p/fVCBp+39D8B5GeHE9UJv1roUn/ID3yjtxDxTb+oL/qu4JtK3cULZyMwUFqbgLJEdiWhTXJxmnQ7wg4HG8nrVbUVQ3+3AN5uIZGzvbmjqpHEeFEneWYZdoRepp2R98up3BDriU4RjCHxxH/7smL5u6b7k4Q7Bp0drZadZKCJZW9M8yxfZy9+QNRp0xXu+hNGlM8KIQ4Z3L7OhfY789AQ514gETnz7YFsBFW8e01wWHh1g/OsvCExHUmemN7eYe3ahjkiouUwwAnc4wd6dsfW3OgMKX++h9GxPfS11DSqH5HtdZK9eYvzjD9SXQ0MswxDYSlUHirCSkIR2ExhzWtGj6e4zFJg+ibMKehNUaIcso5Y9eDLOTo7YZptAIxhPhrSMHIgkTJjbNc6ErRpSpsqWOfpmLKU+gM6LhxPGI+pFzSiDuCH2uzofICljjN3GPST3a2T3OQNAK3Em3Kx/grL0X4l6kBfBZFDLoIliGRksTJ7OBQ6X29J3K6h6SUBoHZn2Aqhpk2e8qx81TZryjwr4CzqX5piSv+iRAAAAAElFTkSuQmCC";

var img$q = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAANxSURBVDhPrVVvSF1lGP+de7x2vd67q2vuSv8kWOLcdETOL22CVCARRBZCsy8hQVA2aLBNYiMbIji2BY59WUqEaX5QZh8iKtu0osYiReFqalpt7DJh3XuuHr33nnPP0/O+53S85t3yQ7/LA+95/vz4ve/zvO9ViIH/EZZlweOst8C82IO1w/VIKF7EFUWaxqY/WYv0mbNAxnIyc0AozYY5+j1p3hDFOPTXPUzENChk9PY7VRvIZDK0aftG1wXoJ96Va+EU2/A2vAB1bzU7VFg3f4UxdAUZpKHILMDX1AzfYJ/zZW/fVWp+NuKqEJZ8u40oZTrRzUh3dVOcc4TRS6/TL8sRuqJ9ZwctFikXiXXSPKpLaA5/Id33xU8TREdP06nEAGE8QBjNp6rJ52VIkibbO9zzSrV9IAPbwfF4L+FqAZOW2Patn6bWb9qkK8VhqTBR/KBM3g5aFzuZRBDuZislXAuR/8d9ZPD2PUgaMGJ3ZGPym16zT/s/8NZSJ7r/OAPkBfmL20kpqP5STNaOIY876EF02e2kp6rCWd0bLb+9j0u/M6EaABQmtNahFpUh4vsETwxHnKlRsi5U1jIXmudOovfPLla4g7+YMLMO/85yzAvC6gYYSzMyz4OHSl0ua8p25sKr88fRf/uiQ8h7s5IoLqrArO9jPFb5DDTEoB7cayeLQ18pecRuVGGRbMK/8eJsq+wsxsNOU3ZQ8Y1aumXpROVPy6nRfEGitRRlOF/efe87rVKtqceRPvaecLlomHkTI9FepymsMKMjXLgPszXX8fDAKGJzP8i8vPp6oCBfqLSVkp6khNfnDj/1DUn3c5E3WCEPdpbCRyfr6a4I/hzhG6XIfHGzrOlFWSPuvlQK/wPwD45ItV7xbVqom2vB13cGWEIhO8QZ6igLH8LEgS+xs/0C4jWVnC9+XN5xHsr+x0WlDUnvwDz3IdHQ51S71MKqglkKA7RnoZFio2Nk+MOb34ijx5xqG0LpJlKBukVuytXCDcKxIFUuNFHiqzFKwusSavkFZH406FRtYAupbhlMEmKyXTYhk++feYW0T4eY0D671Zo6Sndflq9RLuRUWj3VyC+OSvhGoaemX5YjQndXiWKajG8HSjQa/Wf2oXLfAqEQerQRBNQgjvifxaqeQNrDDy//lfALzFrlyDgVW0FE+BsiJWl5N6iAXAAAAABJRU5ErkJggg==";

var img$p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB+UlEQVQ4T62UT0gbURDGv7eJMdmo1KCChlaxIFgKVvTgRRBPlkovUkEvPRRaSj31JHoreGsLglIvgvgHvCiIHgSvHjxUtKRgCz2IttpUm7QxRrPZP30zu0o0FbLi7xBmvp35mLfzssKS4Ia40iw6OYLfS7NIbX2yBVnmv1uPUEcXql7229olcsz+rq7gW183hK8QSkCF8BZACCG9ZJmhwzw9gXGUQPWbUZR3PXW6bC6YRac/YGfoNXyVtyEUxVFzoZbMr31U9DzHnYG3jpplltxYw1ZPG3zhap4kH7ToHmqGxlD2uJfzc7ONlrB9LI+HH+SDZZk8YXPkiHM+S3xlAWYm7cqIEEKBohbh58Qw52wWW56DJxBkwS2KP4D48rwd0w+tn7Z2Hagv9SXCMZsZyQTNzIJbaFn0igg285bc4kt5HWgJSqGfYzZT7zXC0jMsuMXK6LL/AcdsFnrUDSOVZMEt5mkKoYdPOD6/Z5utNfJleuX18PKDfLBME3rsAE2bcc55MqJufAna3q79H8wTLfoDte+nnCzLTK27j9p3k9C+b8MyDEf9PzRRen8X4VeDKG3vdNSsY55xHPmIr89kgWxQ1KB9/+jayDJaEn01LC3NE2UbETlmZxwuzCC2OIvjz+vQE3/gCRZDrW/g71lF7wun6iJXmrkH+AdXRc6pgk0wZgAAAABJRU5ErkJggg==";

var img$o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAA/UlEQVQ4T2P8DwQMVAJMUJoqgKqGke3N53N7Gf68e8MgEhTHwKmsCRYjy7Cbaf4MP+/dZGBXUGFQn7MFKkqGYVcCzRn+ff7IwMDCyqC34zJUFAJIMuyipx4D4+9fQF0MDHq7b0BFEYBowy66aTEw/vsHZuvtwTQIBIiKzYuuhA0CAYKGgQ36T9ggEMBr2EU3HaINAgGchl3yNgR67Q8DIyiwiTAIBLAadjXMjoHh53ewQbpYYg0XwDDsTnEcw993rxiYWJhJMggEUAx7v3cTw7eLpxjYxCQZdHZchYqSAEDpDAY+Xzj5/9WaBVAe6YDsjI4N4E0apAIqGsbAAACSgKjQ3RRJYQAAAABJRU5ErkJggg==";

var isStatisticData$3 = function (type, data, arrayIndex) {
    var _a;
    if (!((_a = data.roadmapdata.inGame[type][arrayIndex]) === null || _a === void 0 ? void 0 : _a.v))
        return false;
    return true;
};
var renderBacAndDTRoadmap = function (statistic) {
    var indents1 = [];
    var indents2 = [];
    var indents3 = [];
    var indents4 = [];
    var indents5 = [];
    var indents6 = [];
    var indents7 = [];
    var indents8 = [];
    var indents9 = [];
    var indents10 = [];
    var indents11 = [];
    var indents12 = [];
    for (var i = 1; i <= 32; i++) {
        indents1.push(React__default['default'].createElement("div", { className: "column-abcd", key: i.toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[i * 6] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[i * 6] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigRoad[i * 6].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6].t === 0
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[i * 6].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6].t === 1
                            ? img$u
                            : statistic.roadmapdata.inGame.bigRoad[i * 6].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6].t === 0
                                ? img$r
                                : img$q, alt: "icon" })));
        indents2.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 1).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[i * 6 + 1] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 1)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[i * 6 + 1] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 1)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].t === 0
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].t === 1
                            ? img$u
                            : statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 1].t === 0
                                ? img$r
                                : img$q, alt: "icon" })));
        indents3.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 2).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[i * 6 + 2] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 2)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[i * 6 + 2] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 2)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].t === 0
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].t === 1
                            ? img$u
                            : statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 2].t === 0
                                ? img$r
                                : img$q, alt: "icon" })));
        indents4.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 3).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[i * 6 + 3] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 3)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[i * 6 + 3] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 3)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].t === 0
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].t === 1
                            ? img$u
                            : statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 3].t === 0
                                ? img$r
                                : img$q, alt: "icon" })));
        indents5.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 4).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[i * 6 + 4] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 4)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[i * 6 + 4] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 4)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].t === 0
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].t === 1
                            ? img$u
                            : statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 4].t === 0
                                ? img$r
                                : img$q, alt: "icon" })));
        indents6.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 5).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[i * 6 + 5] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 5)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[i * 6 + 5] === null ||
                    !isStatisticData$3('bigRoad', statistic, i * 6 + 5)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].t === 0
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].v === 'p' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].t === 1
                            ? img$u
                            : statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].v === 'b' && statistic.roadmapdata.inGame.bigRoad[i * 6 + 5].t === 0
                                ? img$r
                                : img$q, alt: "icon" })));
        indents7.push(React__default['default'].createElement("div", { className: "column-abcd topBlack", key: (i + 32 * 8).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[i * 2 * 6] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[i * 2 * 6] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[i * 2 * 6].v === 'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6] === null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6] === null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6].v === 'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 1)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 1)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1].v === 'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1] === null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 1)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1] === null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 1)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1].v ===
                        'p'
                        ? img$v
                        : img$r, alt: "icon" })));
        indents8.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 9).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 2)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 2)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 2].v === 'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 2] === null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 2)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 2] === null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 2)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 2].v ===
                        'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 2] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 1 + 2)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 2] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 1 + 2)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 2].v === 'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 2] ===
                    null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 1 + 2)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 2] ===
                    null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 1 + 2)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 2]
                        .v === 'p'
                        ? img$v
                        : img$r, alt: "icon" })));
        indents9.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 10).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 4)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 4)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 4].v === 'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 4] === null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 4)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 4] === null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 4)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 4].v ===
                        'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 4] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 1 + 4)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 4] === null ||
                    !isStatisticData$3('bigEye', statistic, i * 2 * 6 + 1 + 4)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[i * 2 * 6 + 1 + 4].v === 'p'
                        ? img$v
                        : img$r, alt: "icon" }),
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 4] ===
                    null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 1 + 4)
                    ? 'srcInvisibleSmall'
                    : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 4] ===
                    null ||
                    !isStatisticData$3('bigEye', statistic, (i * 2 + 1) * 6 + 1 + 4)
                    ? img$v
                    : statistic.roadmapdata.inGame.bigEye[(i * 2 + 1) * 6 + 1 + 4]
                        .v === 'p'
                        ? img$v
                        : img$r, alt: "icon" })));
        if (i < 17) {
            indents10.push(React__default['default'].createElement("div", { className: "column-abcd topBlack", key: (i + 32 * 11).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[i * 2 * 6] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[i * 2 * 6] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[i * 2 * 6].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6] === null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6] === null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[i * 2 * 6 + 1] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 1)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[i * 2 * 6 + 1] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 1)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[i * 2 * 6 + 1].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 1)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 1)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1].v ===
                            'p'
                            ? img$t
                            : img$p, alt: "icon" })));
            indents11.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 12).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[i * 2 * 6 + 2] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 2)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[i * 2 * 6 + 2] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 2)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[i * 2 * 6 + 2].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 2] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 2)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 2] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 2)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 2].v ===
                            'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 2] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 1 + 2)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 2] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 1 + 2)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 2].v ===
                            'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 2] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 1 + 2)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 2] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 1 + 2)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 2]
                            .v === 'p'
                            ? img$t
                            : img$p, alt: "icon" })));
            indents12.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 13).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[i * 2 * 6 + 4] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 4)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[i * 2 * 6 + 4] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 4)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[i * 2 * 6 + 4].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 4] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 4)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 4] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 4)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 4].v ===
                            'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 4] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 1 + 4)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 4] === null ||
                        !isStatisticData$3('small', statistic, i * 2 * 6 + 1 + 4)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[i * 2 * 6 + 1 + 4].v ===
                            'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 4] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 1 + 4)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 4] ===
                        null ||
                        !isStatisticData$3('small', statistic, (i * 2 + 1) * 6 + 1 + 4)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[(i * 2 + 1) * 6 + 1 + 4]
                            .v === 'p'
                            ? img$t
                            : img$p, alt: "icon" })));
        }
        else {
            var j = i - 16;
            if (i === 17) {
                indents10.push(React__default['default'].createElement("div", { className: "column-abcd topBlack leftBlack", key: (i + 32 * 11).toString() },
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6].v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6].v ===
                                'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1].v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" })));
                indents11.push(React__default['default'].createElement("div", { className: "column-abcd leftBlack", key: (i + 32 * 12).toString() },
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 2)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 2)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 2].v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 2)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 2)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1 + 2)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1 + 2)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2].v ===
                                'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1 + 2)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1 + 2)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" })));
                indents12.push(React__default['default'].createElement("div", { className: "column-abcd leftBlack", key: (i + 32 * 13).toString() },
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 4)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 4)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 4].v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 4)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 4)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1 + 4)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1 + 4)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4].v ===
                                'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1 + 4)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1 + 4)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" })));
            }
            else {
                indents10.push(React__default['default'].createElement("div", { className: "column-abcd topBlack", key: (i + 32 * 11).toString() },
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6].v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6] === null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6].v ===
                                'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1].v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" })));
                indents11.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 12).toString() },
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 2)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 2] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 2)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 2].v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 2)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 2)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 2]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1 + 2)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1 + 2)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 2].v ===
                                'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1 + 2)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1 + 2)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 2]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" })));
                indents12.push(React__default['default'].createElement("div", { className: "column-abcd", key: (i + 32 * 13).toString() },
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 4)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 4] === null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 4)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 4].v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 4)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 4)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 4]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1 + 4)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, j * 2 * 6 + 1 + 4)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[j * 2 * 6 + 1 + 4].v ===
                                'p'
                                ? img$s
                                : img$o, alt: "icon" }),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1 + 4)
                            ? 'srcInvisibleSmall'
                            : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4] ===
                            null ||
                            !isStatisticData$3('small', statistic, (j * 2 + 1) * 6 + 1 + 4)
                            ? img$s
                            : statistic.roadmapdata.inGame.small[(j * 2 + 1) * 6 + 1 + 4]
                                .v === 'p'
                                ? img$s
                                : img$o, alt: "icon" })));
            }
        }
    }
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[0] === null ||
                        !isStatisticData$3('bigRoad', statistic, 0)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[0] === null ||
                        !isStatisticData$3('bigRoad', statistic, 0)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[0].v === 'p' && statistic.roadmapdata.inGame.bigRoad[0].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[0].v === 'p' && statistic.roadmapdata.inGame.bigRoad[0].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[0].v === 'b' && statistic.roadmapdata.inGame.bigRoad[0].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" })),
            indents1,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[198] === null ||
                        !isStatisticData$3('bigRoad', statistic, 198)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[198] === null ||
                        !isStatisticData$3('bigRoad', statistic, 198)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[198].v === 'p' && statistic.roadmapdata.inGame.bigRoad[198].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[198].v === 'p' && statistic.roadmapdata.inGame.bigRoad[198].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[198].v === 'b' && statistic.roadmapdata.inGame.bigRoad[198].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[1] === null ||
                        !isStatisticData$3('bigRoad', statistic, 1)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[1] === null ||
                        !isStatisticData$3('bigRoad', statistic, 1)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[1].v === 'p' && statistic.roadmapdata.inGame.bigRoad[1].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[1].v === 'p' && statistic.roadmapdata.inGame.bigRoad[1].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[1].v === 'b' && statistic.roadmapdata.inGame.bigRoad[1].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" })),
            indents2,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[199] === null ||
                        !isStatisticData$3('bigRoad', statistic, 199)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[199] === null ||
                        !isStatisticData$3('bigRoad', statistic, 199)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[199].v === 'p' && statistic.roadmapdata.inGame.bigRoad[199].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[199].v === 'p' && statistic.roadmapdata.inGame.bigRoad[199].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[199].v === 'b' && statistic.roadmapdata.inGame.bigRoad[199].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[2] === null ||
                        !isStatisticData$3('bigRoad', statistic, 2)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[2] === null ||
                        !isStatisticData$3('bigRoad', statistic, 2)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[2].v === 'p' && statistic.roadmapdata.inGame.bigRoad[2].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[2].v === 'p' && statistic.roadmapdata.inGame.bigRoad[2].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[2].v === 'b' && statistic.roadmapdata.inGame.bigRoad[2].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" })),
            indents3,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[200] === null ||
                        !isStatisticData$3('bigRoad', statistic, 200)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[200] === null ||
                        !isStatisticData$3('bigRoad', statistic, 200)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[200].v === 'p' && statistic.roadmapdata.inGame.bigRoad[200].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[200].v === 'p' && statistic.roadmapdata.inGame.bigRoad[200].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[200].v === 'b' && statistic.roadmapdata.inGame.bigRoad[200].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[3] === null ||
                        !isStatisticData$3('bigRoad', statistic, 3)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[3] === null ||
                        !isStatisticData$3('bigRoad', statistic, 3)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[3].v === 'p' && statistic.roadmapdata.inGame.bigRoad[3].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[3].v === 'p' && statistic.roadmapdata.inGame.bigRoad[3].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[3].v === 'b' && statistic.roadmapdata.inGame.bigRoad[3].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" })),
            indents4,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[201] === null ||
                        !isStatisticData$3('bigRoad', statistic, 201)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[201] === null ||
                        !isStatisticData$3('bigRoad', statistic, 201)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[201].v === 'p' && statistic.roadmapdata.inGame.bigRoad[201].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[201].v === 'p' && statistic.roadmapdata.inGame.bigRoad[201].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[201].v === 'b' && statistic.roadmapdata.inGame.bigRoad[201].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[4] === null ||
                        !isStatisticData$3('bigRoad', statistic, 4)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[4] === null ||
                        !isStatisticData$3('bigRoad', statistic, 4)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[4].v === 'p' && statistic.roadmapdata.inGame.bigRoad[4].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[4].v === 'p' && statistic.roadmapdata.inGame.bigRoad[4].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[4].v === 'b' && statistic.roadmapdata.inGame.bigRoad[4].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" })),
            indents5,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[202] === null ||
                        !isStatisticData$3('bigRoad', statistic, 202)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[202] === null ||
                        !isStatisticData$3('bigRoad', statistic, 202)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[202].v === 'p' && statistic.roadmapdata.inGame.bigRoad[202].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[202].v === 'p' && statistic.roadmapdata.inGame.bigRoad[202].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[202].v === 'b' && statistic.roadmapdata.inGame.bigRoad[202].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[5] === null ||
                        !isStatisticData$3('bigRoad', statistic, 5)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[5] === null ||
                        !isStatisticData$3('bigRoad', statistic, 5)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[5].v === 'p' && statistic.roadmapdata.inGame.bigRoad[5].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[5].v === 'p' && statistic.roadmapdata.inGame.bigRoad[5].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[5].v === 'b' && statistic.roadmapdata.inGame.bigRoad[5].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" })),
            indents6,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigRoad[203] === null ||
                        !isStatisticData$3('bigRoad', statistic, 203)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.bigRoad[203] === null ||
                        !isStatisticData$3('bigRoad', statistic, 203)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigRoad[203].v === 'p' && statistic.roadmapdata.inGame.bigRoad[203].t === 0
                            ? img$v
                            : statistic.roadmapdata.inGame.bigRoad[203].v === 'p' && statistic.roadmapdata.inGame.bigRoad[203].t === 1
                                ? img$u
                                : statistic.roadmapdata.inGame.bigRoad[203].v === 'b' && statistic.roadmapdata.inGame.bigRoad[203].t === 0
                                    ? img$r
                                    : img$q, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd topBlack" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[0] === null ||
                        !isStatisticData$3('bigEye', statistic, 0)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[0] === null ||
                        !isStatisticData$3('bigEye', statistic, 0)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[0].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[6] === null ||
                        !isStatisticData$3('bigEye', statistic, 6)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[6] === null ||
                        !isStatisticData$3('bigEye', statistic, 6)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[6].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[1] === null ||
                        !isStatisticData$3('bigEye', statistic, 1)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[1] === null ||
                        !isStatisticData$3('bigEye', statistic, 1)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[1].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[7] === null ||
                        !isStatisticData$3('bigEye', statistic, 7)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[7] === null ||
                        !isStatisticData$3('bigEye', statistic, 7)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[7].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" })),
            indents7,
            React__default['default'].createElement("div", { className: "columnRight-abcd topBlack" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[396] === null ||
                        !isStatisticData$3('bigEye', statistic, 396)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[396] === null ||
                        !isStatisticData$3('bigEye', statistic, 396)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[396].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[402] === null ||
                        !isStatisticData$3('bigEye', statistic, 402)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[402] === null ||
                        !isStatisticData$3('bigEye', statistic, 402)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[402].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[397] === null ||
                        !isStatisticData$3('bigEye', statistic, 397)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[397] === null ||
                        !isStatisticData$3('bigEye', statistic, 397)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[397].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[403] === null ||
                        !isStatisticData$3('bigEye', statistic, 403)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[403] === null ||
                        !isStatisticData$3('bigEye', statistic, 403)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[403].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[2] === null ||
                        !isStatisticData$3('bigEye', statistic, 2)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[2] === null ||
                        !isStatisticData$3('bigEye', statistic, 2)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[2].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[8] === null ||
                        !isStatisticData$3('bigEye', statistic, 8)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[8] === null ||
                        !isStatisticData$3('bigEye', statistic, 8)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[8].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[3] === null ||
                        !isStatisticData$3('bigEye', statistic, 3)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[3] === null ||
                        !isStatisticData$3('bigEye', statistic, 3)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[3].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[9] === null ||
                        !isStatisticData$3('bigEye', statistic, 9)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[9] === null ||
                        !isStatisticData$3('bigEye', statistic, 9)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[9].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" })),
            indents8,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[398] === null ||
                        !isStatisticData$3('bigEye', statistic, 398)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[398] === null ||
                        !isStatisticData$3('bigEye', statistic, 398)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[398].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[404] === null ||
                        !isStatisticData$3('bigEye', statistic, 404)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[404] === null ||
                        !isStatisticData$3('bigEye', statistic, 404)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[404].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[399] === null ||
                        !isStatisticData$3('bigEye', statistic, 399)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[399] === null ||
                        !isStatisticData$3('bigEye', statistic, 399)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[399].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[405] === null ||
                        !isStatisticData$3('bigEye', statistic, 405)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[405] === null ||
                        !isStatisticData$3('bigEye', statistic, 405)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[405].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[4] === null ||
                        !isStatisticData$3('bigEye', statistic, 4)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[4] === null ||
                        !isStatisticData$3('bigEye', statistic, 4)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[4].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[10] === null ||
                        !isStatisticData$3('bigEye', statistic, 10)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[10] === null ||
                        !isStatisticData$3('bigEye', statistic, 10)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[10].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[5] === null ||
                        !isStatisticData$3('bigEye', statistic, 5)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[5] === null ||
                        !isStatisticData$3('bigEye', statistic, 5)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[5].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[11] === null ||
                        !isStatisticData$3('bigEye', statistic, 11)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[11] === null ||
                        !isStatisticData$3('bigEye', statistic, 11)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[11].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" })),
            indents9,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[400] === null ||
                        !isStatisticData$3('bigEye', statistic, 400)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[400] === null ||
                        !isStatisticData$3('bigEye', statistic, 400)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[400].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[406] === null ||
                        !isStatisticData$3('bigEye', statistic, 406)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[406] === null ||
                        !isStatisticData$3('bigEye', statistic, 406)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[406].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[401] === null ||
                        !isStatisticData$3('bigEye', statistic, 401)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[401] === null ||
                        !isStatisticData$3('bigEye', statistic, 401)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[401].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bigEye[407] === null ||
                        !isStatisticData$3('bigEye', statistic, 407)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.bigEye[407] === null ||
                        !isStatisticData$3('bigEye', statistic, 407)
                        ? img$v
                        : statistic.roadmapdata.inGame.bigEye[407].v === 'p'
                            ? img$v
                            : img$r, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd topBlack" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[0] === null ||
                        !isStatisticData$3('small', statistic, 0)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[0] === null ||
                        !isStatisticData$3('small', statistic, 0)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[0].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[6] === null ||
                        !isStatisticData$3('small', statistic, 6)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[6] === null ||
                        !isStatisticData$3('small', statistic, 6)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[6].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[1] === null ||
                        !isStatisticData$3('small', statistic, 1)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[1] === null ||
                        !isStatisticData$3('small', statistic, 1)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[1].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[7] === null ||
                        !isStatisticData$3('small', statistic, 7)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[7] === null ||
                        !isStatisticData$3('small', statistic, 7)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[7].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" })),
            indents10,
            React__default['default'].createElement("div", { className: "columnRight-abcd topBlack" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[192] === null ||
                        !isStatisticData$3('roach', statistic, 192)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[192] === null ||
                        !isStatisticData$3('roach', statistic, 192)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[192].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[198] === null ||
                        !isStatisticData$3('roach', statistic, 198)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[198] === null ||
                        !isStatisticData$3('roach', statistic, 198)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[198].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[193] === null ||
                        !isStatisticData$3('roach', statistic, 193)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[193] === null ||
                        !isStatisticData$3('roach', statistic, 193)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[193].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[199] === null ||
                        !isStatisticData$3('roach', statistic, 199)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[199] === null ||
                        !isStatisticData$3('roach', statistic, 199)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[199].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[2] === null ||
                        !isStatisticData$3('small', statistic, 2)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[2] === null ||
                        !isStatisticData$3('small', statistic, 2)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[2].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[8] === null ||
                        !isStatisticData$3('small', statistic, 8)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[8] === null ||
                        !isStatisticData$3('small', statistic, 8)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[8].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[3] === null ||
                        !isStatisticData$3('small', statistic, 3)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[3] === null ||
                        !isStatisticData$3('small', statistic, 3)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[3].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[9] === null ||
                        !isStatisticData$3('small', statistic, 9)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[9] === null ||
                        !isStatisticData$3('small', statistic, 9)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[9].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" })),
            indents11,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[194] === null ||
                        !isStatisticData$3('roach', statistic, 194)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[194] === null ||
                        !isStatisticData$3('roach', statistic, 194)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[194].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[200] === null ||
                        !isStatisticData$3('roach', statistic, 200)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[200] === null ||
                        !isStatisticData$3('roach', statistic, 200)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[200].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[195] === null ||
                        !isStatisticData$3('roach', statistic, 195)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[195] === null ||
                        !isStatisticData$3('roach', statistic, 195)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[195].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[201] === null ||
                        !isStatisticData$3('roach', statistic, 201)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[201] === null ||
                        !isStatisticData$3('roach', statistic, 201)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[201].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }))),
        React__default['default'].createElement("div", { className: "row-abcd" },
            React__default['default'].createElement("div", { className: "columnLeft-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[4] === null ||
                        !isStatisticData$3('small', statistic, 4)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[4] === null ||
                        !isStatisticData$3('small', statistic, 4)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[4].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[10] === null ||
                        !isStatisticData$3('small', statistic, 10)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[10] === null ||
                        !isStatisticData$3('small', statistic, 10)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[10].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[5] === null ||
                        !isStatisticData$3('small', statistic, 5)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[5] === null ||
                        !isStatisticData$3('small', statistic, 5)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[5].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.small[11] === null ||
                        !isStatisticData$3('small', statistic, 11)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.small[11] === null ||
                        !isStatisticData$3('small', statistic, 11)
                        ? img$t
                        : statistic.roadmapdata.inGame.small[11].v === 'p'
                            ? img$t
                            : img$p, alt: "icon" })),
            indents12,
            React__default['default'].createElement("div", { className: "columnRight-abcd" },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[196] === null ||
                        !isStatisticData$3('roach', statistic, 196)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[196] === null ||
                        !isStatisticData$3('roach', statistic, 196)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[196].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[202] === null ||
                        !isStatisticData$3('roach', statistic, 202)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[202] === null ||
                        !isStatisticData$3('roach', statistic, 202)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[202].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[197] === null ||
                        !isStatisticData$3('roach', statistic, 197)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[197] === null ||
                        !isStatisticData$3('roach', statistic, 197)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[197].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" }),
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.roach[203] === null ||
                        !isStatisticData$3('roach', statistic, 203)
                        ? 'srcInvisibleSmall'
                        : 'srcVisibleSmall', src: statistic.roadmapdata.inGame.roach[203] === null ||
                        !isStatisticData$3('roach', statistic, 203)
                        ? img$s
                        : statistic.roadmapdata.inGame.roach[203].v === 'p'
                            ? img$s
                            : img$o, alt: "icon" })))));
};

var img$n = "data:image/png;base64,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";

var img$m = "data:image/png;base64,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";

var img$l = "data:image/png;base64,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";

var img$k = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAWoSURBVFhH1ZlrbBRVFMf/d1r64lXog4pCGwJFoaVA2tpAqrxqRUwoWh+oiUbTKmj4oJgmanygfmiNMUaJ2rRQDYlpJCQgDy2IYGmppGIlRRpUkFKhT2ALbaEtcz2XuTu7W2Z2Z2e3pPySzd65u7PznzPnnsddpqoqZ4zhdiEogq9fB06cAdq6gC4HR8clBkcPR/QYhtjxHDHRDHfEADMTgRBFnmQT24L7rgJ1jcDBBo7qRg5HL5efmBM9muG+FHrNY8hKASLC5Ad+4Lfg/gGgci/H5iqObgsizRDiX1jOkL+EYVSonLSAX4J3HgK+2qHi/CX7Qody50SGNXkKHsySEz6wJPhqP7ChnKPqd1XOBJ+HMxW88RxDmA9r+xTcdgFY/znHiZbhE+tkThLDR2sVWqRywgCvgs+2AQUlKjovB88FfDGJIkp5kYIEiipGmAaZnj7gtY38looVtNH6EE+075qcGIKhYJU0vlmq4lTr8LuBEU3/qXivzNhQhi5RvgP4YidlAxuEjwLW5Wm/1+lgFP7s3/Srjyp4KtdT200WvuAAKvbav4hY5U/kKDdeuffKSZuU7aFY3yMPJDcJLtsh/OfW+q0ZIjFt3ikPJB6Cm1uBbTUjQ6yTyoOUqKhGceIheFctMChW3Aiif5Djx8PygPAQ/MsfI0uskwMNrjWlCxZJ4q/ztyaMhYYAE0fLAws0NnO0X9TGuuAaP6z7+mMM2zYoKC5UkDlDTlpgTASl+XyGH4pDULLG4+H6pPaY9u6ycLscWCB1OsPUBIal6eY1iBE9lL3S72GIHgfMTWZYlmb9fKc+XXAnxV8rhFOcTZ6ijXv6OI6e0sZW4PQQS7e7nuTL+QpGkXtYoVOWtLrgdos1bnoy+WCoZpkjxymq+JkQ9x/j+PO0dq0pk4CVWdas3EGtl0AX3NUtBz5YNNfle4fo4nao2OU675nlChQLmjsozQtcV79N0AVHhFt7NNlyoXByyJrj9iws3KK5VTv3rnhguYXFGyUbVl1wPLXjvsiaCcRO0MZN1NZ3XtbGdqjc5+YWQyoyI+JkF6ILjh3v+6TVy1wetO+IHNhkex3HFdl1z5jKkJp4Y2hK3HjtXVcQR62JN5LiGRbM0ca9VzkVSYFlRdHY/lQvD4i8bJcxjIiV+vRvpU2XAxNeWsngLPR31wCXqYUKlN2HXTedk6kV/2bMkfp0wZmzxU6MsZUXp1JWytA+u9bPsSWAAt+d3/4BznVo46gIhgyTND8uimE+rR+BLjiM7m4hpU0jnnZbFJuooG6h1j9Y1DW6Ft+CFOPrZ89mCJEZ0cNxFs03PqHwYxXF36hoOMnxdZCs66S+SRPcTkV6M1WMRix20+XRhIpdyMffVnGmw3eIM2NsJPDzp5o5/j7L8eT73m9wXBQVQtMYqimmi1pjKMmTFWx5h+nZ0MPCwuxrV3lMDTvdvdQ4kFsYiRW88ohLrOAmdUvTtS0ju7j/uJkIq2TMcIVSJ4b7EiebgedLVIqV3q84i8rMJfMYBgYZ9YLa3LTJQK6swA4c5Vj/pT2fHxPJUFGkIIl+zx3TvTUR1ItKvdeOwv92FSuINKlDNm4V+8j+C1boMX1CHcnCNDnhhqnDCtd4cYX36lr4X41sXdxppRVf8T23vSGzjpKUkViB191LwWffgUKZuaXjKcdPosJkkNxigPSJRqA7gCxY+FAICvPkgQE+BQt21wIfbFFv7BEMFyLLvvusQhlVTphgSbCgkdLoW2UqWrqCLzoxjuHDAgV3J8kJL1gWLBgYBLbu5yjfw3GpJ3DhMWMZClYoWHW/lgOs4JdgJ1fIR7+tAqrqOU63+b+wpicoeICKqdU5QGSEnLSILcHu/HsOqG7g+PUER+tFoM0Bj93P0RTy4qmWTZjAkTVL+49OdMt2CViwEeLvBscVIHqsKBvlZFAA/gf4QAUl2O1lvQAAAABJRU5ErkJggg==";

var img$j = "data:image/png;base64,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";

var img$i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUtSURBVGhD7ZpLaGNVGMf/99680yYpfaaVtpJScK8ysxpwVXSnuBAUZXbjYnAlghtBFz5wIYirCio4CLNUZiGzETcjBV1MxWJtwQ7t9J3pI6+b3Hs9/5NzMyYm6ag3aW7JH9KSe06S8zvfd77z+jRHCBdUZ8Kx+Pj4GCcnJzBNE5VKBbZtQ9M0VaPz4u+FQiHouo54PI7BwUFEo1FV2lpt4XZ2drC3tydBuglzlizLknBTU1NtIZvC0UKrq6vSaoRir7HH3N7jq5tiO2g9ek2xWEQul5PPCDkyMoLJyUlVs17/gDs9PcXa2hoMw0AwGJQfJlRDtXMXh8rR0ZEEZMdnMhlV8lB1cOyZ5eVlBAIB+YHR0VHZY70oehQ9bHd3V/5PJpOYnZ1VpVXV+dfKyoq0GMHGx8d7FoyiTehR6XRaGiObzeLw8FCVVlWDYw+Uy2X5gbGxMWnFXhcBCcb20igbGxuqpKoa3NbWlqzAMdbLFmsU2zowMIBIJCJhGeFdSTjOYRyYrBCLxXoueJwletnw8LCM4vv7++qpgqOvsoA94CeruaIxGCfoeYVCoWYcCcd5g9GHVvMjHMV2c0InRz6fl88kHAMJxcHpN5d0xXaz/RSnBkrC8Q2JaVY/i0PLnf/ke/n3gqoP51f14fyqPpxf1Vk4MedArAnsld9Q/voLmIufofL9LeBBlisGValz6hycWArZG/dQuP4Kcq9eRmnxLZg33kPh3ZeRe+ESyje+FNwCvoMLh87AJRKwfvwB+asLqPzyLbR4TFix+lNaUGxN7CMU3n8d5odvw8kVIDaRssxreQ8XFVum3/9A+atPYGfvQQsJsEYJUC0RQumbT2Hd/k4Ah6su7LG8hWMDNQOVn27DFI3WB9scu+lBIOigfHMR9q93gVhclXgnb+F4SrZ9H/bPdwBhDNcVW0mLBFG5ewfW/T/F2PPeibz9Rl0EB7GXcg72RGPVszbSDNEZJxac/CFDi+fyFo57QRH9HI6hR9kWOmJjzBYYNLP38hbOqgCpIeizj4tNonrWRk65BD09Dj059kh98W/lLZzY0WvDKRhPPSPC/wCcSkkVNJeTsxG8sgA98wRQal/3v8hbOEqMucDlKwi/dh3OA2HJFscWTjEHI51B4Pmr0B5L+wSOh7kiCgZfuobwi9dEsDDF0Ko/4HVKOehDGUTe/BjG05d4tqhKvJX3cJSwgjaUQvidjxD94CaMySfhWDocMy/WlEmEn3sDsc9vwVh4VtQttrTu/5W8CFlaWpLH6PPz87WTME/Fyb0oICxLrjk7sRrh4RbPX3mfyHs73nV0xnKNomXCItzHuMbsxIzWXN2BOyf14fyqPpxfdfHheHlA+fX6ylXtXk6lksi/biqGn+FoIN4Ok4M8lIQLc4IVcq+y/Ci2211duTwSjjkcJGaCTbezg7wSrcbsIop3+5Qk4WU5XZIX/360HA3CjCIy0FCuJBzToHhhTnomq/jthpUGYbsJNzExoZ4qOGpmZqYGR9/1iwV5D84EIbadBmJGhqsaHDMBmGDDSky4ccNqL4sednBwIGMFrdaY3FYXPaanp+VgZNLK5uZmT1uQ7eLezc3cm5ubq2UzuGqab7m+vi57gz3D3JRUKtVTaRxMpOHGlFC0GLP1EomEKn2opnDU9va27Bl3aiAorcr35zFdEIQeVSqVagsOzmeMFe681qiWcBS/jIliDLP88vOeA9lUvhgfOH3Ro9qpLdzfxZQj9hqB2WvdGotsHn+LnsMXk7f5/2wBfwGoeGRl0oLo6AAAAABJRU5ErkJggg==";

var img$h = "data:image/png;base64,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";

var img$g = "data:image/png;base64,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";

var img$f = "data:image/png;base64,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";

var img$e = "data:image/png;base64,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";

var img$d = "data:image/png;base64,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";

var dices = {
    1: img$i,
    2: img$h,
    3: img$g,
    4: img$f,
    5: img$e,
    6: img$d,
};
var isStatisticData$2 = function (type, data, arrayIndex) {
    var _a;
    if (!((_a = data.roadmapdata.inGame[type][arrayIndex]) === null || _a === void 0 ? void 0 : _a.v))
        return false;
    return true;
};
var renderDiRoadmap = function (statistic, gameType) {
    var indents1 = [];
    var indents2 = [];
    var indents3 = [];
    var indents4 = [];
    var indents5 = [];
    var indents6 = [];
    var indents7 = [];
    var indents8 = [];
    var indents9 = [];
    var indents10 = [];
    var indents11 = [];
    var indents12 = [];
    var indents13 = [];
    for (var i = 0; i <= 24; i++) {
        var className = 'columnDi';
        if (gameType === 'DIL') {
            className = 'columnDil';
        }
        var classNameSize = 'columnDiSize';
        var classNameSize2 = 'columnDiSize sizeBottom';
        if (i <= 12) {
            statistic.roadmapdata.inGame.bead[i];
            if (statistic.roadmapdata.inGame.bead[i] != null) {
                var sum = statistic.roadmapdata.inGame.bead[i].dice[0] +
                    statistic.roadmapdata.inGame.bead[i].dice[1] +
                    statistic.roadmapdata.inGame.bead[i].dice[2];
                var size = '大';
                var color = 'sizeColorRed';
                if (sum <= 10) {
                    size = '小';
                    color = 'sizeColorBlue';
                }
                indents1.push(React__default['default'].createElement("div", { className: className, key: i.toString() },
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bead[i] === null ||
                            !isStatisticData$2('bead', statistic, i)
                            ? 'srcVisibleDi'
                            : 'srcVisibleDi', src: dices[statistic.roadmapdata.inGame.bead[i].dice[0]], alt: "icon" }),
                    React__default['default'].createElement("br", null),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bead[i] === null ||
                            !isStatisticData$2('bead', statistic, i)
                            ? 'srcVisibleDi'
                            : 'srcVisibleDi', src: dices[statistic.roadmapdata.inGame.bead[i].dice[1]], alt: "icon" }),
                    React__default['default'].createElement("br", null),
                    React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bead[i] === null ||
                            !isStatisticData$2('bead', statistic, i)
                            ? 'srcVisibleDi'
                            : 'srcVisibleDi', src: dices[statistic.roadmapdata.inGame.bead[i].dice[2]], alt: "icon" }),
                    React__default['default'].createElement("br", null),
                    React__default['default'].createElement("span", { className: color }, sum),
                    React__default['default'].createElement("br", null),
                    React__default['default'].createElement("span", { className: color }, size),
                    React__default['default'].createElement("br", null)));
            }
        }
        if (gameType === 'DI') {
            var indents2key = i * 6;
            indents2.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 1).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents2key] === null ||
                        !isStatisticData$2('size', statistic, indents2key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents2key] === null ||
                        !isStatisticData$2('size', statistic, indents2key)
                        ? img$l
                        : statistic.roadmapdata.inGame.size[indents2key].v === 2
                            ? img$l
                            : statistic.roadmapdata.inGame.size[indents2key].v === 1
                                ? img$k
                                : img$j, alt: "icon" })));
            indents8.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 7).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents2key] === null ||
                        !isStatisticData$2('odd', statistic, indents2key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents2key] === null ||
                        !isStatisticData$2('odd', statistic, indents2key)
                        ? img$n
                        : statistic.roadmapdata.inGame.odd[indents2key].v === 2
                            ? img$n
                            : statistic.roadmapdata.inGame.odd[indents2key].v === 1
                                ? img$m
                                : img$j, alt: "icon" })));
            var indents3key = i * 6 + 1;
            indents3.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 2).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents3key] === null ||
                        !isStatisticData$2('size', statistic, indents3key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents3key] === null ||
                        !isStatisticData$2('size', statistic, indents3key)
                        ? img$l
                        : statistic.roadmapdata.inGame.size[indents3key].v === 2
                            ? img$l
                            : statistic.roadmapdata.inGame.size[indents3key].v === 1
                                ? img$k
                                : img$j, alt: "icon" })));
            indents9.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 8).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents3key] === null ||
                        !isStatisticData$2('odd', statistic, indents3key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents3key] === null ||
                        !isStatisticData$2('odd', statistic, indents3key)
                        ? img$n
                        : statistic.roadmapdata.inGame.odd[indents3key].v === 2
                            ? img$n
                            : statistic.roadmapdata.inGame.odd[indents3key].v === 1
                                ? img$m
                                : img$j, alt: "icon" })));
            var indents4key = i * 6 + 2;
            indents4.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 3).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents4key] === null ||
                        !isStatisticData$2('size', statistic, indents4key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents4key] === null ||
                        !isStatisticData$2('size', statistic, indents4key)
                        ? img$l
                        : statistic.roadmapdata.inGame.size[indents4key].v === 2
                            ? img$l
                            : statistic.roadmapdata.inGame.size[indents4key].v === 1
                                ? img$k
                                : img$j, alt: "icon" })));
            indents10.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 9).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents4key] === null ||
                        !isStatisticData$2('odd', statistic, indents4key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents4key] === null ||
                        !isStatisticData$2('odd', statistic, indents4key)
                        ? img$n
                        : statistic.roadmapdata.inGame.odd[indents4key].v === 2
                            ? img$n
                            : statistic.roadmapdata.inGame.odd[indents4key].v === 1
                                ? img$m
                                : img$j, alt: "icon" })));
            var indents5key = i * 6 + 3;
            indents5.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 4).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents5key] === null ||
                        !isStatisticData$2('size', statistic, indents5key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents5key] === null ||
                        !isStatisticData$2('size', statistic, indents5key)
                        ? img$l
                        : statistic.roadmapdata.inGame.size[indents5key].v === 2
                            ? img$l
                            : statistic.roadmapdata.inGame.size[indents5key].v === 1
                                ? img$k
                                : img$j, alt: "icon" })));
            indents11.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 10).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents5key] === null ||
                        !isStatisticData$2('odd', statistic, indents5key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents5key] === null ||
                        !isStatisticData$2('odd', statistic, indents5key)
                        ? img$n
                        : statistic.roadmapdata.inGame.odd[indents5key].v === 2
                            ? img$n
                            : statistic.roadmapdata.inGame.odd[indents5key].v === 1
                                ? img$m
                                : img$j, alt: "icon" })));
            var indents6key = i * 6 + 4;
            // console.log(indents6key)
            indents6.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 5).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents6key] === null ||
                        !isStatisticData$2('size', statistic, indents6key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents6key] === null ||
                        !isStatisticData$2('size', statistic, indents6key)
                        ? img$l
                        : statistic.roadmapdata.inGame.size[indents6key].v === 2
                            ? img$l
                            : statistic.roadmapdata.inGame.size[indents6key].v === 1
                                ? img$k
                                : img$j, alt: "icon" })));
            indents12.push(React__default['default'].createElement("div", { className: classNameSize, key: (i + 24 * 11).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents6key] === null ||
                        !isStatisticData$2('odd', statistic, indents6key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents6key] === null ||
                        !isStatisticData$2('odd', statistic, indents6key)
                        ? img$n
                        : statistic.roadmapdata.inGame.odd[indents6key].v === 2
                            ? img$n
                            : statistic.roadmapdata.inGame.odd[indents6key].v === 1
                                ? img$m
                                : img$j, alt: "icon" })));
            var indents7key = i * 6 + 5;
            indents7.push(React__default['default'].createElement("div", { className: classNameSize2, key: (i + 24 * 6).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents7key] === null ||
                        !isStatisticData$2('size', statistic, indents7key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents7key] === null ||
                        !isStatisticData$2('size', statistic, indents7key)
                        ? img$l
                        : statistic.roadmapdata.inGame.size[indents7key].v === 2
                            ? img$l
                            : statistic.roadmapdata.inGame.size[indents7key].v === 1
                                ? img$k
                                : img$j, alt: "icon" })));
            indents13.push(React__default['default'].createElement("div", { className: classNameSize2, key: (i + 24 * 12).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents7key] === null ||
                        !isStatisticData$2('odd', statistic, indents7key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents7key] === null ||
                        !isStatisticData$2('odd', statistic, indents7key)
                        ? img$n
                        : statistic.roadmapdata.inGame.odd[indents7key].v === 2
                            ? img$n
                            : statistic.roadmapdata.inGame.odd[indents7key].v === 1
                                ? img$m
                                : img$j, alt: "icon" })));
        }
    }
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("div", { className: "rowDi-abcd" }, indents1),
        React__default['default'].createElement("div", { className: "rowDiSize-abcd" },
            indents2,
            indents3,
            indents4,
            indents5,
            indents6,
            indents7,
            indents8,
            indents9,
            indents10,
            indents11,
            indents12,
            indents13)));
};

var img$c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAVQSURBVEhLXVVbbxtFFP521+v1feNbXLtJSNo0aS4ttAmVCkJI8AAPkQABQjzAM7+Cd8QjfwKJV0AqamlBtKjQNiktLa1oEruJWzfBt8SxY3t3+c6sDVLXmp3ZmTnfOec7F2vNRtPrNho4qFXRa7fhAdA5XLUCtMF4/nl+T31TxLBMhEZSsFIpaPVy2dv8+UeUb11Hp16FrmkDQY+zqPHUezgPQXnNn9U9f1/z+giEEsicXkbh9Tehrf923bv51Rco37gK1yOArsEQKa7huRRwuBeApuswxBnN/U+JPzz+fG91gmtGEMm5s5j55DPo7UYde08eoe/2YCZzMO1RGHYWAY5gugDryCTMdB5GPA0tZkMLxQAOLRRXM8JxaBEbupyPFOCGomhVd9GqPB14HKCthgGPVosdnkP3IlFk5l5EfukVBMJRWmQgaCcRHqXC7BEEUxlYmRzCXIdSNCgUYZzoi0YcLaC84ZtgJFCGOOk6pIGr2NEJHD3/Gi8Au3dvM0BZZE8uIpbLU14nOy55oFGU7+3vofbgTzQ2HpJaJoPgEUv3QXmHs3Du9nsIJEaQmV1EanJKeWLZI4iPH4M9MYXU7EkcXTqH2Xc/xPj5V5FZWIQ9NQ0rmablOhzBUFJ+OqhHtlyHx6aF9MwisvML6O7vo1mpYHrlPcTyBVTu3sHG5cuoPHhIKlJobJexeeUySteuoLFVgkM7PQZefBd4BS4Lj/5otD41dwon3l5B5vgMArE4jpxdorI5NJ9sYev6BWxc+lql7UG1hsqd29i89A1KP32HerkIlxgkSxnqWy7aPFLikicjAD1owT08lBsYGRtHfDSPJ7fX0CxukroQtDCzgnfEEC1gMmMSgBWnrKmAHeGcoMpyiapoEc4dBqleKmJ77Rbq21vodTrY33nGOPSReOEY9FCYMWeIVZxEhu4TVAIrOAqc+z64n/s+uByS877rwAiHYSXicHpdtBs1pE+cQO6lMzCjMXrI2Mhl8Zg/8VhABdCnRKwXxVJU3BRt4o7kuT0xifHlc0hOTJCiICLZLOKFAsLJDMy4DVcFzAdRGUbZPm309/gtFAsWvxUtvlZd5Wf3oIWnDx/g/sULuP/9t1i/+gvWf72GKuk6bHcGbvvC8hpaLcYNz+RR4P7Cd6PPHN+vN9B8VsFeZQeHrT1abzKTKMLzbruFLvcc3pPi6bOSu50Djn04To+UulSg05MBuLw88qaiTM6D8TiSDF5ibAyxwhhy0zMwLYuFZCM9u4DU/Ckk8mMwQxaiuVGm6TxGpucQTudIq4GexGRgsLLc4VKUaIEgomlyTCHh8KDZRKdziN1ikVZ3cfyNt3D6nY8w8fI5GATKz5/G3Mr7WFj5AKNUqlkh8u0o2f8tp8sqA0iB8Fctb6N87w5Kf6yiuPo7tv+6h8rmI170EGbGOKyD9Zs30KrXEApHmOpxBKywCrBkyjCg2urFH7xLX36OnWKJJV1ALMXOl7DRrlbRqu0iwIJx+g5C0Sg7bByG5Db7vCMpy8zR2S0lPSUR2s06+t0OYskslj/+dBBQKVuqcuhSk0Wzs/439vivJHHoHnYV0EGzQY8eY+fxJnbZR2psB/9s87u0ybnERKjxvtDrx09Mp2KWPJsV99HvMeK9PnosHskcAXWYETIkMxy2Y6liGdJHhmtHio/e9USes8b/B2kjeoTtNDk1i0iaDZ99Wv5gAywewzT9wTjILAVlyLAGQ/aHe2rwDiky+SdjF8Zh53LQGvW693htDRurt9B49pTesJcxwH55KNbUI57+/yWPnKuL6pFzusN4JTB5ZgnTy8v4F6QphtOb4Q4LAAAAAElFTkSuQmCC";

var img$b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAANNSURBVEhLrVXbLmtRFB17V1ttXepa9zshiFsiHjx4IvEZvsIn+Aa/4AM44Tzy5hZygooED8QlFEXtss4cU3eP3pJzToxkdu+19lxzzcuYs9bNzY3x+314e3MQj8dhjMH/wrIsFBUVwe/3w+v1wnp9fTUHBwdYW/uJ3d1dOE6Cap/a/4iPjw/U1NRgamoK09PTwGM8bhYWFkxTUxNd/hYR42Z7e9vYiZcXHB0d4e7uTva/B4eHh7i8vIR1dXVl5ufnsbS0hMfHx9RnoLKyErW1tZo/hst8Em5N3DWdkrrhRZx00draisXFRRS5Su7TxfDwMGZmZhAIBPD09ASfz4eysjIkEgl1ggUrKQlhf/8XVld/SPTR1MlP0Ak79Z4BXtTd3Y3x8XG0t7ejvLwckUgEfX196hUvaWxsxMjIKMbGxuRbfepkJvIaJzweDy4uLrC5uamys7MjXu6nhXvHx8dIJh2Jyps6lYmCxgnmm+morq5Gc3OzPjs7O9HV1YXi4mLYtiVRekTzsw7ZyGuc+Xp4eNB3hl9fXw+hKjo6OtKXcL+0tEzyHxPdP0T4ioKen5+fK0VjsZh07xve39+1+5LJpHby8/MzTk9PEY1GC9K4oHEaJEtohDRLvCX0AsdxIF2tFzA6vnM/H/IaDwaDKjzEwxR6zHSR87yAlOSljIbs4TMbOcapRAqOjo5KTku1qKFQCF6PV4xTw5I9n1we0B5g7icmJtDT06PnvyLHuG3bCIfDWjxKVVUVKioqNC1sa+loMRoU7oe1yGRPXV2dOpGNnFiYaxphhzIN6+vrSjtGcXJyokyhMeq0tLSoAywqJRt5c07q8RBzu7e3p9FwfXt7q0UeGBjQebK1taVRDQ4O6pls5DXOVicFNzY2cHZ2pgY5Txwnifv7e72EUbFD+R/AyJiiHFxfX5u5uTkjYafncVtbm+nv7zcyU3QtXhkpmOpIPUxvb6+RqanfGhoazNDQkJFUpc/L/DErKysmbVwYkf4oaVBx1zLIRDLX7jtF5lCGvnSxWV5eNrZHqMepxxniglymuGAKjMlcfwX74as+00Sa2kH5mZycVF5/B2h4dnZWCWBJoRiS8pcMoBec59ne/Q14piRUgkhdRHoljN/YCMrc+qj2mgAAAABJRU5ErkJggg==";

var img$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATnSURBVEhLjVXLbhxFFD1V3T1+P8dPHMdxEhvHI+zYBAWRGIWFo0jAAoWVBTtW/AWwROILYAW/kA0LECgvREgcBTsQYzsx8gMn47HnPT3dVTm3x21NeEhcu6e6q6rPvffUubdVNpuzxbJCrmBRDSxgAChe9cbpI/uPNRkcB2hpVmjnVQ3KUPvZ0F5fNLj7yCBftDCW2whgZDgEkkHXbhEejmKxn3jUfGHsuMalGRc9HQWo5T98+8U3VdxZDVGqin8FS2StOfIxmuHbDCq6D8Xp4b1sEMA4iIDvneh38NE7HuZmKlC37pXtZ1/5yBQFxMLhxs5WhY4WjbJPMNKUyRuUKzXAgS6FxgYVAYWk8aAAlLhPc1UYDa3CB/Me3rtUhZb0BUATWCJNeAqvnXExO6ExdVrh9ZTG6IDmPKOn47MvOzg34WB2zMGFKQ9jxxy0NSpoLkYZECMwtawjKuXH0IHDhAe7Nd6cdXFmxEXqpIM3pl1cnOLzMJ0Mgo4dTBE4dUrj4oyDubMuXuF9X6eCQyoF/JClGrikYzjV26UxN+1gctRhJEA76enuUBgd0piko3cvJDA+oqkGqqJJoatd4eQxhfHjDrp5r/knWLFpOooUkCDYCNOfHnfhkpq9DA+4BBRKFumsIW3ABB00k4I85yrkuVQm51zbSRtkchY+049VJSbvRBPCV4FSXNkIsc8XvAYNjzy7dCrnIBpefhwifWCh+Jbnck1GHq6ACK2xumI74jwIgPVtg5+XA2SpjiKjKzDySpWRssB+exLixmKI3T2DUsUyalmTgIA8MwiYfsx1bBG4TBpKqORbZLlZZoTD9hZFGoCOVosWRlgkiFgb+ZbzaJK1FqCf8pRRzukfkYsJLZpPIavk2T4jp64LJRPRUPI1BpIazU3Afg44yJProsGzDEdm2cYgeqmWJk+Dij5ycAQuRnVGKf+0xPR5SBuk6f7vIbZ2w8h5M6NfeRxgfSvExqbFItd+XTV4xHPa2ZPeRM3VcfMCuEvPfd0KQz3UNOV3LuUhdZpR9ygku8CicjA8qDHUq6h1jVcnyQPtwZrFk79qjU/AY/wXwIWS9D43s8+sbhoWBdDapEkRI/7TYnktxBojFsqEc7G9PPjMViBSkal/i1xT8QHBt5je7WWDa7cCfP9LgEzWoquV5c8gM+Ra2oAc6E7a4tvbAZbWDCMGqNZ63MgicKkqdpaozVaYWtnnQRL0uzsBbt6vorcbWHi7AR+/n8DClQYqycH1Ra49CCnbWrOj2CKdq7oSVTfulu2nX/rIMbXOZo3hfvLbrnlRAeS/N6nYm3UUXbZgaj2EfIlKnkZqsdjcNXi4QQHssHtS+wvzCVx9y4cr3sQZexqSncD5lEvZKRSo6QLb6dKKlHcV26SryDqQr8xLXB9I1vpJPyXquQrboi7yINnzPzJ1k5F/wn5+wOJJtimcGFBIcPMBW4E4kOqTKqzwQ2LYSrVj0ZhQbFw8bPaZNh649PbdjFDJSmelLlz2cJX9XC0+9O3nX/tYp5TkE+eKd6YiPV4iEC4d/kiByYlZWZN57pWCiaTHS9akj3ewoD687GL+vA+1mw7stR8NfrgXYI8NS2gSqy+G6DZ+rks7NnmWZZcZT4+5/Ap5GO7jN7TIDpUrKjxlQ/J5GH9/8X8bX5TeIrLtoRCqfhHPAXYbREhmJit1AAAAAElFTkSuQmCC";

var img$9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAASWSURBVEhLpVXJblxFFD31hp7sNsF2PKUVy3IGJwZsiwQsQEgsEjaEFWTFB2SbLwHxA9mCWIRs2CAhERYRFpFwMOAYY9myHc92u9s9vH5DcW7Vc2g3S+7r0quuW+/UvecOpSrlsta1GuJqBTqOAK0A/s6ITt8inToR0SsN5XlwC0U4PUU0Wi2o5ua6bj55jOCPp0ii+r+b26UdsFMnIvpEw8ll4Y9Pofu9W2j2vAJVfvyDrj74Aq2lOe6Izcc6EQ/aUBwFpRxOVKqzy6eiXM9OuCUzNo3iZ/eh35yFOnj0DcE/R1I/BPwcQTw4+Tw054JCONIVQwcNWpdA5boB1+E+asQADl2v0K4IOgrhZPPo/vQenNt3CP7wa1158CV085AW+HAHLsKfmIGSA4IAKpOFIni4vgLdqMK/Om2BI3rguqQih2B+DtGLZeiwAeUT/O49uLc/piPCl+HUWuGeH0Juehbe+WE4tNDr7Ud2cgb+pUlkSpeRf+MGvP5Bepmhrg+FG+/AG71MSvi9eMaDDSB/QmQKbsVhxMXteH8H4coSwq110hKaTIDvGSrCvReIVp9Tt8nk4sfZAr/kuyMWFvxUqI+ODxHvbMIvjSE3+wEy49eAoIXkiOvHR0hqpObiOPI336duwhiRbK+bbIFDuLYD2sAlEzSiw12Ea39zzswh3zpsIW7U4A0OM82uIDmpci0E6IliFoXra4i21giaEILWtbOQvo1Ca7pPSty+IfhDI1DkECwwRYuyE9eRm5yynHINDLZDzv3SKIPOzDKZIzgWTuQsLdwg3DpdXeQnRGttGeHiM0TMlCSKkTBrZK21OM94LAL1OpzuIsEzKcBZOQsuIgewKNyBQVr7OjJTN5G78hp8ZkhmYBi5iSlkp99G5voM3KELcHzfZImxvEP+C85K1DpGvHeAYHEBzYWnaC79jnB/G+HODpqLv6H57BcEf9Kj3S16Q2MkkCYFz0oHOHlnAJNq1VScS07dwQtwabVb6CJdBeb/AINr19hNkEgGtQJaLgFNYVKx4MYjbmV1KS7Fm2sIVpc55z8GSwunkh2sSMkgqV7lucySDQTPF1it7IAe101SGEQjqeV2xZEsGb3G/pFHtL+LuHLM1GMrrteg2UITDl07gWY6SouOD/eQsAYyo1fh9JdYfORfPEjxWHIyT3iihj8yhvy7t0hHL5ckSKKL4fIwf6RkaZ15y2TOKcfCdyJN7afvWWhbpJUUWQ0b17dp42qwcUmjzxRsgCAWKH4YwBsuofDhXbrmovboKySVbYutSJMIjZADdOPE9BzbuO50BJSnJtUyy/yAQ8r9gP85P9pBxDiEG6uIy9sE3ydlVm9G5cB0RM3byBrFNw9nV5TebBclGHLL2cHgiHmeT87raM3/jPDXJ0CL/NMDLSn7ci+HAJJeCeppZ3ScLlZY9zlhiI+9HKwqHQJCj8KNv8wwmWGetj0yYgLzcYq98HrOGQpVbWVZ1797iMbcj+SMd6g40S7ypVkTd0U6SuOlEJwxy/MuKH70CYLBIaj6yYnGcdmknul2/0MUW4Hzah8vk37UmwH+AYWfLGDFapZBAAAAAElFTkSuQmCC";

var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAASKSURBVEhLnVVbT1xVFP72ucyZwrSicrF0ACGVlgRoRBu11ibiiwnpQ2Ni1H/nmy/60BhNjEZhkjZCsVgaaUmhF9QWcIC5MHPu22/tMzMt1RddsOfMPnvtb639rW+vUdu7uzqfywFRhCQIgDTB/zVlWVA5jyMHPwyhKrWa9mpVhLduIni0AR0GUErRk94622S+P2/tNTGu6ySF5XlwiqM4dm4GwYkeqNr+nk6WrqP25eeIt9bpZQH8P7JZjCfSaczsbK47R2KbSZo9ncFRFC5/CuviLKw0ChH++Tvi7YekpkkP0kIQaAJpAvKpNY/Y3Q1noAhVONF6F0m6xs/4c5/m/uTJfYQPNpCQFkunjJ+II9dtZmTbzE6eDufMUubc7IxOoOu9OeTGJqEcF5rUGV/ZY/zp6ziE4V8cEo80GVBNRz7EZJoqjVTLkBf8EPCX++COjsPq6SOYOHHdPPikf8faQDRxMyY1FNMGjNvMEIp43IQUCSLXdNBkZjyprCWynvmlzDSzp+gdcBPbAGvSwMHqq4TzWDa5ACVmrFEntwJKmJaPSgkox5T9BigzR76bwQxEDd7EefI6AXjUvgmWsLDEnpyB2z+I5O1LsF8dy/ITnkmp8Bw/vIdgbYmi4F1pJX8kc8FSXS/AIog9MAS7fwhW7ynYI6/BfaUId3gE+ak34HJuDQzD7itmfhyq+0XWgoEEpGVOmyFZEP3GD9YQl7ez6ktOzTqckXE4vBT2wAB0owF/ZdFkCt5IUPdKBFDd4wWMsn0tfJO5BBC9SIDkYAfxozVEG6uIN28juvszEDSQ1GoI19eQ1qtmc7S1hnDjF8T3VxHSLyk/NoUnukAa69DSMapCgijHohCYSeEleGemTE0aCz8g2S8jN/Um7N6TJiGIr52doCO5lh3hXEz6imJ0JSJpHiB3lkBDpxH99QTNlXn4d1bg9vbBm3qHgXuoHN5e8X8OWKwD3l6SIHK8FDHcsWl0fXCZHLBF3F5CsrOF5uI8KdlE/vULyE8zACWaikKe1rFj/wRnK9DRIZz+Iro//Iz9ZAj+6g0W8K6hTJf/gH+jRH+N/Fuz8CYvMGsWVPrSM0oRM+DySljQoul8Ad65iwT+BO7pCaMMf3mBhaywDnneJw/hnWU0Fn+CxayPz32MrvevGFlmt7h9UwnejmUuEenIn51BYfYjZnwK/nVyXPoW6cEuPVloqYebo1+IYKWExrXvkDR9dF2agzf9LhPzzEVs09ChRTqYJZ/8RfLv/Yb691fRLH1NzT/mok1s25xQFGI5OSPJYOUa6t98gcZSCSlVpKVd8Ma2+bcy2YmM5H1C7f6KxvxVBDcXkFR2+N4QRlmyh3PIM5U+QgrSwyoioejHrxDy6uvgkHlQOWzJsm5Z/L3zBofhnGS/sPJIKwfQ+wSN/CwL07zYBWMetzM4l44oYUmlruwhrZXlTLCJkxsbh83epKrVqvbqdfi3lhFsrvMKN1uabRHXPuO/WtuHXvxVkgK7I2dwbOY8gsJxqO2dHe25/GVhRnIhpLDPbvpPxm1ScAkShAH+BmvaR22mk8EsAAAAAElFTkSuQmCC";

var img$7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPkSURBVEhLlVVNbxxFEH3dM7vetdfO2siYEGIcklj5kMAocAAhOKAgcUWCIz+AP8A/4pIbuUU55BCFj0ghCsJOwCL+AJtkibOys7Z3d6aH97pndsfWIsSTa3amq+pVdVV127Tb7QxmAuvbKVp8TRMgMwD//hcyinzG6wanX7F4uZnCtFq72S+P67h2s4fHWxkcrUYRZ1x3/JXO/Etw6SfHgQ/fruLzq7RZ22hn1+/U8M2NPlIyRyO8lJVQoVLBnSIViznklvg1g7MnLb7+MoJNGa5zmKHXd3QmuR0tzUmDdy9EuLxgUK8q+6N6S4kp2tVux5EPsIqlRIqNGmqHogTD+swk8MFbEZYWLeqVYH3UNthbBhX09OS+g2VQo60nKiI/FFwlmZkymGpYT+J7wMfxEjGE1wuBvMwtJz7Ea631ft6fCyqh4zQJgYA9kNBANscRyEsQsbK8dNrikysR5pqWWy0lx/eUHxN1iyss0UcsVX1MQRggNykwIC+Sl2OtavDmuRjvL0WYmiBxsc8CLKOWZqctPn4nxvlTFjET0u7KAYbkyk4aZ9AYN5jnQRjjVBz2VNtgU8YB11tth8YEp+hihBP08WVSiYLJkNzz8sEyY27a4KWmwca2Q3uPOt/YIVSmw67Db386/LqeYulShNfnhtkLCnWUnIpGDTj/GsdtDPjpocMLngHtamBIaMaVxO4+cPt+imaDPTpjOUnkEWsO76Nv1dowpTOvWizOR9hqOayss03cZsl+ADk6Oq1uOaxuOJzjAMzPMnsqlGRhE2rExwwjX1hg95n9vZUEO3teQ/LwewR5xP0ucP+RY9YGp2bD6S3S9+SCDlYlArqs5cO1BA9+V2OKrEv0pThylt8K7Z88cz5jjbFsZBbI+WZIvHdgcHfF4ebdFE95/cZcU7l0IekAeY/gG8Bm6F75gyW88X2C5bUUB7pTuCYMM6f0yPLX8wzbFFGoaRX2QXUc431S412tO2QAvupbY6mdbj516Pe525x1QO7T0aCrgXkTpznDn74X46vPqvjiasVPkP6p6MaTXs6KJXGsiSh0txQIG8i/C0OJ1n3XGShm9nsvMvzwIMXPqw5d3S+yoS7I0M+xCYNp0YGoxOGjnxjWOEjCk9rmHP/IHnx7u49rtxJc/66PTda3R3KX25UlSYNUWUKV0tZqnO2TERZ43DXnMpKjUusx2ObfwPJmhkeU7R0mQF2W2xwX3UFT7MvlszFmTpDv2c7zbHe/gXvLCdafpEhIqO0NoDbwxy+V10dAAzvJPi0txrj4BvvW6XSyaqWKfR7zLhulev0Hx0j4BOiocozzEotMin8AoKjG4q0W/AsAAAAASUVORK5CYII=";

var isStatisticData$1 = function (type, data, arrayIndex) {
    var _a;
    if (!((_a = data.roadmapdata.inGame[type][arrayIndex]) === null || _a === void 0 ? void 0 : _a.v))
        return false;
    return true;
};
var renderRoRoadmap = function (statistic) {
    var indents1 = [];
    var indents2 = [];
    var indents3 = [];
    var indents4 = [];
    var indents5 = [];
    var indents6 = [];
    var indents7 = [];
    var indents8 = [];
    var indents9 = [];
    var indents10 = [];
    var indents11 = [];
    var indents12 = [];
    for (var i = 0; i <= 23; i++) {
        var className = 'columnRo';
        if (i === 23) {
            className = 'columnRoRight';
        }
        var indents1key = i * 6;
        indents1.push(React__default['default'].createElement("div", { className: className, key: i.toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.color[indents1key] === null ||
                    !isStatisticData$1('color', statistic, indents1key)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.color[indents1key] === null ||
                    !isStatisticData$1('color', statistic, indents1key)
                    ? img$b
                    : statistic.roadmapdata.inGame.color[indents1key].v === 2
                        ? img$b
                        : img$c, alt: "icon" })));
        var indents2key = i * 6 + 1;
        indents2.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 1).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.color[indents2key] === null ||
                    !isStatisticData$1('color', statistic, indents2key)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.color[indents2key] === null ||
                    !isStatisticData$1('color', statistic, indents2key)
                    ? img$b
                    : statistic.roadmapdata.inGame.color[indents2key].v === 2
                        ? img$b
                        : img$c, alt: "icon" })));
        var indents3key = i * 6 + 2;
        indents3.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 2).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.color[indents3key] === null ||
                    !isStatisticData$1('color', statistic, indents3key)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.color[indents3key] === null ||
                    !isStatisticData$1('color', statistic, indents3key)
                    ? img$b
                    : statistic.roadmapdata.inGame.color[indents3key].v === 2
                        ? img$b
                        : img$c, alt: "icon" })));
        var indents4key = i * 6 + 3;
        indents4.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 3).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.color[indents4key] === null ||
                    !isStatisticData$1('color', statistic, indents4key)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.color[indents4key] === null ||
                    !isStatisticData$1('color', statistic, indents4key)
                    ? img$b
                    : statistic.roadmapdata.inGame.color[indents4key].v === 2
                        ? img$b
                        : img$c, alt: "icon" })));
        var indents5key = i * 6 + 4;
        indents5.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 4).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.color[indents5key] === null ||
                    !isStatisticData$1('color', statistic, indents5key)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.color[indents5key] === null ||
                    !isStatisticData$1('color', statistic, indents5key)
                    ? img$b
                    : statistic.roadmapdata.inGame.color[indents5key].v === 2
                        ? img$b
                        : img$c, alt: "icon" })));
        var indents6key = i * 6 + 5;
        var className2 = className + " bottomBlack";
        indents6.push(React__default['default'].createElement("div", { className: className2, key: (i + 23 * 5).toString() },
            React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.color[indents6key] === null ||
                    !isStatisticData$1('color', statistic, indents6key)
                    ? 'srcInvisible'
                    : 'srcVisible', src: statistic.roadmapdata.inGame.color[indents6key] === null ||
                    !isStatisticData$1('color', statistic, indents6key)
                    ? img$b
                    : statistic.roadmapdata.inGame.color[indents6key].v === 2
                        ? img$b
                        : img$c, alt: "icon" })));
        var indents7key = i * 6;
        var indents8key = i * 6 + 1;
        var indents9key = i * 6 + 2;
        var indents10key = i * 6 + 3;
        var indents11key = i * 6 + 4;
        var indents12key = i * 6 + 5;
        if (i < 13) {
            indents7.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 6).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents7key] === null ||
                        !isStatisticData$1('odd', statistic, indents7key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents7key] === null ||
                        !isStatisticData$1('odd', statistic, indents7key)
                        ? img$a
                        : statistic.roadmapdata.inGame.odd[indents7key].v === 2
                            ? img$a
                            : img$9, alt: "icon" })));
            indents8.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 7).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents8key] === null ||
                        !isStatisticData$1('odd', statistic, indents8key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents8key] === null ||
                        !isStatisticData$1('odd', statistic, indents8key)
                        ? img$a
                        : statistic.roadmapdata.inGame.odd[indents8key].v === 2
                            ? img$a
                            : img$9, alt: "icon" })));
            indents9.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 8).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents9key] === null ||
                        !isStatisticData$1('odd', statistic, indents9key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents9key] === null ||
                        !isStatisticData$1('odd', statistic, indents9key)
                        ? img$a
                        : statistic.roadmapdata.inGame.odd[indents9key].v === 2
                            ? img$a
                            : img$9, alt: "icon" })));
            indents10.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 9).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents10key] === null ||
                        !isStatisticData$1('odd', statistic, indents10key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents10key] === null ||
                        !isStatisticData$1('odd', statistic, indents10key)
                        ? img$a
                        : statistic.roadmapdata.inGame.odd[indents10key].v === 2
                            ? img$a
                            : img$9, alt: "icon" })));
            indents11.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 10).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents11key] === null ||
                        !isStatisticData$1('odd', statistic, indents11key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents11key] === null ||
                        !isStatisticData$1('odd', statistic, indents11key)
                        ? img$a
                        : statistic.roadmapdata.inGame.odd[indents11key].v === 2
                            ? img$a
                            : img$9, alt: "icon" })));
            indents12.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 11).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.odd[indents12key] === null ||
                        !isStatisticData$1('odd', statistic, indents12key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.odd[indents12key] === null ||
                        !isStatisticData$1('odd', statistic, indents12key)
                        ? img$a
                        : statistic.roadmapdata.inGame.odd[indents12key].v === 2
                            ? img$a
                            : img$9, alt: "icon" })));
        }
        else {
            if (i === 13) {
                className = 'columnRo leftBlack';
            }
            indents7key = (i - 13) * 6;
            indents7.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 6).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents7key] === null ||
                        !isStatisticData$1('size', statistic, indents7key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents7key] === null ||
                        !isStatisticData$1('size', statistic, indents7key)
                        ? img$8
                        : statistic.roadmapdata.inGame.size[indents7key].v === 2
                            ? img$8
                            : img$7, alt: "icon" })));
            indents8key = (i - 13) * 6 + 1;
            indents8.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 7).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents8key] === null ||
                        !isStatisticData$1('size', statistic, indents8key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents8key] === null ||
                        !isStatisticData$1('size', statistic, indents8key)
                        ? img$8
                        : statistic.roadmapdata.inGame.size[indents8key].v === 2
                            ? img$8
                            : img$7, alt: "icon" })));
            indents9key = (i - 13) * 6 + 2;
            indents9.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 8).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents9key] === null ||
                        !isStatisticData$1('size', statistic, indents9key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents9key] === null ||
                        !isStatisticData$1('size', statistic, indents9key)
                        ? img$8
                        : statistic.roadmapdata.inGame.size[indents9key].v === 2
                            ? img$8
                            : img$7, alt: "icon" })));
            indents10key = (i - 13) * 6 + 3;
            indents10.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 9).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents10key] === null ||
                        !isStatisticData$1('size', statistic, indents10key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents10key] === null ||
                        !isStatisticData$1('size', statistic, indents10key)
                        ? img$8
                        : statistic.roadmapdata.inGame.size[indents10key].v === 2
                            ? img$8
                            : img$7, alt: "icon" })));
            indents11key = (i - 13) * 6 + 4;
            indents11.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 10).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents11key] === null ||
                        !isStatisticData$1('size', statistic, indents11key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents11key] === null ||
                        !isStatisticData$1('size', statistic, indents11key)
                        ? img$8
                        : statistic.roadmapdata.inGame.size[indents11key].v === 2
                            ? img$8
                            : img$7, alt: "icon" })));
            indents12key = (i - 13) * 6 + 5;
            indents12.push(React__default['default'].createElement("div", { className: className, key: (i + 23 * 11).toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.size[indents12key] === null ||
                        !isStatisticData$1('size', statistic, indents12key)
                        ? 'srcInvisible'
                        : 'srcVisible', src: statistic.roadmapdata.inGame.size[indents12key] === null ||
                        !isStatisticData$1('size', statistic, indents12key)
                        ? img$8
                        : statistic.roadmapdata.inGame.size[indents12key].v === 2
                            ? img$8
                            : img$7, alt: "icon" })));
        }
    }
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("div", { className: "rowRo-abcd" },
            indents1,
            indents2,
            indents3,
            indents4,
            indents5,
            indents6,
            indents7,
            indents8,
            indents9,
            indents10,
            indents11,
            indents12)));
};

var img$6 = "data:image/png;base64,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";

var img$5 = "data:image/png;base64,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";

var img$4 = "data:image/png;base64,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";

var img$3 = "data:image/png;base64,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";

var img$2 = "data:image/png;base64,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";

var img$1 = "data:image/png;base64,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";

var img = "data:image/png;base64,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";

var isStatisticData = function (type, data, arrayIndex) {
    var _a;
    if (!((_a = data.roadmapdata.inGame[type][arrayIndex]) === null || _a === void 0 ? void 0 : _a.v))
        return false;
    return true;
};
var renderLwRoadmap = function (statistic) {
    var indents1 = [];
    for (var i = 0; i <= 38; i++) {
        var className = 'columnLw';
        var source = img$5;
        if (isStatisticData('bead', statistic, i)) {
            switch (statistic.roadmapdata.inGame.bead[i].v) {
                case '01':
                    source = img$6;
                    break;
                case '02':
                    source = img$5;
                    break;
                case '03':
                    source = img$4;
                    break;
                case '04':
                    source = img$3;
                    break;
                case '05':
                    source = img$2;
                    break;
                case '06':
                    source = img$1;
                    break;
                case '07':
                    source = img;
                    break;
                default:
                    source = img$5;
                    break;
            }
            indents1.push(React__default['default'].createElement("div", { className: className, key: i.toString() },
                React__default['default'].createElement("img", { className: statistic.roadmapdata.inGame.bead[i] == null ||
                        !isStatisticData('bead', statistic, i)
                        ? 'srcInvisibleLw'
                        : 'srcVisibleLw', src: source, alt: "icon" })));
        }
    }
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("div", { className: "rowLw-abcd" }, indents1)));
};

var gametypemap = {
    BAC: 0,
    BAS: 1,
    BAI: 2,
    DT: 5,
    DI: 12,
    MJ: 13,
    RO: 14,
    LO: 15,
    LW: 16,
    ROL: 17,
    BAM: 18,
    DIL: 19,
    SLOT: 20,
    MS: 21,
    RC: 22,
    F3: 23,
    E5: 24,
    L28: 25,
};
var RoadMapComponent = function (props) {
    var gameType = props.gameType, roadmapData = props.roadmapData;
    var _a = React.useState(undefined), statistic = _a[0], setStatistic = _a[1];
    var renderContent = React.useCallback(function () {
        if (gameType && statistic) {
            switch (gameType) {
                case 'BAC':
                case 'BAS':
                case 'BAI':
                case 'BAM': {
                    return React__default['default'].createElement(React__default['default'].Fragment, null, renderBacAndDTRoadmap(statistic));
                }
                case 'DT': {
                    return React__default['default'].createElement(React__default['default'].Fragment, null, renderBacAndDTRoadmap(statistic));
                }
                case 'DI':
                case 'DIL': {
                    return React__default['default'].createElement(React__default['default'].Fragment, null, renderDiRoadmap(statistic, gameType));
                }
                case 'RO':
                case 'ROL': {
                    return React__default['default'].createElement(React__default['default'].Fragment, null, renderRoRoadmap(statistic));
                }
                case 'LW': {
                    return React__default['default'].createElement(React__default['default'].Fragment, null, renderLwRoadmap(statistic));
                }
            }
        }
    }, [gameType, statistic]);
    React.useEffect(function () {
        if (props.roadmapData != undefined) {
            setStatistic(playerclient.ConvertCMSStatistic(gametypemap[gameType], roadmapData));
        }
        return function () {
            setStatistic(undefined);
        };
    }, [gameType, roadmapData]);
    return (React__default['default'].createElement("div", { className: "modal-abcd" },
        React__default['default'].createElement("div", { className: "content" },
            React__default['default'].createElement("div", { id: "div1-abcd" }, renderContent()))));
};

console.log('hellowwww');

module.exports = RoadMapComponent;
