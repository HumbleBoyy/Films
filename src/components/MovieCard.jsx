import React, { useState } from 'react'
import { IMG_URL } from '../hooks/getEnv'

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BookmarkAdd } from '@mui/icons-material';



export default function MovieCard({item}) {
  const [showImage, setShowImage] = useState(false)
  
  return (
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
           onMouseMove={()=> setShowImage(true)}
           onMouseLeave={()=> setShowImage(false)}
           component="img"
           className='h-[450px] duration-500 cursor-pointer'
           image={`${IMG_URL}/${showImage ?  item.backdrop_path : item.poster_path}`}
           alt={item.original_title}
         />
         <CardContent>
          <h2 className='text-[20px] font-bold line-clamp-1'>
             {item.original_title}
           </h2>
           <Typography className='line-clamp-2' variant="body2" sx={{ color: 'text.secondary' }}>
              {item.overview}
           </Typography>
         </CardContent>
         <CardActions disableSpacing>
           <IconButton aria-label="add to favorites">
             <FavoriteIcon />
           </IconButton>
           <IconButton aria-label="share">
             <BookmarkAdd />
           </IconButton>
         </CardActions>
       </Card>
 
  );
}

