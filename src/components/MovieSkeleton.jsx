import  React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import { CardActions } from '@mui/material';

function Media(props) {
  const { loading = false } = props;

  return (
    <Card className='min-w-[345px]' sx={{ maxWidth: 345, m: 2 }}>
     
      {loading ? (
        <Skeleton sx={{ height: 450 }} animation="wave" variant="rectangular" />
      ) : (
        <></>
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
       <></>
        )}
      </CardContent>
      <CardActions disableSpacing>
           <IconButton aria-label="add to favorites">
            <Skeleton animation="wave" height={50} width={40} />
           </IconButton>
           <IconButton aria-label="share">
             <Skeleton animation="wave" height={50} width={40} />
           </IconButton>
         </CardActions>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

const list = [1,2,3,4,5,6,7,8,9,10]

export default function MovieSkeleton() {
  return (
    <div className='flex flex-wrap justify-center mt-5 gap-2 '>
      {list.map(item => <Media key={item} loading />)}
    </div>
  );
}
