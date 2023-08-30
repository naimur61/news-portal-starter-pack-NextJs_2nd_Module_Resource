import React from 'react';
import { Button, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;




const AllNews = ({ allNews }) => {

   return (
      allNews && allNews.map((n, i) =>
         <Card key={i}
            hoverable
            style={{
               width: 240,
            }}
            cover={<Image alt="example" src={n?.image_url} width={500} height={500} layout='responsive' />}
         >
            <Meta title={n?.title} description={n?.description} />

            <Link href={`/news/${n?.id}`}><Button>Read More</Button></Link>
         </Card>
      )
   )
};
export default AllNews;