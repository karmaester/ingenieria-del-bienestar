import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import DocumentMeta from 'react-document-meta';
import Banner2 from "../banner/Banner2";


function MyApp({ Component, pageProps }) {

  const meta = {
    author: 'Julio Rojas Ortega',
    'content-language': 'es',
    robots: 'all',
    title: 'Ginecologo Puerto Montt. Dr Julio Rojas. Ecografia. Doppler. Embarazo. Ecografia semana 11- 14 .Toma de pap. Especialista en salud femenina',
    description: 'Ofrecemos servicios de salud femenina de alta calidad, que incluyen evaluación anual  de rutina, diagnóstico y tratamiento de enfermedades prevalentes de la mujer. Control de embarazo de Alto y bajo riesgo',
    canonical: 'https://ginecologopuertomontt.com/',
    image: 'https://scontent.feoh4-3.fna.fbcdn.net/v/t39.30808-6/317503767_129456336612136_748922904224979702_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGkPIUrp3WuJyCYPW62LjNzVnoSS2TNL29WehJLZM0vb01xX4NKoT0lSFp1T1rE9QSKTJCUewV4tVuoFJx3vKos&_nc_ohc=vV49bUIPZwYAX9511sq&_nc_ht=scontent.feoh4-3.fna&oh=00_AfA9EDGMdEzSlh3cPPGK4L634sZ7DVJ3JC3D5uixSk77zQ&oe=645678FF',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'ginecología,ginecologo,embarazo,ecografia-embarazo,ecografia-TV,PAP,menopausia,dolor-pélvico,planificación-familiar,anticonceptivo,Mirena'
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DocumentMeta>
  );
}

export default MyApp;
