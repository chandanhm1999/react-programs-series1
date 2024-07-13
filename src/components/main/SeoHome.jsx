
  --jsx

  import { NextSeo } from 'next-seo';



  const HomePage = () => (

   <>

    <NextSeo

     title="Home Page - My Awesome Website"

     description="This is the home page of my awesome website."

     canonical="https://www.myawesomewebsite.com/"

     openGraph={{

      url: 'https://www.myawesomewebsite.com/',

      title: 'Home Page - My Awesome Website',

      description: 'This is the home page of my awesome website.',

      images: [

       {

        url: 'https://www.myawesomewebsite.com/images/og-image.jpg',

        width: 800,

        height: 600,

        alt: 'Og Image Alt',

       },

      ],

      site_name: 'My Awesome Website',

     }}

    />

    <h1>Welcome to My Awesome Website</h1>

   </>

  );

 export default HomePage;
