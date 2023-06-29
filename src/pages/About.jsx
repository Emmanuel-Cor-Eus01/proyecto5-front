import chiLog from '../images/logo-china.jpg';

const About = () => {
    return (
        <>
            <div className='div-about' style={{ padding: "2rem" }}>
                <img src={chiLog} style={{ width: "100%", marginBottom: "1rem" }} alt="" />

                <h2 className='about-title text-center p-2'>¿QUIENES SOMOS?</h2>
                <h4 className='text-about text-justify p-2'>
                China tiene el mercado de comercio electrónico más grande del mundo, por mucho, así como la segunda economía más grande del mundo. Las ventas minoristas en línea de China en 2020 fueron de $ 1,414 mil millones, que es casi el doble del tamaño del siguiente mercado de comercio electrónico más grande en los EE. UU. <br></br>

El mercado de comercio electrónico de China es responsable del 33 % del total de las ventas minoristas en línea a nivel mundial. El comercio electrónico en China ahora representa el 25% de las ventas minoristas totales en el país, en comparación con el 14% en los EE. UU. <br></br><br></br>

Los principales actores del comercio electrónico en China son todas empresas nacionales: Alibaba, JD.com y Pinduoduo. Juntos, sus mercados dominan el comercio electrónico en China con una cuota de mercado combinada del 89,4 %.

Cuando se trata de comercio minorista en línea, China está realmente en una liga propia.<br></br><br></br>

Por consecuencia nuestra empresa esta dentro del mercado electronico de china, brindandole nuestros mejores productos hasta las puertas de su casa y teniendo varias bodegas dentro de la republica mexicana para que pueda checar la calidad de nuestros productos en fisico. <br></br>
                </h4>
                <h2 className='about-title text-center p-4'>NUESTRAS SEDES</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d222808.41208575078!2d-99.20534460373884!3d19.430158876869157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schina%20market!5e0!3m2!1ses!2smx!4v1688012374245!5m2!1ses!2smx" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='mapa'/>

            </div>
        </>

    );
}

export default About;