const prod = process.env.NODE_ENV === 'production';

export default {
    enabled: true,
    fetchUrl: prod ? 'https://stars-website-react-2.ue.r.appspot.com/api/rest-auth/token/obtain/' : 'http://localhost:8000/api/rest-auth/token/obtain/',
    secretKey: "x=y#mma+9+3cixlanut$c3wnbjc)#^6qvg&jz)8p0^e3ybg&80"
};
