import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const NewsDetails = ({ news }) => {
   return (
      <div>
         <p>Id: {news?.id}</p>
         <p> Title :{news?.title}</p>
      </div>
   );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
   return <RootLayout>{page}</RootLayout>;
};



// get data 

export async function getStaticPaths() {
   const res = await fetch('http://localhost:5000/news')
   const newses = await res.json();

   const paths = newses.map(news => ({
      params: { newsId: news?.id }
   }))

   return { paths, fallback: false }
};


export const getStaticProps = async (context) => {
   const { params } = context;

   const res = await fetch(`http://localhost:5000/news/${params?.newsId}`)
   const news = await res.json();
   return {
      props: { news: news }
   }

}
