
export default {
    "ease-in-quad": function (t, b, c, d) {
        return c*(t/=d)*t + b;
    },

    "ease-out-quad": function (t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },

    "ease-in-out-quad": function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },

    "ease-in-cubic": function (t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },

    "ease-out-cubic": function (t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },

    "ease-in-out-cubic": function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },

    "ease-in-quart": function (t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },

    "ease-out-quart": function (t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },

    "ease-in-out-quart": function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },

    "ease-in-quint": function (t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },

    "ease-out-quint": function (t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },

    "ease-in-out-quint": function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },

    "ease-in-sine": function (t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },

    "ease-out-sine": function (t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },

    "ease-in-out-sine": function (t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },

    "ease-in-expo": function (t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },

    "ease-out-expo": function (t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },

    "ease-in-out-expo": function (t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },

    "ease-in-circ": function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },

    "ease-out-circ": function (t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },

    "ease-in-out-circ": function (t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },

    "ease-in-elastic": function (t, b, c, d, a, p) {
        a = a || 0;
        if (t==0) return b;
        if ((t/=d)==1) return b+c;
        if (!p) p=d*.3;
        if (a < Math.abs(c)) {
            a=c;
            var s=p/4;
        }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },

    "ease-out-elastic": function (t, b, c, d, a, p) {
        a = a || 0;
        if (t==0) return b;
        if ((t/=d)==1) return b+c;
        if (!p) p=d*.3;
        if (a < Math.abs(c)) {
            a=c;
            var s=p/4;
        }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },

    "ease-in-out-elastic": function (t, b, c, d, a, p) {
        a = a || 0;
        if (t==0) return b;
        if ((t/=d/2)==2) return b+c;
        if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) {
            a=c;
            var s=p/4;
        }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },

    "ease-in-back": function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },

    "ease-out-back": function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },

    "ease-in-out-back": function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },

    "ease-in-bounce": function (t, b, c, d) {
        return c - this["ease-out-bounce"](d-t, 0, c, d) + b;
    },

    "ease-out-bounce": function (t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },

    "ease-in-out-bounce": function (t, b, c, d) {
        if (t < d/2) return this["ease-in-bounce"](t*2, 0, c, d) * .5 + b;
        return this["ease-in-out-bounce"](t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
}
