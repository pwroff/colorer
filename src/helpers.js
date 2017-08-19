const helpers = {
    HSVtoRGB({h, s, v, a}) {
        let r,
            g,
            b,
            i,
            f,
            p,
            q,
            t;

        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v,
                g = t,
                b = p;
                break;
            case 1:
                r = q,
                g = v,
                b = p;
                break;
            case 2:
                r = p,
                g = v,
                b = t;
                break;
            case 3:
                r = p,
                g = q,
                b = v;
                break;
            case 4:
                r = t,
                g = p,
                b = v;
                break;
            case 5:
                r = v,
                g = p,
                b = q;
                break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255),
            a
        }
    },
    RGBtoHSV({r, g, b, a}) {
        let max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            d = max - min,
            h,
            s = (max === 0
                ? 0
                : d / max),
            v = max / 255;

        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = (g - b) + d * (g < b
                    ? 6
                    : 0);
                h /= 6 * d;
                break;
            case g:
                h = (b - r) + d * 2;
                h /= 6 * d;
                break;
            case b:
                h = (r - g) + d * 4;
                h /= 6 * d;
                break;
        }

        return {h, s, v, a};
    },
    HSVtoHSL({h, s, v, a}) {
        let _h = h,
            _s = s * v,
            _l = (2 - s) * v;
        _s /= (_l <= 1)
            ? _l
            : 2 - _l;
        _l /= 2;

        return {h: _h, s: _s, l: _l, a};
    },
    HSLtoHSV({h, s, l, a}) {
        let _h = h,
            _s,
            _v;

        l *= 2;
        s *= (l <= 1)
            ? l
            : 2 - l;
        _v = (l + s) / 2;
        _s = (2 * s) / (l + s);

        return {h: _h, s: _s, v: _v, a};
    },
    HEXtoRGB(hex) {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
    
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ?
          `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, 1)`
             : null;
    },
    RGBtoHEX({r, g, b}) {
        function componentToHex(c) {
            let hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        };

        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    },
    defineColorSchema(color) {
        if (/#/.test(color)) {
            return 'hex';
        }
        if (/rgba/.test(color)){
            return 'rgb';
        }
        if (/rgb/.test(color)) {
            return 'rgb';
        }
        if (/hsv/.test(color)) {
            return 'hsv';
        }
        if (/hsl/.test(color)) {
            return 'hsl';
        }
    }
}

module.exports = helpers;
